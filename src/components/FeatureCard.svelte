<script lang="ts">
	export let icon: string;
	export let title: string;
	export let description: string;
</script>

<div
	class="bg-corporate-gray-100 p-10 transition-all duration-300 border-l-4 border-transparent hover:border-uagro-red group h-full"
>
	<!-- Icon -->
	<div class="mb-8">
		<div
			class="w-12 h-12 text-uagro-red group-hover:scale-110 transition-transform"
		>
			{@html icon}
		</div>
	</div>

	<!-- Title -->
	<h3
		class="text-xl font-display font-bold text-corporate-black mb-4 group-hover:text-uagro-red transition-colors uppercase tracking-wide"
	>
		{title}
	</h3>

	<!-- Description -->
	<p class="text-gray-600 leading-relaxed font-light">
		{description}
	</p>
</div>
