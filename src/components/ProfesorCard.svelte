<script lang="ts">
	export let nombre: string;
	export let titulo: string;
	export let especialidad: string;
	export let foto: string;
	export let colorFondo: "azul" | "rojo" | "gris" = "azul"; // Unused in new design but kept for prop compatibility
</script>

<div
	class="group relative bg-white border border-gray-100 hover:border-uagro-red transition-all duration-300"
>
	<!-- Photo -->
	<div
		class="aspect-[3/4] relative overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500"
	>
		<img
			src={foto}
			alt={`Foto de ${nombre}`}
			class="w-full h-full object-cover object-center"
		/>
	</div>

	<!-- Info -->
	<div class="p-6 bg-white border-t border-gray-100 relative">
		<div
			class="absolute top-0 left-0 w-full h-0.5 bg-uagro-red transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
		></div>
		<h3
			class="text-xl font-display font-bold mb-2 text-corporate-black leading-tight group-hover:text-uagro-red transition-colors"
		>
			{nombre}
		</h3>
		<p
			class="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2"
		>
			{titulo}
		</p>
		{#if especialidad}
			<p class="text-sm font-light text-gray-400 italic font-display">
				{especialidad}
			</p>
		{/if}
	</div>
</div>
