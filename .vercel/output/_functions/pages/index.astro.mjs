import { A as AstroError, U as UnknownContentCollectionError, c as createComponent, R as RenderUndefinedEntryError, u as unescapeHTML, a as renderTemplate, d as renderUniqueStylesheet, e as renderScriptElement, f as createHeadAndContent, r as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_ylGHJKb9.mjs';
import 'piccolore';
import { escape } from 'html-escaper';
import { Traverse } from 'neotraverse/modern';
import { z } from 'zod';
import { r as removeBase, i as isRemotePath, p as prependForwardSlash } from '../chunks/path_Bl04Vi8h.mjs';
import { V as VALID_INPUT_FORMATS } from '../chunks/consts_BmVDRGlB.mjs';
import * as devalue from 'devalue';
import { $ as $$BaseLayout, N as Navbar, F as Footer } from '../chunks/Footer_CLSMih39.mjs';
import { e as escape_html, a as attr, b as bind_props } from '../chunks/_@astro-renderers_e8tZXpDX.mjs';
export { r as renderers } from '../chunks/_@astro-renderers_e8tZXpDX.mjs';
import { f as fallback } from '../chunks/utils_DmF-9_lv.mjs';
import { h as html } from '../chunks/html_CfyvkLET.mjs';

const CONTENT_IMAGE_FLAG = "astroContentImageFlag";
const IMAGE_IMPORT_PREFIX = "__ASTRO_IMAGE_";

function imageSrcToImportId(imageSrc, filePath) {
  imageSrc = removeBase(imageSrc, IMAGE_IMPORT_PREFIX);
  if (isRemotePath(imageSrc)) {
    return;
  }
  const ext = imageSrc.split(".").at(-1)?.toLowerCase();
  if (!ext || !VALID_INPUT_FORMATS.includes(ext)) {
    return;
  }
  const params = new URLSearchParams(CONTENT_IMAGE_FLAG);
  if (filePath) {
    params.set("importer", filePath);
  }
  return `${imageSrc}?${params.toString()}`;
}

class ImmutableDataStore {
  _collections = /* @__PURE__ */ new Map();
  constructor() {
    this._collections = /* @__PURE__ */ new Map();
  }
  get(collectionName, key) {
    return this._collections.get(collectionName)?.get(String(key));
  }
  entries(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.entries()];
  }
  values(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.values()];
  }
  keys(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.keys()];
  }
  has(collectionName, key) {
    const collection = this._collections.get(collectionName);
    if (collection) {
      return collection.has(String(key));
    }
    return false;
  }
  hasCollection(collectionName) {
    return this._collections.has(collectionName);
  }
  collections() {
    return this._collections;
  }
  /**
   * Attempts to load a DataStore from the virtual module.
   * This only works in Vite.
   */
  static async fromModule() {
    try {
      const data = await import('../chunks/_astro_data-layer-content_-B43J0mk.mjs');
      if (data.default instanceof Map) {
        return ImmutableDataStore.fromMap(data.default);
      }
      const map = devalue.unflatten(data.default);
      return ImmutableDataStore.fromMap(map);
    } catch {
    }
    return new ImmutableDataStore();
  }
  static async fromMap(data) {
    const store = new ImmutableDataStore();
    store._collections = data;
    return store;
  }
}
function dataStoreSingleton() {
  let instance = void 0;
  return {
    get: async () => {
      if (!instance) {
        instance = ImmutableDataStore.fromModule();
      }
      return instance;
    },
    set: (store) => {
      instance = store;
    }
  };
}
const globalDataStore = dataStoreSingleton();

const __vite_import_meta_env__ = {"ASSETS_PREFIX": undefined, "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "SITE": "https://mdo-steel.vercel.app", "SSR": true};
function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1) continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
z.object({
  tags: z.array(z.string()).optional(),
  lastModified: z.date().optional()
});
function emulateLegacyEntry({ legacyId, ...entry }) {
  const legacyEntry = {
    ...entry,
    id: legacyId,
    slug: entry.id
  };
  return {
    ...legacyEntry,
    // Define separately so the render function isn't included in the object passed to `renderEntry()`
    render: () => renderEntry(legacyEntry)
  };
}
function createGetEntry({
  getEntryImport,
  getRenderEntryImport,
  collectionNames,
  liveCollections
}) {
  return async function getEntry(collectionOrLookupObject, lookup) {
    let collection, lookupId;
    if (typeof collectionOrLookupObject === "string") {
      collection = collectionOrLookupObject;
      if (!lookup)
        throw new AstroError({
          ...UnknownContentCollectionError,
          message: "`getEntry()` requires an entry identifier as the second argument."
        });
      lookupId = lookup;
    } else {
      collection = collectionOrLookupObject.collection;
      lookupId = "id" in collectionOrLookupObject ? collectionOrLookupObject.id : collectionOrLookupObject.slug;
    }
    if (collection in liveCollections) {
      throw new AstroError({
        ...UnknownContentCollectionError,
        message: `Collection "${collection}" is a live collection. Use getLiveEntry() instead of getEntry().`
      });
    }
    if (typeof lookupId === "object") {
      throw new AstroError({
        ...UnknownContentCollectionError,
        message: `The entry identifier must be a string. Received object.`
      });
    }
    const store = await globalDataStore.get();
    if (store.hasCollection(collection)) {
      const entry2 = store.get(collection, lookupId);
      if (!entry2) {
        console.warn(`Entry ${collection} → ${lookupId} was not found.`);
        return;
      }
      const { default: imageAssetMap } = await import('../chunks/content-assets_DleWbedO.mjs');
      entry2.data = updateImageReferencesInData(entry2.data, entry2.filePath, imageAssetMap);
      if (entry2.legacyId) {
        return emulateLegacyEntry({ ...entry2, collection });
      }
      return {
        ...entry2,
        collection
      };
    }
    if (!collectionNames.has(collection)) {
      console.warn(
        `The collection ${JSON.stringify(collection)} does not exist. Please ensure it is defined in your content config.`
      );
      return void 0;
    }
    const entryImport = await getEntryImport(collection, lookupId);
    if (typeof entryImport !== "function") return void 0;
    const entry = await entryImport();
    if (entry._internal.type === "content") {
      return {
        id: entry.id,
        slug: entry.slug,
        body: entry.body,
        collection: entry.collection,
        data: entry.data,
        async render() {
          return render({
            collection: entry.collection,
            id: entry.id,
            renderEntryImport: await getRenderEntryImport(collection, lookupId)
          });
        }
      };
    } else if (entry._internal.type === "data") {
      return {
        id: entry.id,
        collection: entry.collection,
        data: entry.data
      };
    }
    return void 0;
  };
}
const CONTENT_LAYER_IMAGE_REGEX = /__ASTRO_IMAGE_="([^"]+)"/g;
async function updateImageReferencesInBody(html, fileName) {
  const { default: imageAssetMap } = await import('../chunks/content-assets_DleWbedO.mjs');
  const imageObjects = /* @__PURE__ */ new Map();
  const { getImage } = await import('../chunks/_astro_assets_DhjCCDPy.mjs').then(n => n._);
  for (const [_full, imagePath] of html.matchAll(CONTENT_LAYER_IMAGE_REGEX)) {
    try {
      const decodedImagePath = JSON.parse(imagePath.replaceAll("&#x22;", '"'));
      let image;
      if (URL.canParse(decodedImagePath.src)) {
        image = await getImage(decodedImagePath);
      } else {
        const id = imageSrcToImportId(decodedImagePath.src, fileName);
        const imported = imageAssetMap.get(id);
        if (!id || imageObjects.has(id) || !imported) {
          continue;
        }
        image = await getImage({ ...decodedImagePath, src: imported });
      }
      imageObjects.set(imagePath, image);
    } catch {
      throw new Error(`Failed to parse image reference: ${imagePath}`);
    }
  }
  return html.replaceAll(CONTENT_LAYER_IMAGE_REGEX, (full, imagePath) => {
    const image = imageObjects.get(imagePath);
    if (!image) {
      return full;
    }
    const { index, ...attributes } = image.attributes;
    return Object.entries({
      ...attributes,
      src: image.src,
      srcset: image.srcSet.attribute,
      // This attribute is used by the toolbar audit
      ...Object.assign(__vite_import_meta_env__, { Path: process.env.Path }).DEV ? { "data-image-component": "true" } : {}
    }).map(([key, value]) => value ? `${key}="${escape(value)}"` : "").join(" ");
  });
}
function updateImageReferencesInData(data, fileName, imageAssetMap) {
  return new Traverse(data).map(function(ctx, val) {
    if (typeof val === "string" && val.startsWith(IMAGE_IMPORT_PREFIX)) {
      const src = val.replace(IMAGE_IMPORT_PREFIX, "");
      const id = imageSrcToImportId(src, fileName);
      if (!id) {
        ctx.update(src);
        return;
      }
      const imported = imageAssetMap?.get(id);
      if (imported) {
        ctx.update(imported);
      } else {
        ctx.update(src);
      }
    }
  });
}
async function renderEntry(entry) {
  if (!entry) {
    throw new AstroError(RenderUndefinedEntryError);
  }
  if ("render" in entry && !("legacyId" in entry)) {
    return entry.render();
  }
  if (entry.deferredRender) {
    try {
      const { default: contentModules } = await import('../chunks/content-modules_Dz-S_Wwv.mjs');
      const renderEntryImport = contentModules.get(entry.filePath);
      return render({
        collection: "",
        id: entry.id,
        renderEntryImport
      });
    } catch (e) {
      console.error(e);
    }
  }
  const html = entry?.rendered?.metadata?.imagePaths?.length && entry.filePath ? await updateImageReferencesInBody(entry.rendered.html, entry.filePath) : entry?.rendered?.html;
  const Content = createComponent(() => renderTemplate`${unescapeHTML(html)}`);
  return {
    Content,
    headings: entry?.rendered?.metadata?.headings ?? [],
    remarkPluginFrontmatter: entry?.rendered?.metadata?.frontmatter ?? {}
  };
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function") throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object") throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function") throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object") throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const liveCollections = {};

const contentDir = '/src/content/';

const contentEntryGlob = "";
createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = "";
createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
const collectionToEntryMap = createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {};

const collectionNames = new Set(Object.keys(lookupMap));

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = "";
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const getEntry = createGetEntry({
	getEntryImport: createGlobLookup(collectionToEntryMap),
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
	collectionNames,
	liveCollections,
});

function HeroSection($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let badge = fallback($$props['badge'], "Programa Acreditado de Calidad");
		let title = fallback($$props['title'], "Excelencia en Gestión de Organizaciones");
		let subtitle = fallback($$props['subtitle'], "Forma parte de un programa de posgrado reconocido por CONAHCYT y desarrolla competencias estratégicas para dirigir organizaciones del futuro.");
		let primaryCTA = fallback($$props['primaryCTA'], () => ({ text: "Plan de Estudios", href: "/objetivos" }), true);
		let secondaryCTA = fallback($$props['secondaryCTA'], () => ({ text: "Convocatoria 2026", href: "/convocatoria" }), true);

		$$renderer.push(`<section class="relative w-full overflow-hidden bg-corporate-black h-[85vh] flex items-center"><div class="absolute inset-0 z-0"><img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&amp;w=2070&amp;auto=format&amp;fit=crop" alt="Campus universitario" class="w-full h-full object-cover opacity-30 mix-blend-overlay"/> <div class="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div></div> <div class="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 w-full"><div class="max-w-3xl"><div class="inline-block px-4 py-2 border-l-4 border-uagro-red bg-white/5 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-[0.2em] mb-8">${escape_html(badge)}</div> <h1 class="text-5xl md:text-7xl font-display font-bold text-white leading-tight mb-8">${escape_html(title)}</h1> <p class="text-xl md:text-2xl text-gray-300 leading-relaxed mb-12 font-light max-w-2xl border-l-2 border-white/20 pl-6">${escape_html(subtitle)}</p> <div class="flex flex-col sm:flex-row gap-6"><a${attr('href', primaryCTA.href)} class="inline-flex items-center justify-center px-8 py-5 bg-uagro-red hover:bg-white hover:text-uagro-red text-white font-bold uppercase tracking-widest transition-all text-sm w-full sm:w-auto border border-uagro-red">${escape_html(primaryCTA.text)}</a> <a${attr('href', secondaryCTA.href)} class="inline-flex items-center justify-center px-8 py-5 border border-white text-white hover:bg-white hover:text-black font-bold uppercase tracking-widest transition-all text-sm w-full sm:w-auto">${escape_html(secondaryCTA.text)}</a></div></div></div></section>`);
		bind_props($$props, { badge, title, subtitle, primaryCTA, secondaryCTA });
	});
}

function FeatureCard($$renderer, $$props) {
	let icon = $$props['icon'];
	let title = $$props['title'];
	let description = $$props['description'];

	$$renderer.push(`<div class="bg-corporate-gray-100 p-10 transition-all duration-300 border-l-4 border-transparent hover:border-uagro-red group h-full"><div class="mb-8"><div class="w-12 h-12 text-uagro-red group-hover:scale-110 transition-transform">${html(icon)}</div></div> <h3 class="text-xl font-display font-bold text-corporate-black mb-4 group-hover:text-uagro-red transition-colors uppercase tracking-wide">${escape_html(title)}</h3> <p class="text-gray-600 leading-relaxed font-light">${escape_html(description)}</p></div>`);
	bind_props($$props, { icon, title, description });
}

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const homeContent = await getEntry("pages", "home");
  const {
    badge,
    heroTitle,
    heroSubtitle,
    primaryCTA,
    secondaryCTA,
    features,
    stats
  } = homeContent.data;
  const featureIcons = [
    '<svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="square" stroke-linejoin="miter" stroke-width="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>',
    '<svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="square" stroke-linejoin="miter" stroke-width="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>',
    '<svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="square" stroke-linejoin="miter" stroke-width="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>',
    '<svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="square" stroke-linejoin="miter" stroke-width="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>'
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "MDO UAGro - Maestr\xEDa en Direcci\xF3n de Organizaciones" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", Navbar, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/Luis/Desktop/Pagina Maestria Alt/src/components/Navbar.svelte", "client:component-export": "default" })} ${maybeRenderHead()}<main class="bg-corporate-dark"> <!-- Hero Section --> ${renderComponent($$result2, "HeroSection", HeroSection, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/Luis/Desktop/Pagina Maestria Alt/src/components/HeroSection.svelte", "client:component-export": "default" })} <!-- Features Section --> <section class="py-24 bg-white"> <div class="max-w-7xl mx-auto px-6 sm:px-8"> <div class="grid md:grid-cols-3 gap-0 border-t border-gray-200 divide-y md:divide-y-0 md:divide-x divide-gray-200"> ${features.map((feature, index) => renderTemplate`${renderComponent($$result2, "FeatureCard", FeatureCard, { "icon": featureIcons[index % featureIcons.length], "title": feature.title, "description": feature.description, "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/Luis/Desktop/Pagina Maestria Alt/src/components/FeatureCard.svelte", "client:component-export": "default" })}`)} </div> </div> </section> <!-- About Section --> <section class="py-32 bg-corporate-gray-100"> <div class="max-w-7xl mx-auto px-6 sm:px-8"> <div class="grid md:grid-cols-2 gap-16 items-center"> <!-- Left Column: Image --> <div class="relative"> <div class="aspect-[4/3] overflow-hidden"> <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=600&fit=crop" alt="Estudiantes de posgrado en clase" class="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"> </div> <div class="absolute -bottom-8 -right-8 bg-uagro-red text-white p-8"> <p class="text-5xl font-display font-bold">25+</p> <p class="text-sm font-bold uppercase tracking-widest mt-2">
Años de excelencia
</p> </div> </div> <!-- Right Column: Content --> <div> <div class="inline-block px-3 py-1 bg-gray-200 text-gray-800 text-xs font-bold uppercase tracking-widest mb-6">
Acerca del Programa
</div> <h2 class="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-8 leading-tight">
Formando Líderes con Visión Estratégica
</h2> <p class="text-gray-600 leading-relaxed mb-6 font-light text-lg">
La Maestría en Dirección de Organizaciones (MDO) de
							la UAGro tiene como objetivo formar personas con
							capacidades directivas y de investigación de alto
							nivel, competentes en el diseño, implementación y
							evaluación de modelos de gestión.
</p> <p class="text-gray-600 leading-relaxed mb-10 font-light">
Nuestro programa se enfoca en optimizar el desempeño
							de las organizaciones, orientando sus resultados
							hacia la creación sostenible con impacto social en
							la región.
</p> <a href="/conocenos" class="inline-flex items-center gap-3 text-uagro-red font-bold uppercase tracking-widest border-b-2 border-transparent hover:border-uagro-red transition-all pb-1 hover:pr-4">
Conoce más sobre nosotros
<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="square" stroke-linejoin="miter" stroke-width="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path> </svg> </a> </div> </div> </div> </section> <!-- Stats Section --> <section class="py-24 bg-corporate-black text-white relative overflow-hidden"> <!-- Decorative grid pattern --> <div class="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div> <div class="relative z-10 max-w-7xl mx-auto px-6 sm:px-8"> <div class="grid grid-cols-2 md:grid-cols-4 gap-12 text-center divide-x divide-white/10"> <div class="px-4"> <p class="text-5xl md:text-6xl font-display font-bold mb-4 text-uagro-red">
16
</p> <p class="text-gray-400 text-xs md:text-sm font-bold uppercase tracking-widest">
Profesores Investigadores
</p> </div> <div class="px-4"> <p class="text-5xl md:text-6xl font-display font-bold mb-4 text-uagro-red">
100%
</p> <p class="text-gray-400 text-xs md:text-sm font-bold uppercase tracking-widest">
Con Doctorado
</p> </div> <div class="px-4"> <p class="text-5xl md:text-6xl font-display font-bold mb-4 text-uagro-red">
2
</p> <p class="text-gray-400 text-xs md:text-sm font-bold uppercase tracking-widest">
Líneas de Investigación
</p> </div> <div class="px-4"> <p class="text-5xl md:text-6xl font-display font-bold mb-4 text-uagro-red">
4
</p> <p class="text-gray-400 text-xs md:text-sm font-bold uppercase tracking-widest">
Semestres
</p> </div> </div> </div> </section> <!-- Institutional Logos Section --> <section class="py-20 bg-white border-b border-gray-100"> <div class="max-w-7xl mx-auto px-6 sm:px-8 text-center"> <p class="text-xs font-bold text-gray-400 uppercase tracking-[0.3em] mb-12">
Con el respaldo de
</p> <div class="flex flex-wrap items-center justify-center gap-16 md:gap-24 opacity-80 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"> <img src="/logo-uagro.png" alt="UAGro" class="h-20 w-auto object-contain"> <div class="h-16 w-px bg-gray-200 hidden md:block"></div> <img src="/logo-facultad.png" alt="Facultad de Contaduría y Administración" class="h-20 w-auto object-contain"> <div class="h-16 w-px bg-gray-200 hidden md:block"></div> <img src="/logo-mdo.png" alt="Maestría en Dirección de Organizaciones" class="h-20 w-auto object-contain"> </div> </div> </section> <!-- CTA Section --> <section class="py-32 bg-corporate-gray-100 relative"> <div class="max-w-5xl mx-auto px-6 sm:px-8 text-center"> <h2 class="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-8 max-w-3xl mx-auto">
¿Listo para avanzar en tu carrera profesional?
</h2> <p class="text-xl text-gray-500 mb-12 font-light max-w-2xl mx-auto">
Consulta nuestra convocatoria vigente e inicia tu proceso de
					admisión al posgrado.
</p> <div class="flex flex-col sm:flex-row gap-6 justify-center"> <a href="#" class="inline-flex items-center justify-center px-10 py-5 bg-white border border-gray-300 text-gray-900 font-bold uppercase tracking-widest hover:bg-gray-50 transition-all w-full sm:w-auto text-sm"> <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="square" stroke-linejoin="miter" stroke-width="1.5" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"></path> </svg>
Descargar Folleto
</a> <a href="/convocatoria" class="inline-flex items-center justify-center px-10 py-5 bg-uagro-red text-white font-bold uppercase tracking-widest hover:bg-uagro-red-dark transition-all w-full sm:w-auto text-sm shadow-xl shadow-uagro-red/20">
Ver Convocatoria
<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="square" stroke-linejoin="miter" stroke-width="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path> </svg> </a> </div> </div> </section> </main> ${renderComponent($$result2, "Footer", Footer, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/Luis/Desktop/Pagina Maestria Alt/src/components/Footer.svelte", "client:component-export": "default" })} ` })}`;
}, "C:/Users/Luis/Desktop/Pagina Maestria Alt/src/pages/index.astro", void 0);

const $$file = "C:/Users/Luis/Desktop/Pagina Maestria Alt/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
