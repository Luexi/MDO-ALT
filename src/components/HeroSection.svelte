<script lang="ts">
	export let badge: string = "Programa Acreditado de Calidad";
	export let title: string = "Excelencia en Gestión de Organizaciones";
	export let subtitle: string =
		"Forma parte de un programa de posgrado reconocido por CONAHCYT y desarrolla competencias estratégicas para dirigir organizaciones del futuro.";
	export let primaryCTA: { text: string; href: string } = {
		text: "Plan de Estudios",
		href: "/objetivos",
	};
	export let secondaryCTA: { text: string; href: string } = {
		text: "Convocatoria 2026",
		href: "/convocatoria",
	};
</script>

<section class="relative w-full overflow-hidden mesh-bg py-20 md:py-32">
	<!-- Decorative gradient overlay -->
	<div
		class="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-white/5 to-white/80"
	></div>

	<div class="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
		<!-- Badge -->
		<div
			class="inline-flex items-center gap-2 px-4 py-2 rounded-pill bg-white/90 backdrop-blur-sm border border-uagro-navy/20 text-uagro-navy text-xs md:text-sm font-bold uppercase tracking-wider mb-6 shadow-sm"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="w-4 h-4"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
				/>
			</svg>
			{badge}
		</div>

		<!-- Main Title -->
		<h1
			class="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-gray-900 tracking-tight leading-tight mb-6 text-balance"
		>
			{title}
		</h1>

		<!-- Subtitle -->
		<p
			class="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10"
		>
			{subtitle}
		</p>

		<!-- CTAs -->
		<div
			class="flex flex-col sm:flex-row gap-4 justify-center items-center"
		>
			<a
				href={primaryCTA.href}
				class="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold rounded-pill transition-all shadow-lg shadow-red-600/20 hover:shadow-xl hover:shadow-red-600/30 hover:scale-105 w-full sm:w-auto"
			>
				{primaryCTA.text}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="w-5 h-5 ml-2"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M17 8l4 4m0 0l-4 4m4-4H3"
					/>
				</svg>
			</a>
			<a
				href={secondaryCTA.href}
				class="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold rounded-pill transition-all shadow-lg shadow-red-600/20 hover:shadow-xl hover:shadow-red-600/30 hover:scale-105 w-full sm:w-auto"
			>
				{secondaryCTA.text}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="w-5 h-5 ml-2"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
					/>
				</svg>
			</a>
		</div>
	</div>

	<!-- Decorative bottom wave -->
	<div class="absolute bottom-0 left-0 right-0">
		<svg
			viewBox="0 0 1440 120"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			class="w-full h-auto"
		>
			<path
				d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z"
				fill="white"
			/>
		</svg>
	</div>
</section>
