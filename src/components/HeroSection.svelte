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

<section
	class="relative w-full overflow-hidden bg-corporate-black h-[85vh] flex items-center"
>
	<!-- Background Image -->
	<div class="absolute inset-0 z-0">
		<img
			src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop"
			alt="Campus universitario"
			class="w-full h-full object-cover opacity-30 mix-blend-overlay"
		/>
		<div
			class="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"
		></div>
	</div>

	<div class="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 w-full">
		<div class="max-w-3xl">
			<!-- Badge -->
			<div
				class="inline-block px-4 py-2 border-l-4 border-uagro-red bg-white/5 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-[0.2em] mb-8"
			>
				{badge}
			</div>

			<!-- Main Title -->
			<h1
				class="text-5xl md:text-7xl font-display font-bold text-white leading-tight mb-8"
			>
				{title}
			</h1>

			<!-- Subtitle -->
			<p
				class="text-xl md:text-2xl text-gray-300 leading-relaxed mb-12 font-light max-w-2xl border-l-2 border-white/20 pl-6"
			>
				{subtitle}
			</p>

			<!-- CTAs -->
			<div class="flex flex-col sm:flex-row gap-6">
				<a
					href={primaryCTA.href}
					class="inline-flex items-center justify-center px-8 py-5 bg-uagro-red hover:bg-white hover:text-uagro-red text-white font-bold uppercase tracking-widest transition-all text-sm w-full sm:w-auto border border-uagro-red"
				>
					{primaryCTA.text}
				</a>
				<a
					href={secondaryCTA.href}
					class="inline-flex items-center justify-center px-8 py-5 border border-white text-white hover:bg-white hover:text-black font-bold uppercase tracking-widest transition-all text-sm w-full sm:w-auto"
				>
					{secondaryCTA.text}
				</a>
			</div>
		</div>
	</div>
</section>
