<script lang="ts">
	export let tabs: { id: string; label: string; content: string }[];
	let activeTab = tabs[0]?.id || '';
</script>

<div class="w-full">
	<!-- Tab Buttons -->
	<div class="flex flex-wrap gap-2 mb-8 p-1 bg-gray-100 rounded-pill">
		{#each tabs as tab}
			<button
				class={`flex-1 px-6 py-3 rounded-pill font-bold text-sm transition-all ${
					activeTab === tab.id
						? 'bg-uagro-navy text-white shadow-md'
						: 'text-gray-600 hover:text-gray-900 hover:bg-white'
				}`}
				on:click={() => activeTab = tab.id}
			>
				{tab.label}
			</button>
		{/each}
	</div>
	
	<!-- Tab Content -->
	<div class="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
		{#each tabs as tab}
			{#if activeTab === tab.id}
				<div class="prose prose-lg max-w-none">
					{@html tab.content}
				</div>
			{/if}
		{/each}
	</div>
</div>
