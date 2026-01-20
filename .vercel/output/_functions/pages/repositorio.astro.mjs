import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_ylGHJKb9.mjs';
import 'piccolore';
import { $ as $$BaseLayout, N as Navbar, F as Footer } from '../chunks/Footer_CLSMih39.mjs';
import { a as attr, e as escape_html, b as bind_props } from '../chunks/_@astro-renderers_e8tZXpDX.mjs';
export { r as renderers } from '../chunks/_@astro-renderers_e8tZXpDX.mjs';
import { f as fallback } from '../chunks/utils_DmF-9_lv.mjs';

function TesisCard($$renderer, $$props) {
	let alumno = $$props['alumno'];
	let generacion = $$props['generacion'];
	let tituloTesis = $$props['tituloTesis'];
	let archivoPdf = fallback($$props['archivoPdf'], '#');
	let foto = $$props['foto'];

	$$renderer.push(`<div class="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"><div class="flex flex-col sm:flex-row gap-4 p-6"><div class="flex-shrink-0"><div class="w-20 h-20 rounded-full overflow-hidden bg-gray-200"><img${attr('src', foto)}${attr('alt', `Foto de ${alumno}`)} class="w-full h-full object-cover"/></div></div> <div class="flex-1 min-w-0"><div class="flex items-center gap-2 mb-2"><span class="inline-flex items-center px-2 py-1 rounded-md bg-uagro-navy/10 text-uagro-navy text-xs font-bold">${escape_html(generacion)}</span></div> <h3 class="text-lg font-bold text-gray-900 mb-2">${escape_html(alumno)}</h3> <p class="text-sm text-gray-600 line-clamp-2 mb-4">${escape_html(tituloTesis)}</p> <a${attr('href', archivoPdf)} download="" class="inline-flex items-center gap-2 text-sm font-semibold text-uagro-red hover:text-uagro-red-dark transition-colors group-hover:translate-x-1 transform duration-200"><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg> Descargar PDF</a></div></div></div>`);
	bind_props($$props, { alumno, generacion, tituloTesis, archivoPdf, foto });
}

const $$Repositorio = createComponent(($$result, $$props, $$slots) => {
  const tesis = [
    {
      alumno: "Mar\xEDa Elena Rodr\xEDguez Santos",
      generacion: "2022-2024",
      tituloTesis: "Estrategias de innovaci\xF3n organizacional en PYMES del sector tur\xEDstico en Acapulco",
      archivoPdf: "#",
      foto: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=faces"
    },
    {
      alumno: "Jos\xE9 Luis Mart\xEDnez P\xE9rez",
      generacion: "2022-2024",
      tituloTesis: "Impacto del liderazgo transformacional en la competitividad de empresas manufactureras",
      archivoPdf: "#",
      foto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=faces"
    },
    {
      alumno: "Ana Patricia G\xF3mez Cruz",
      generacion: "2021-2023",
      tituloTesis: "Responsabilidad social empresarial y su efecto en la imagen corporativa",
      archivoPdf: "#",
      foto: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&crop=faces"
    },
    {
      alumno: "Carlos Alberto Hern\xE1ndez",
      generacion: "2021-2023",
      tituloTesis: "Gesti\xF3n del capital humano en organizaciones de servicios tur\xEDsticos",
      archivoPdf: "#",
      foto: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=faces"
    },
    {
      alumno: "Laura Isabel S\xE1nchez",
      generacion: "2020-2022",
      tituloTesis: "Planeaci\xF3n estrat\xE9gica y ventaja competitiva en empresas hoteleras",
      archivoPdf: "#",
      foto: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=faces"
    },
    {
      alumno: "Roberto Garc\xEDa L\xF3pez",
      generacion: "2020-2022",
      tituloTesis: "Transformaci\xF3n digital y su impacto en la eficiencia organizacional",
      archivoPdf: "#",
      foto: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=faces"
    }
  ];
  const generaciones = ["Todas", "2022-2024", "2021-2023", "2020-2022", "2019-2021"];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Repositorio de Tesis - MDO UAGro", "description": "Consulta las tesis de los egresados de la Maestr\xEDa en Direcci\xF3n de Organizaciones." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", Navbar, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/Luis/Desktop/Pagina Maestria Alt/src/components/Navbar.svelte", "client:component-export": "default" })} ${maybeRenderHead()}<main class="min-h-screen bg-gray-50 py-12"> <div class="max-w-7xl mx-auto px-4 sm:px-6"> <!-- Page Header --> <div class="text-center mb-12"> <div class="inline-flex items-center gap-2 px-3 py-1 rounded-pill bg-uagro-navy/10 text-uagro-navy text-xs font-bold uppercase tracking-wider mb-4">
Producción Académica
</div> <h1 class="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
Repositorio de Tesis
</h1> <p class="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
Consulta los trabajos de investigación realizados por nuestros egresados, contribuciones valiosas al conocimiento en gestión organizacional.
</p> </div> <!-- Filter Section --> <div class="bg-white rounded-2xl shadow-md p-6 mb-8"> <div class="flex flex-wrap items-center gap-3"> <span class="text-sm font-semibold text-gray-700">Filtrar por generación:</span> ${generaciones.map((gen) => renderTemplate`<button${addAttribute(`px-4 py-2 rounded-pill text-sm font-semibold transition-all ${gen === "Todas" ? "bg-uagro-navy text-white shadow-md" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`, "class")}> ${gen} </button>`)} </div> </div> <!-- Stats --> <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"> <div class="bg-white rounded-xl p-6 text-center shadow-md"> <p class="text-3xl font-extrabold text-uagro-navy mb-2">200+</p> <p class="text-sm text-gray-600 font-semibold">Tesis Publicadas</p> </div> <div class="bg-white rounded-xl p-6 text-center shadow-md"> <p class="text-3xl font-extrabold text-uagro-navy mb-2">15</p> <p class="text-sm text-gray-600 font-semibold">Generaciones</p> </div> <div class="bg-white rounded-xl p-6 text-center shadow-md"> <p class="text-3xl font-extrabold text-uagro-navy mb-2">3</p> <p class="text-sm text-gray-600 font-semibold">Líneas de Investigación</p> </div> <div class="bg-white rounded-xl p-6 text-center shadow-md"> <p class="text-3xl font-extrabold text-uagro-navy mb-2">95%</p> <p class="text-sm text-gray-600 font-semibold">Tasa de Titulación</p> </div> </div> <!-- Thesis Grid --> <div class="grid md:grid-cols-2 gap-6"> ${tesis.map((t) => renderTemplate`${renderComponent($$result2, "TesisCard", TesisCard, { "alumno": t.alumno, "generacion": t.generacion, "tituloTesis": t.tituloTesis, "archivoPdf": t.archivoPdf, "foto": t.foto, "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/Luis/Desktop/Pagina Maestria Alt/src/components/TesisCard.svelte", "client:component-export": "default" })}`)} </div> <!-- Info Note --> <div class="mt-12 bg-blue-50 border-l-4 border-uagro-navy p-6 rounded-r-lg"> <div class="flex gap-4"> <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-uagro-navy shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> <div> <p class="font-semibold text-gray-900 mb-2">Acceso a Tesis Completas</p> <p class="text-sm text-gray-700 leading-relaxed">
Las tesis se encuentran disponibles para consulta y descarga en formato PDF. Los trabajos representan contribuciones originales al conocimiento en las áreas de gestión estratégica, desarrollo organizacional y sustentabilidad empresarial.
</p> </div> </div> </div> </div> </main> ${renderComponent($$result2, "Footer", Footer, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/Luis/Desktop/Pagina Maestria Alt/src/components/Footer.svelte", "client:component-export": "default" })} ` })}`;
}, "C:/Users/Luis/Desktop/Pagina Maestria Alt/src/pages/repositorio.astro", void 0);

const $$file = "C:/Users/Luis/Desktop/Pagina Maestria Alt/src/pages/repositorio.astro";
const $$url = "/repositorio";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Repositorio,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
