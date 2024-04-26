<script>
	import GridEditIcon from '$icons/grid_edit.svelte';

	let visitCode = '';

	$: buttonDisable = visitCode == '';
</script>

<div class="grow flex flex-col justify-center items-center gap-2 bg-slate-100">
	<h1 class="text-lg text-center">Please offer the visit code of questionnaire:</h1>
	<h2 class="text-slate-500">It looks like "xxxxx-xxxxx-xxxxx-xxxxx"</h2>
	<input
		bind:value={visitCode}
		type="text"
		class="w-[90%] md:w-[30em] p-2 border border-neutral-600 rounded-md text-center"
	/>
	<a href="/edit/code/{visitCode}">
		<button
			class="flex gap-2 items-center border border-slate-400
        bg-slate-300 disabled:bg-slate-50 disabled:text-neutral-400 rounded-md p-2"
			disabled={buttonDisable}
		>
			<GridEditIcon />
			Edit it
		</button>
	</a>
</div>
