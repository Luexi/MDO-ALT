import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_ylGHJKb9.mjs';
import 'piccolore';
import { $ as $$BaseLayout, N as Navbar, F as Footer } from '../chunks/Footer_CLSMih39.mjs';
import { c as ensure_array_like, d as attr_class, e as escape_html, b as bind_props } from '../chunks/_@astro-renderers_e8tZXpDX.mjs';
export { r as renderers } from '../chunks/_@astro-renderers_e8tZXpDX.mjs';
import { h as html } from '../chunks/html_CfyvkLET.mjs';

function TabSelector($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let tabs = $$props['tabs'];
		let activeTab = tabs[0]?.id || "";

		$$renderer.push(`<div class="w-full"><div class="flex flex-wrap border-b border-gray-200 mb-12"><!--[-->`);

		const each_array = ensure_array_like(tabs);

		for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
			let tab = each_array[$$index];

			$$renderer.push(`<button${attr_class(`px-8 py-4 font-display font-bold text-lg transition-all border-b-4 ${activeTab === tab.id
				? "border-uagro-red text-uagro-red bg-gray-50"
				: "border-transparent text-gray-400 hover:text-corporate-black hover:bg-gray-50"}`)}>${escape_html(tab.label)}</button>`);
		}

		$$renderer.push(`<!--]--></div> <div class="bg-white p-6 md:p-10 border border-gray-100 min-h-[400px]"><!--[-->`);

		const each_array_1 = ensure_array_like(tabs);

		for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
			let tab = each_array_1[$$index_1];

			if (activeTab === tab.id) {
				$$renderer.push('<!--[-->');
				$$renderer.push(`<div class="prose prose-lg max-w-none font-light text-gray-700">${html(tab.content)}</div>`);
			} else {
				$$renderer.push('<!--[!-->');
			}

			$$renderer.push(`<!--]-->`);
		}

		$$renderer.push(`<!--]--></div></div>`);
		bind_props($$props, { tabs });
	});
}

const $$Objetivos = createComponent(($$result, $$props, $$slots) => {
  const tabs = [
    {
      id: "ingreso",
      label: "Perfil de Ingreso",
      content: `
			<h3 class="text-3xl font-display font-bold text-corporate-black mb-6">Requisitos de Ingreso</h3>
			<p class="text-gray-600 mb-8 text-lg">El aspirante a la Maestr\xEDa en Direcci\xF3n de Organizaciones deber\xE1 cumplir con lo siguiente:</p>
			
			<ul class="list-none space-y-4 mb-8 text-gray-600">
				<li class="flex items-start gap-3"><span class="text-uagro-red font-bold">01.</span> Presentar un escrito de exposici\xF3n de motivos que fundamente el inter\xE9s en cursar la Maestr\xEDa en Direcci\xF3n de Organizaciones.</li>
				<li class="flex items-start gap-3"><span class="text-uagro-red font-bold">02.</span> Aprobar el Examen Nacional de Ingreso (EXANI-III).</li>
				<li class="flex items-start gap-3"><span class="text-uagro-red font-bold">03.</span> Presentar y defender un anteproyecto de titulaci\xF3n ante la comisi\xF3n de admisi\xF3n del posgrado.</li>
				<li class="flex items-start gap-3"><span class="text-uagro-red font-bold">04.</span> Entregar curr\xEDculum vitae con documentos comprobatorios y dos cartas de recomendaci\xF3n (laboral o acad\xE9mica).</li>
				<li class="flex items-start gap-3"><span class="text-uagro-red font-bold">05.</span> Acreditar manejo del idioma ingl\xE9s, al menos a nivel de comprensi\xF3n de textos.</li>
				<li class="flex items-start gap-3"><span class="text-uagro-red font-bold">06.</span> Comprobar dominio b\xE1sico de herramientas y aplicaciones digitales.</li>
				<li class="flex items-start gap-3"><span class="text-uagro-red font-bold">07.</span> Sostener entrevista personal con la comisi\xF3n de admisi\xF3n para exponer las razones de la postulaci\xF3n.</li>
				<li class="flex items-start gap-3"><span class="text-uagro-red font-bold">08.</span> Presentar certificado m\xE9dico expedido por el Servicio M\xE9dico Universitario o por instituciones de salud reconocidas.</li>
				<li class="flex items-start gap-3"><span class="text-uagro-red font-bold">09.</span> Presentar originales del t\xEDtulo, diploma o grado del nivel inmediato anterior, as\xED como los certificados de estudios correspondientes.</li>
				<li class="flex items-start gap-3"><span class="text-uagro-red font-bold">10.</span> Acreditar promedio m\xEDnimo de ocho (8.0) en la licenciatura.</li>
				<li class="flex items-start gap-3"><span class="text-uagro-red font-bold">11.</span> Demostrar experiencia o vinculaci\xF3n en el campo profesional del programa.</li>
				<li class="flex items-start gap-3"><span class="text-uagro-red font-bold">12.</span> Cumplir los tr\xE1mites administrativos establecidos en la convocatoria de ingreso.</li>
			</ul>
			
			<div class="bg-corporate-gray-100 p-8 border-l-4 border-uagro-red">
				<h4 class="text-xl font-bold text-corporate-black mb-4">Conocimientos y Habilidades B\xE1sicas</h4>
				<p class="text-gray-600">Se requiere contar con conocimientos b\xE1sicos en administraci\xF3n, econom\xEDa, mercadotecnia, finanzas, inform\xE1tica y estad\xEDstica descriptiva.</p>
			</div>
		`
    },
    {
      id: "egreso",
      label: "Perfil de Egreso",
      content: `
			<h3 class="text-3xl font-display font-bold text-corporate-black mb-6">Perfil del Egresado</h3>
			<p class="text-gray-600 mb-8 text-lg">El egresado es un profesionista capaz de trabajar en equipos multidisciplinarios, comprometido con el desarrollo local y regional, aplicando conocimientos y herramientas de vanguardia.</p>
			
			<div class="grid md:grid-cols-2 gap-8">
				<div>
					<h4 class="text-xl font-bold text-corporate-black mb-4 border-b border-gray-200 pb-2">Conocimientos</h4>
					<ul class="list-disc pl-5 space-y-2 text-gray-600">
						<li>Variables que inciden en la creaci\xF3n y desempe\xF1o de MiPyMEs.</li>
						<li>Variables pol\xEDticas y sociales del sector gubernamental.</li>
						<li>Tecnolog\xEDas de informaci\xF3n e Inteligencia Artificial en las organizaciones.</li>
						<li>Estrategias de mercadeo y comportamiento humano (liderazgo y motivaci\xF3n).</li>
						<li>Metodolog\xEDas para formulaci\xF3n y evaluaci\xF3n de proyectos de inversi\xF3n.</li>
					</ul>
				</div>
				
				<div>
					<h4 class="text-xl font-bold text-corporate-black mb-4 border-b border-gray-200 pb-2">Habilidades</h4>
					<ul class="list-disc pl-5 space-y-2 text-gray-600">
						<li>Desarrollar investigaciones con impacto econ\xF3mico y social.</li>
						<li>Brindar consultor\xEDa para formular e implementar estrategias competitivas.</li>
						<li>Dirigir eficientemente organizaciones aplicando t\xE9cnicas administrativas pertinentes.</li>
						<li>Dirigir y asesorar proyectos complejos con liderazgo.</li>
						<li>Formar talentos humanos para mejorar el desempe\xF1o organizacional.</li>
					</ul>
				</div>
			</div>

			<div class="mt-8">
				<h4 class="text-xl font-bold text-corporate-black mb-4 border-b border-gray-200 pb-2">Valores</h4>
				<ul class="list-disc pl-5 space-y-2 text-gray-600">
					<li>Actuar con \xE9tica profesional y defender la responsabilidad social.</li>
					<li>Promover liderazgo y motivaci\xF3n.</li>
					<li>Compromiso con el desarrollo personal y profesional.</li>
					<li>Valorar la conciencia social, el bien com\xFAn y la diversidad.</li>
				</ul>
			</div>
		`
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Objetivos y Perfiles - MDO UAGro", "description": "Conoce los objetivos del programa y los perfiles de ingreso y egreso de la Maestr\xEDa en Direcci\xF3n de Organizaciones." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", Navbar, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/Luis/Desktop/Pagina Maestria Alt/src/components/Navbar.svelte", "client:component-export": "default" })} ${maybeRenderHead()}<main class="min-h-screen bg-white py-20"> <div class="max-w-7xl mx-auto px-6 sm:px-8"> <!-- Page Header --> <div class="mb-20"> <div class="inline-block px-3 py-1 bg-corporate-black text-white text-xs font-bold uppercase tracking-widest mb-6">
Programa Académico
</div> <h1 class="text-5xl md:text-6xl font-display font-bold text-corporate-black mb-8 leading-tight">
Objetivos y Perfiles
</h1> <p class="text-xl text-gray-500 max-w-3xl leading-relaxed font-light border-l-4 border-uagro-red pl-6">
Conoce los objetivos del programa y los perfiles de ingreso
					y egreso que caracterizan a nuestros estudiantes y
					egresados.
</p> </div> <!-- Objective Section --> <div class="bg-corporate-gray-100 p-10 md:p-14 mb-20 border-t-4 border-corporate-black"> <h2 class="text-3xl font-display font-bold mb-8 text-corporate-black">
Objetivo General del Programa
</h2> <p class="text-xl leading-relaxed text-gray-700 font-light">
Formar personas con capacidades directivas y de
					investigación de alto nivel, competentes en el diseño,
					implementación y evaluación de modelos de gestión e
					intervención que optimicen el desempeño de las
					organizaciones, orientando sus resultados hacia la creación
					sostenible con impacto social en la región.
</p> </div> <!-- Tab Content --> ${renderComponent($$result2, "TabSelector", TabSelector, { "tabs": tabs, "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/Luis/Desktop/Pagina Maestria Alt/src/components/TabSelector.svelte", "client:component-export": "default" })} <!-- Admission Process --> <div class="mt-24"> <h2 class="text-4xl font-display font-bold text-corporate-black text-center mb-16">
Proceso de Admisión
</h2> <div class="grid md:grid-cols-4 gap-8"> <div class="p-8 border border-gray-200 hover:border-uagro-red transition-colors group h-full"> <div class="text-6xl font-display font-bold text-gray-200 group-hover:text-uagro-red transition-colors mb-6">
01
</div> <h3 class="text-xl font-bold text-corporate-black mb-4 uppercase tracking-wide">
Registro en Línea
</h3> <p class="text-gray-500 text-sm leading-relaxed">
Completa tu registro en la plataforma electrónica y
							adjunta la documentación requerida.
</p> </div> <div class="p-8 border border-gray-200 hover:border-uagro-red transition-colors group h-full"> <div class="text-6xl font-display font-bold text-gray-200 group-hover:text-uagro-red transition-colors mb-6">
02
</div> <h3 class="text-xl font-bold text-corporate-black mb-4 uppercase tracking-wide">
Examen EXANI III
</h3> <p class="text-gray-500 text-sm leading-relaxed">
Presenta el examen estandarizado de conocimientos
							del CENEVAL.
</p> </div> <div class="p-8 border border-gray-200 hover:border-uagro-red transition-colors group h-full"> <div class="text-6xl font-display font-bold text-gray-200 group-hover:text-uagro-red transition-colors mb-6">
03
</div> <h3 class="text-xl font-bold text-corporate-black mb-4 uppercase tracking-wide">
Entrevista
</h3> <p class="text-gray-500 text-sm leading-relaxed">
Participa en una entrevista con el comité académico
							del programa.
</p> </div> <div class="p-8 border border-gray-200 bg-corporate-black hover:bg-uagro-red transition-colors group h-full"> <div class="text-6xl font-display font-bold text-gray-700 group-hover:text-white transition-colors mb-6">
04
</div> <h3 class="text-xl font-bold text-white mb-4 uppercase tracking-wide">
Resultados
</h3> <p class="text-gray-400 group-hover:text-white text-sm leading-relaxed">
Consulta los resultados y formaliza tu inscripción
							al programa.
</p> </div> </div> <!-- CTA --> <div class="mt-16 text-center"> <a href="/convocatoria" class="inline-block px-10 py-5 bg-uagro-red text-white font-bold uppercase tracking-widest hover:bg-corporate-black transition-colors">
Ver Convocatoria Completa
</a> </div> </div> </div> </main> ${renderComponent($$result2, "Footer", Footer, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/Luis/Desktop/Pagina Maestria Alt/src/components/Footer.svelte", "client:component-export": "default" })} ` })}`;
}, "C:/Users/Luis/Desktop/Pagina Maestria Alt/src/pages/objetivos.astro", void 0);

const $$file = "C:/Users/Luis/Desktop/Pagina Maestria Alt/src/pages/objetivos.astro";
const $$url = "/objetivos";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Objetivos,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
