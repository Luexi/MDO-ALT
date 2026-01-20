import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_ylGHJKb9.mjs';
import 'piccolore';
import { $ as $$BaseLayout, N as Navbar, F as Footer } from '../chunks/Footer_CLSMih39.mjs';
export { r as renderers } from '../chunks/_@astro-renderers_e8tZXpDX.mjs';

const $$Instalaciones = createComponent(($$result, $$props, $$slots) => {
  const facilities = [
    {
      src: "https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=600&fit=crop",
      alt: "Auditorio universitario moderno",
      title: "Auditorios Magistrales",
      aspectClass: "aspect-[4/3]"
    },
    {
      src: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=600&h=800&fit=crop",
      alt: "Biblioteca universitaria",
      title: "Biblioteca Especializada",
      aspectClass: "aspect-[3/4]"
    },
    {
      src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=450&fit=crop",
      alt: "Laboratorio de c\xF3mputo",
      title: "Laboratorios de C\xF3mputo",
      aspectClass: "aspect-video"
    },
    {
      src: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&h=800&fit=crop",
      alt: "\xC1reas verdes del campus",
      title: "\xC1reas Verdes y Esparcimiento",
      aspectClass: "aspect-[3/4]"
    },
    {
      src: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&h=600&fit=crop",
      alt: "Sala de trabajo colaborativo",
      title: "Salas de Trabajo Colaborativo",
      aspectClass: "aspect-[4/3]"
    },
    {
      src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=500&fit=crop",
      alt: "Espacios modernos del campus",
      title: "Espacios de Convivencia",
      aspectClass: "aspect-[16/10]"
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Instalaciones - MDO UAGro", "description": "Explora las instalaciones y espacios del programa de Maestr\xEDa en Direcci\xF3n de Organizaciones." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", Navbar, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/Luis/Desktop/Pagina Maestria Alt/src/components/Navbar.svelte", "client:component-export": "default" })} ${maybeRenderHead()}<main class="min-h-screen bg-gray-50 py-12"> <div class="max-w-7xl mx-auto px-4 sm:px-6"> <!-- Page Header --> <div class="mb-12"> <div class="inline-flex items-center gap-2 px-3 py-1 rounded-pill bg-uagro-navy/10 text-uagro-navy text-xs font-bold uppercase tracking-wider mb-4"> <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path> </svg>
Campus Universitario
</div> <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight mb-4">
Espacios para la <br class="hidden md:block">Excelencia Académica
</h1> <p class="text-lg text-gray-600 max-w-2xl leading-relaxed">
Explora un entorno diseñado para inspirar, conectar y potenciar tu desarrollo profesional.
</p> </div> <!-- Masonry Gallery --> <div class="columns-1 md:columns-2 lg:columns-3 gap-6 mb-12"> ${facilities.map((facility, index) => renderTemplate`<div class="break-inside-avoid mb-6 group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all cursor-pointer"> <div${addAttribute(`${facility.aspectClass} w-full bg-gray-200`, "class")}> <img${addAttribute(facility.src, "src")}${addAttribute(facility.alt, "alt")} class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"> </div> <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6"> <p class="text-white font-medium text-lg drop-shadow-lg">${facility.title}</p> </div> </div>`)} </div> <!-- Info Card --> <div class="bg-white rounded-2xl shadow-2xl p-8 md:p-12 relative overflow-hidden"> <!-- Decorative corner accent --> <div class="absolute top-0 right-0 w-32 h-32 bg-uagro-navy/5 rounded-bl-full -mr-10 -mt-10"></div> <div class="grid md:grid-cols-2 gap-10 md:gap-16 relative z-10"> <!-- Left Column: Description --> <div class="flex flex-col gap-6"> <h2 class="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
Infraestructura que impulsa tu crecimiento
</h2> <p class="text-gray-600 leading-relaxed text-base md:text-lg">
Nuestras instalaciones están diseñadas para fomentar el aprendizaje y la colaboración multidisciplinaria. 
							Desde aulas modernas equipadas con la última tecnología hasta áreas de investigación especializadas, 
							cada espacio apoya tu crecimiento profesional en la Gestión de Organizaciones.
</p> <p class="text-gray-600 leading-relaxed text-base md:text-lg">
El campus ofrece un ambiente seguro y estimulante, ideal para el networking y el desarrollo de proyectos innovadores.
</p> <div class="mt-4"> <a href="/conocenos" class="inline-flex items-center gap-2 text-uagro-navy font-bold hover:text-uagro-red transition-colors group">
Agendar una visita guiada
<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path> </svg> </a> </div> </div> <!-- Right Column: Amenities List --> <div class="bg-gray-50 rounded-xl p-8 border border-gray-100"> <h3 class="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2"> <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-uagro-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg>
Amenidades y Servicios
</h3> <ul class="space-y-4"> <li class="flex items-start gap-3"> <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-uagro-navy mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg> <span class="text-gray-700 font-medium">Aulas climatizadas y multimedia</span> </li> <li class="flex items-start gap-3"> <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-uagro-navy mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg> <span class="text-gray-700 font-medium">Biblioteca especializada con acceso digital</span> </li> <li class="flex items-start gap-3"> <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-uagro-navy mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg> <span class="text-gray-700 font-medium">Áreas de estudio colaborativo (Coworking)</span> </li> <li class="flex items-start gap-3"> <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-uagro-navy mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg> <span class="text-gray-700 font-medium">Laboratorio de cómputo avanzado</span> </li> <li class="flex items-start gap-3"> <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-uagro-navy mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg> <span class="text-gray-700 font-medium">Auditorio audiovisual para conferencias</span> </li> <li class="flex items-start gap-3"> <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-uagro-navy mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg> <span class="text-gray-700 font-medium">Conexión WiFi de alta velocidad (Campus Wide)</span> </li> </ul> </div> </div> </div> </div> </main> ${renderComponent($$result2, "Footer", Footer, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/Luis/Desktop/Pagina Maestria Alt/src/components/Footer.svelte", "client:component-export": "default" })} ` })}`;
}, "C:/Users/Luis/Desktop/Pagina Maestria Alt/src/pages/instalaciones.astro", void 0);

const $$file = "C:/Users/Luis/Desktop/Pagina Maestria Alt/src/pages/instalaciones.astro";
const $$url = "/instalaciones";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Instalaciones,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
