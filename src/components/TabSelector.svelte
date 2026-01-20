<script lang="ts">
	export let tabs: { id: string; label: string; content: string }[];
	let activeTab = tabs[0]?.id || "";
</script>

<div class="w-full">
	<!-- Tab Buttons -->
	<div class="flex flex-wrap border-b border-gray-200 mb-12">
		{#each tabs as tab}
			<button
				class={`px-8 py-4 font-display font-bold text-lg transition-all border-b-4 ${
					activeTab === tab.id
						? "border-uagro-red text-uagro-red bg-gray-50"
						: "border-transparent text-gray-400 hover:text-corporate-black hover:bg-gray-50"
				}`}
				on:click={() => (activeTab = tab.id)}
			>
				{tab.label}
			</button>
		{/each}
	</div>

	<!-- Tab Content -->
	<div class="bg-white p-6 md:p-10 border border-gray-100 min-h-[400px]">
		{#each tabs as tab}
			{#if activeTab === tab.id}
				<div class="prose prose-lg max-w-none font-light text-gray-700">
					{@html tab.content}
				</div>
			{/if}
		{/each}
	</div>
</div>
