<script lang="ts">
	let mobileMenuOpen = false;

	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}

	const navLinks = [
		{ name: "Inicio", href: "/" },
		{ name: "Objetivos", href: "/objetivos" },
		{ name: "Núcleo Académico", href: "/nucleo-academico" },
		{ name: "LIES", href: "/lies" },
		{ name: "Repositorio", href: "/repositorio" },
		{ name: "Instalaciones", href: "/instalaciones" },
		{ name: "Plan de Estudios", href: "/plan-de-estudios" },
		{ name: "Conócenos", href: "/conocenos" },
	];
</script>

<nav class="sticky top-0 z-50 px-4 py-4 md:py-6">
	<div class="max-w-7xl mx-auto">
		<header
			class="flex items-center justify-between w-full bg-white/90 backdrop-blur-md border border-white/40 shadow-lg shadow-black/5 rounded-pill px-4 md:px-6 py-3"
		>
			<!-- Logo -->
			<a href="/" class="flex items-center gap-3 group">
				<div class="flex items-center justify-center">
					<img
						src="/logo-mdo.png"
						alt="Logo MDO UAGro"
						class="h-10 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
					/>
				</div>
				<div class="hidden sm:flex flex-col">
					<span
						class="text-uagro-navy text-sm font-bold leading-tight"
						>MDO UAGro</span
					>
					<span
						class="text-gray-500 text-[10px] uppercase tracking-wider font-semibold"
						>Maestría en Dirección</span
					>
				</div>
			</a>

			<!-- Desktop Navigation -->
			<nav class="hidden lg:flex flex-1 justify-center gap-1 mx-4">
				{#each navLinks as link}
					<a
						href={link.href}
						class="px-3 xl:px-4 py-2 text-gray-600 text-sm font-semibold hover:text-uagro-navy transition-colors rounded-pill hover:bg-gray-100"
					>
						{link.name}
					</a>
				{/each}
			</nav>

			<!-- Mobile Menu Button -->
			<button
				class="lg:hidden p-2 text-gray-600 hover:text-uagro-navy transition-colors"
				on:click={toggleMobileMenu}
				aria-label="Toggle mobile menu"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="w-6 h-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d={mobileMenuOpen
							? "M6 18L18 6M6 6l12 12"
							: "M4 6h16M4 12h16M4 18h16"}
					/>
				</svg>
			</button>
		</header>

		<!-- Mobile Menu -->
		{#if mobileMenuOpen}
			<div
				class="lg:hidden mt-4 bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden"
			>
				<nav class="flex flex-col p-2">
					{#each navLinks as link}
						<a
							href={link.href}
							class="px-4 py-3 text-gray-700 font-semibold hover:bg-gray-100 hover:text-uagro-navy transition-colors rounded-lg"
							on:click={toggleMobileMenu}
						>
							{link.name}
						</a>
					{/each}
				</nav>
			</div>
		{/if}
	</div>
</nav>
