<script>
	import { parse } from '$lib/markdownParser';
	export let markdown = '';

	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
	const toStage = (stage) => {
		dispatch('changeStage', {
			stage
		});
	};
</script>

<h1 class="text-lg text-center py-2">Preview Your questionnaire</h1>
<div class="grow w-full px-4">
	{@html parse(markdown)}
</div>
<div class="h-16 mb-4 flex gap-2 justify-center items-end w-full">
	<button class="bg-slate-200 rounded-md px-4 py-2 text-xl" on:click={() => toStage('editForm')}
		>Back</button
	>
</div>
