<script>
	import '../app.postcss';
</script>

<div
	class="fixed inset-0 w-full h-full flex bg-neutral-25 items-center justify-center text-neutral-900"
>
	<main class="p-4 w-full md:w-[64rem]">
		<div class="font-thin px-2 pb-4 text-lg">
			<h1 class="mb-4 text-2xl font-extrabold md:text-3xl lg:text-4xl">Form Input Test</h1>
			<p class="mb-6 lg:text-lg text-neutral-700">Let me know which form design you prefer.</p>
		</div>
		<slot />
	</main>
</div>
