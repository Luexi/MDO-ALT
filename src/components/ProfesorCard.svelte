<script lang="ts">
	export let nombre: string;
	export let titulo: string;
	export let especialidad: string;
	export let foto: string;
	export let colorFondo: 'azul' | 'rojo' | 'gris' = 'azul';
	
	const backgroundColors = {
		azul: 'bg-uagro-navy',
		rojo: 'bg-uagro-red',
		gris: 'bg-gray-400'
	};
</script>

<div class="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 bg-white">
	<!-- Photo with colored background -->
	<div class="aspect-[3/4] relative overflow-hidden {backgroundColors[colorFondo]}">
		<img 
			src={foto} 
			alt={`Foto de ${nombre}`}
			class="w-full h-full object-cover object-center mix-blend-luminosity opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
		/>
		<div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
	</div>
	
	<!-- Info -->
	<div class="absolute bottom-0 left-0 right-0 p-6 text-white">
		<h3 class="text-xl font-bold mb-1 drop-shadow-md">{nombre}</h3>
		<p class="text-sm font-semibold opacity-90 drop-shadow-md">{titulo}</p>
		{#if especialidad}
			<p class="text-xs opacity-80 mt-1 drop-shadow-md">{especialidad}</p>
		{/if}
	</div>
	
	<!-- Hover effect overlay -->
	<div class="absolute inset-0 bg-uagro-navy/0 group-hover:bg-uagro-navy/10 transition-colors duration-300 pointer-events-none"></div>
</div>
