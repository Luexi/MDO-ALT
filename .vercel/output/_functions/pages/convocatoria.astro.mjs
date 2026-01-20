import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_ylGHJKb9.mjs';
import 'piccolore';
import { $ as $$BaseLayout, N as Navbar, F as Footer } from '../chunks/Footer_CLSMih39.mjs';
export { r as renderers } from '../chunks/_@astro-renderers_e8tZXpDX.mjs';

const $$Convocatoria = createComponent(($$result, $$props, $$slots) => {
  const fechasClave = [
    {
      mes: "OCT",
      dia: "20",
      titulo: "Inicio de Registro",
      descripcion: "Apertura de plataforma electr\xF3nica"
    },
    {
      mes: "NOV",
      dia: "15",
      titulo: "Examen EXANI III",
      descripcion: "Evaluaci\xF3n de conocimientos"
    },
    {
      mes: "FEB",
      dia: "2026",
      titulo: "Inicio de Cursos",
      descripcion: "Semestre Febrero 2026",
      highlight: true
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Convocatoria 2026 - MDO UAGro", "description": "Consulta las bases, fechas importantes y requisitos para el proceso de selecci\xF3n de la Maestr\xEDa en Direcci\xF3n de Organizaciones." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", Navbar, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/Luis/Desktop/Pagina Maestria Alt/src/components/Navbar.svelte", "client:component-export": "default" })} ${maybeRenderHead()}<main class="min-h-screen bg-white py-20"> <div class="max-w-7xl mx-auto px-6 sm:px-8"> <!-- Page Header --> <div class="mb-20 text-center"> <div class="inline-block px-3 py-1 bg-corporate-black text-white text-xs font-bold uppercase tracking-widest mb-6">
Admisiones
</div> <h1 class="text-5xl md:text-6xl font-display font-bold text-corporate-black mb-6">
Convocatoria 2026
</h1> <p class="text-xl text-gray-500 max-w-2xl mx-auto font-light leading-relaxed">
Maestría en Dirección de Organizaciones. Consulta las bases,
					fechas importantes y requisitos para el proceso de
					selección.
</p> </div> <div class="grid lg:grid-cols-12 gap-12 items-start"> <!-- Main Content: Poster --> <div class="lg:col-span-8"> <div class="bg-corporate-black text-white p-12 md:p-16 relative overflow-hidden group"> <div class="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[100px] pointer-events-none"></div> <div class="relative z-10 text-center border-4 border-white/10 p-8 md:p-12 hover:border-uagro-red transition-colors duration-500"> <div class="w-24 h-24 mx-auto mb-8 text-uagro-red"> <svg xmlns="http://www.w3.org/2000/svg" class="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="square" stroke-linejoin="miter" stroke-width="1" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path> </svg> </div> <h2 class="text-4xl font-display font-bold mb-4 tracking-wide">
Convocatoria Oficial 2026
</h2> <p class="text-sm font-bold uppercase tracking-[0.3em] opacity-60 mb-8 text-gray-400">
Posgrado de Excelencia
</p> <div class="text-5xl md:text-7xl font-bold mb-2 font-display leading-none">
MAESTRÍA EN
</div> <div class="text-3xl md:text-5xl font-light mb-12 text-gray-300">
DIRECCIÓN DE ORGANIZACIONES
</div> <div class="inline-flex items-center gap-3 px-6 py-3 border border-white/20 hover:bg-white hover:text-corporate-black transition-all text-sm font-bold uppercase tracking-widest"> <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="square" stroke-linejoin="miter" stroke-width="1.5" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path> </svg>
Acreditado por CONAHCYT
</div> </div> </div> </div> <!-- Sidebar --> <div class="lg:col-span-4 space-y-8"> <!-- Fechas Clave --> <div class="bg-corporate-gray-100 p-8 border-t-4 border-uagro-red"> <h3 class="text-xl font-bold text-corporate-black mb-8 flex items-center gap-2 uppercase tracking-wide text-xs">
Calendario
</h3> <ul class="space-y-6"> ${fechasClave.map((fecha) => renderTemplate`<li class="flex gap-4 items-start group"> <div${addAttribute(`flex-shrink-0 w-14 h-14 flex flex-col items-center justify-center border transition-colors ${fecha.highlight ? "bg-uagro-red text-white border-uagro-red" : "bg-white border-gray-200 text-gray-500 group-hover:border-corporate-black group-hover:text-corporate-black"}`, "class")}> <span class="text-[10px] uppercase font-bold leading-none mb-1"> ${fecha.mes} </span> <span class="text-xl font-display font-bold leading-none"> ${fecha.dia} </span> </div> <div class="pt-1"> <p class="font-bold text-corporate-black text-sm uppercase tracking-wide mb-1"> ${fecha.titulo} </p> <p class="text-xs text-gray-500 font-light"> ${fecha.descripcion} </p> </div> </li>`)} </ul> <!-- CTAs --> <div class="mt-8 pt-8 border-t border-gray-200 space-y-4"> <a href="#" class="w-full flex items-center justify-center gap-3 bg-corporate-black hover:bg-white hover:text-corporate-black border border-corporate-black text-white font-bold py-4 px-6 uppercase tracking-widest text-xs transition-all"> <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="square" stroke-linejoin="miter" stroke-width="1.5" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"></path> </svg>
Descargar PDF
</a> <a href="https://uagro.mx" target="_blank" class="w-full flex items-center justify-center gap-3 bg-uagro-red hover:bg-uagro-red-dark text-white font-bold py-4 px-6 uppercase tracking-widest text-xs transition-all"> <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="square" stroke-linejoin="miter" stroke-width="1.5" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path> </svg>
Iniciar Pre-Registro
</a> </div> </div> <!-- Contacto --> <div class="bg-corporate-black text-white p-8"> <h4 class="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">
¿Dudas sobre el proceso?
</h4> <div class="space-y-4 text-sm font-light"> <div class="flex items-center gap-3"> <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-uagro-red" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="square" stroke-linejoin="miter" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path> </svg> <span class="text-gray-300">m.direcciondeorganizaciones@uagro.mx</span> </div> <div class="flex items-center gap-3"> <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-uagro-red" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="square" stroke-linejoin="miter" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path> </svg> <span class="text-gray-300">744 134 0900, ext. 4477</span> </div> </div> </div> <!-- Important Note --> <div class="border-l-4 border-uagro-red pl-4 py-2"> <p class="text-xs leading-relaxed text-gray-500 font-light italic"> <strong class="font-bold text-corporate-black not-italic block mb-1">Nota importante:</strong> Estar admitido en un posgrado no garantiza la asignación
							de una beca, ésta la realiza la SECIHTI en dependencia
							del presupuesto federal.
</p> </div> </div> </div> </div> </main> ${renderComponent($$result2, "Footer", Footer, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/Luis/Desktop/Pagina Maestria Alt/src/components/Footer.svelte", "client:component-export": "default" })} ` })}`;
}, "C:/Users/Luis/Desktop/Pagina Maestria Alt/src/pages/convocatoria.astro", void 0);

const $$file = "C:/Users/Luis/Desktop/Pagina Maestria Alt/src/pages/convocatoria.astro";
const $$url = "/convocatoria";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Convocatoria,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
