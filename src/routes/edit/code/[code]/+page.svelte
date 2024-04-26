<script>
	import HomeIcon from '$icons/home.svelte';

	export let data;
</script>

<div class="grow flex justify-center items-center bg-slate-100">
	<div
		class="container px-2 py-6 m-2 border border-red-300 rounded-md bg-red-100 flex flex-col items-center gap-2"
	>
		<h1 class="text-center">
			{#if data.error == 'codeWrongFormat'}
				the visit code '{data.code}' format is wrong
			{/if}
		</h1>
		<a href="/">
			<button class="flex gap-2 items-center border border-red-300 py-1 px-2 rounded-md bg-red-300 shadow-md">
				<HomeIcon />
				To Home
			</button>
		</a>
	</div>
</div>
