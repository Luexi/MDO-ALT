<script lang="ts">
	export let alumno: string;
	export let generacion: string;
	export let tituloTesis: string;
	export let archivoPdf: string = '#';
	export let foto: string;
</script>

<div class="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
	<div class="flex flex-col sm:flex-row gap-4 p-6">
		<!-- Photo -->
		<div class="flex-shrink-0">
			<div class="w-20 h-20 rounded-full overflow-hidden bg-gray-200">
				<img 
					src={foto} 
					alt={`Foto de ${alumno}`}
					class="w-full h-full object-cover"
				/>
			</div>
		</div>
		
		<!-- Content -->
		<div class="flex-1 min-w-0">
			<div class="flex items-center gap-2 mb-2">
				<span class="inline-flex items-center px-2 py-1 rounded-md bg-uagro-navy/10 text-uagro-navy text-xs font-bold">
					{generacion}
				</span>
			</div>
			<h3 class="text-lg font-bold text-gray-900 mb-2">{alumno}</h3>
			<p class="text-sm text-gray-600 line-clamp-2 mb-4">{tituloTesis}</p>
			
			<!-- Download Button -->
			<a 
				href={archivoPdf}
				download
				class="inline-flex items-center gap-2 text-sm font-semibold text-uagro-red hover:text-uagro-red-dark transition-colors group-hover:translate-x-1 transform duration-200"
			>
				<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
				</svg>
				Descargar PDF
			</a>
		</div>
	</div>
</div>
