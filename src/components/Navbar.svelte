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

<nav class="sticky top-0 z-50 w-full bg-corporate-dark border-b border-white/10">
	<div class="max-w-7xl mx-auto px-4 md:px-8">
		<header class="flex items-center justify-between h-20">
			<!-- Logo -->
			<a href="/" class="flex items-center gap-4 group">
				<div class="flex items-center justify-center bg-white p-1">
					<img
						src="/logo-mdo.png"
						alt="Logo MDO UAGro"
						class="h-10 w-10 object-contain"
					/>
				</div>
				<div class="flex flex-col text-white">
					<span class="font-display font-light text-2xl tracking-tight leading-none">MDO</span>
					<span class="font-body text-xs uppercase tracking-[0.2em] text-gray-400">Maestría en Dirección</span>
				</div>
			</a>

			<!-- Desktop Navigation -->
			<nav class="hidden lg:flex items-center gap-8">
				{#each navLinks as link}
					<a
						href={link.href}
						class="text-sm font-bold text-gray-300 hover:text-white uppercase tracking-wider transition-colors py-2 border-b-2 border-transparent hover:border-uagro-red"
					>
						{link.name}
					</a>
				{/each}
				
				<a 
					href="/convocatoria" 
					class="ml-4 bg-uagro-red text-white text-xs font-bold uppercase tracking-widest px-6 py-3 hover:bg-white hover:text-uagro-red transition-colors border border-uagro-red hover:border-white"
				>
					Pre-Registro
				</a>
			</nav>

			<!-- Mobile Menu Button -->
			<button
				class="lg:hidden p-2 text-white hover:text-uagro-red transition-colors"
				on:click={toggleMobileMenu}
				aria-label="Toggle mobile menu"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="w-8 h-8"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="square"
						stroke-linejoin="miter"
						stroke-width="1.5"
						d={mobileMenuOpen
							? "M6 18L18 6M6 6l12 12"
							: "M4 6h16M4 12h16M4 18h16"}
					/>
				</svg>
			</button>
		</header>
	</div>

	<!-- Mobile Menu -->
	{#if mobileMenuOpen}
		<div
			class="lg:hidden absolute top-20 left-0 w-full bg-corporate-dark border-b border-white/10 shadow-2xl"
		>
			<nav class="flex flex-col">
				{#each navLinks as link}
					<a
						href={link.href}
						class="px-8 py-4 text-gray-300 font-bold uppercase tracking-wider text-sm border-b border-white/5 hover:bg-white/5 hover:text-white transition-colors"
						on:click={toggleMobileMenu}
					>
						{link.name}
					</a>
				{/each}
				<a 
					href="/convocatoria"
					class="px-8 py-4 bg-uagro-red text-white text-sm font-bold uppercase tracking-widest hover:bg-uagro-red-dark transition-colors text-center"
					on:click={toggleMobileMenu}
				>
					Pre-Registro
				</a>
			</nav>
		</div>
	{/if}
</nav>
