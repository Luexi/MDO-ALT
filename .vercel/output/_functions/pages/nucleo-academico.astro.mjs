import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_ylGHJKb9.mjs';
import 'piccolore';
import { $ as $$BaseLayout, N as Navbar, F as Footer } from '../chunks/Footer_CLSMih39.mjs';
import { a as attr, e as escape_html, b as bind_props } from '../chunks/_@astro-renderers_e8tZXpDX.mjs';
export { r as renderers } from '../chunks/_@astro-renderers_e8tZXpDX.mjs';
import { f as fallback } from '../chunks/utils_DmF-9_lv.mjs';

function ProfesorCard($$renderer, $$props) {
	let nombre = $$props['nombre'];
	let titulo = $$props['titulo'];
	let especialidad = $$props['especialidad'];
	let foto = $$props['foto'];
	let colorFondo = fallback($$props['colorFondo'], "azul" // Unused in new design but kept for prop compatibility
	);

	$$renderer.push(`<div class="group relative bg-white border border-gray-100 hover:border-uagro-red transition-all duration-300"><div class="aspect-[3/4] relative overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500"><img${attr('src', foto)}${attr('alt', `Foto de ${nombre}`)} class="w-full h-full object-cover object-center"/></div> <div class="p-6 bg-white border-t border-gray-100 relative"><div class="absolute top-0 left-0 w-full h-0.5 bg-uagro-red transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div> <h3 class="text-xl font-display font-bold mb-2 text-corporate-black leading-tight group-hover:text-uagro-red transition-colors">${escape_html(nombre)}</h3> <p class="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">${escape_html(titulo)}</p> `);

	if (especialidad) {
		$$renderer.push('<!--[-->');
		$$renderer.push(`<p class="text-sm font-light text-gray-400 italic font-display">${escape_html(especialidad)}</p>`);
	} else {
		$$renderer.push('<!--[!-->');
	}

	$$renderer.push(`<!--]--></div></div>`);
	bind_props($$props, { nombre, titulo, especialidad, foto, colorFondo });
}

const $$NucleoAcademico = createComponent(($$result, $$props, $$slots) => {
  const profesores = [
    {
      nombre: "Dr. Rub\xE9n Hern\xE1ndez Chavarr\xEDa",
      titulo: "Doctor en administraci\xF3n p\xFAblico",
      especialidad: "Gesti\xF3n y Desarrollo Empresarial",
      foto: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
      colorFondo: "azul"
    },
    {
      nombre: "Dr. David Antonio Reyes Pe\xF1a",
      titulo: "Doctor en administraci\xF3n",
      especialidad: "Gesti\xF3n y Desarrollo Empresarial",
      foto: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      colorFondo: "rojo"
    },
    {
      nombre: "Dr. Jos\xE9 Luis Susano Garc\xEDa",
      titulo: "Doctor en administraci\xF3n y gesti\xF3n empresarial",
      especialidad: "Gesti\xF3n y Desarrollo Empresarial",
      foto: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
      colorFondo: "gris"
    },
    {
      nombre: "Dra. Irma Amalia M\xE9ndez Castrej\xF3n",
      titulo: "Doctora en ciencias de la educaci\xF3n",
      especialidad: "Gesti\xF3n y Desarrollo Empresarial",
      foto: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
      colorFondo: "azul"
    },
    {
      nombre: "Dra. Evelyn Janet Zavaleta Carbajal",
      titulo: "Doctora en administraci\xF3n p\xFAblica",
      especialidad: "Gesti\xF3n y Desarrollo Empresarial",
      foto: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
      colorFondo: "rojo"
    },
    {
      nombre: "Dra. Yanira Gallardo Moreno",
      titulo: "Doctora en administraci\xF3n",
      especialidad: "Gesti\xF3n y Desarrollo Empresarial",
      foto: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      colorFondo: "gris"
    },
    {
      nombre: "Dra. Adriana Miranda Esteban",
      titulo: "Doctora en ciencias ambientales",
      especialidad: "Gesti\xF3n y Desarrollo Empresarial",
      foto: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop",
      colorFondo: "azul"
    },
    {
      nombre: "Dra. Tania de Jes\xFAs Adame Zambrano",
      titulo: "Doctora en Direcci\xF3n de Organizaciones",
      especialidad: "Gesti\xF3n y Desarrollo Empresarial",
      foto: "https://images.unsplash.com/photo-1598550832205-d5a2d4860d5b?w=400&h=400&fit=crop",
      colorFondo: "rojo"
    },
    {
      nombre: "Dr. Justino Arziga Casta\xF1\xF3n",
      titulo: "Doctor en ciencias del desarrollo regional",
      especialidad: "Gesti\xF3n y Desarrollo Empresarial",
      foto: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      colorFondo: "gris"
    },
    {
      nombre: "Dr. Jos\xE9 Hugo V\xE1zquez Mendoza",
      titulo: "Doctor en administraci\xF3n",
      especialidad: "Gesti\xF3n y Desarrollo Empresarial",
      foto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      colorFondo: "azul"
    },
    {
      nombre: "Dra. Nallely V\xE1zquez Mart\xEDnez",
      titulo: "Doctora en direcci\xF3n de organizaciones",
      especialidad: "Gesti\xF3n y Desarrollo Empresarial",
      foto: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop",
      colorFondo: "rojo"
    },
    {
      nombre: "Dra. Gabriela del Carmen Rivero Solana",
      titulo: "Doctora en administraci\xF3n p\xFAblica",
      especialidad: "Gesti\xF3n y Desarrollo Empresarial",
      foto: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=400&fit=crop",
      colorFondo: "gris"
    },
    {
      nombre: "Dra. Rosa Alejandra V\xE1zquez Mart\xEDnez",
      titulo: "Doctora en administraci\xF3n",
      especialidad: "Gesti\xF3n y Desarrollo Empresarial",
      foto: "https://images.unsplash.com/photo-1520813792240-56fc4a37b1a9?w=400&h=400&fit=crop",
      colorFondo: "azul"
    },
    {
      nombre: "Dra. Citlalli Arroyo Rosas",
      titulo: "Doctora en administraci\xF3n p\xFAblica",
      especialidad: "Gesti\xF3n y Desarrollo Empresarial",
      foto: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&h=400&fit=crop",
      colorFondo: "rojo"
    },
    {
      nombre: "Dra. Liliana Galeana Camacho",
      titulo: "Doctora en administraci\xF3n p\xFAblica",
      especialidad: "Gesti\xF3n y Desarrollo Empresarial",
      foto: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=400&h=400&fit=crop",
      colorFondo: "gris"
    },
    {
      nombre: "Dr. Remigio Mar\xEDn Ibarra",
      titulo: "Doctor en administraci\xF3n",
      especialidad: "Gesti\xF3n y Desarrollo Empresarial",
      foto: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&h=400&fit=crop",
      colorFondo: "azul"
    }
  ];
  const stats = [
    {
      value: "16",
      label: "Profesores Investigadores",
      color: "text-uagro-red"
    },
    { value: "100%", label: "Con Doctorado", color: "text-uagro-red" },
    {
      value: "SNI",
      label: "Reconocimiento Nacional",
      color: "text-corporate-black"
    },
    {
      value: "PRODEP",
      label: "Perfil Deseable",
      color: "text-corporate-black"
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "N\xFAcleo Acad\xE9mico - MDO UAGro", "description": "Conoce al cuerpo docente y de investigaci\xF3n de la Maestr\xEDa en Direcci\xF3n de Organizaciones." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", Navbar, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/Luis/Desktop/Pagina Maestria Alt/src/components/Navbar.svelte", "client:component-export": "default" })} ${maybeRenderHead()}<main class="min-h-screen bg-corporate-gray-100 py-20"> <div class="max-w-7xl mx-auto px-6 sm:px-8"> <!-- Page Header --> <div class="mb-20"> <div class="inline-block px-3 py-1 bg-corporate-black text-white text-xs font-bold uppercase tracking-widest mb-6">
Facultad
</div> <h1 class="text-5xl md:text-6xl font-display font-bold text-corporate-black mb-8 leading-tight">
Núcleo Académico Básico
</h1> <p class="text-xl text-gray-500 max-w-3xl leading-relaxed font-light border-l-4 border-uagro-red pl-6">
Nuestro programa cuenta con un cuerpo docente de alto nivel,
					integrado por investigadores y profesionales con amplia
					experiencia en la dirección y gestión de organizaciones.
</p> </div> <!-- Stats --> <div class="grid grid-cols-2 md:grid-cols-4 gap-0 mb-20 border-y border-gray-200 divide-x divide-gray-200 bg-white"> ${stats.map((stat) => renderTemplate`<div class="p-8 text-center"> <p${addAttribute(`text-4xl md:text-5xl font-display font-bold mb-3 ${stat.color}`, "class")}> ${stat.value} </p> <p class="text-xs font-bold uppercase tracking-widest text-gray-400"> ${stat.label} </p> </div>`)} </div> <!-- Professor Grid --> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-24"> ${profesores.map((profesor) => renderTemplate`${renderComponent($$result2, "ProfesorCard", ProfesorCard, { "nombre": profesor.nombre, "titulo": profesor.titulo, "especialidad": profesor.especialidad, "foto": profesor.foto, "colorFondo": profesor.colorFondo, "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/Luis/Desktop/Pagina Maestria Alt/src/components/ProfesorCard.svelte", "client:component-export": "default" })}`)} </div> <!-- Institutional Backing Section --> <div class="border-t border-gray-200 pt-16 text-center"> <h2 class="text-sm font-bold text-gray-400 uppercase tracking-[0.3em] mb-12">
Respaldo Institucional
</h2> <div class="flex flex-wrap items-center justify-center gap-16 md:gap-24 opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"> <img src="/logo-uagro.png" alt="UAGro" class="h-16 w-auto object-contain"> <div class="h-12 w-px bg-gray-300 hidden md:block"></div> <img src="/logo-facultad.png" alt="Facultad" class="h-16 w-auto object-contain"> </div> </div> </div> </main> ${renderComponent($$result2, "Footer", Footer, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/Luis/Desktop/Pagina Maestria Alt/src/components/Footer.svelte", "client:component-export": "default" })} ` })}`;
}, "C:/Users/Luis/Desktop/Pagina Maestria Alt/src/pages/nucleo-academico.astro", void 0);

const $$file = "C:/Users/Luis/Desktop/Pagina Maestria Alt/src/pages/nucleo-academico.astro";
const $$url = "/nucleo-academico";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$NucleoAcademico,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
