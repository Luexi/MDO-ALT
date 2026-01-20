<script lang="ts">
	export let icon: string;
	export let title: string;
	export let description: string;
</script>

<div class="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-uagro-navy/20 group">
	<!-- Icon -->
	<div class="mb-6">
		<div class="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-uagro-navy to-uagro-navy/80 text-white shadow-lg group-hover:scale-110 transition-transform">
			{@html icon}
		</div>
	</div>
	
	<!-- Title -->
	<h3 class="text-xl font-bold text-gray-900 mb-3 group-hover:text-uagro-navy transition-colors">
		{title}
	</h3>
	
	<!-- Description -->
	<p class="text-gray-600 leading-relaxed">
		{description}
	</p>
</div>
