<script>
	export let content = '';
	import LoadingIcon from '$icons/loading.svelte';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
	const toStage = (stage) => {
		dispatch('changeStage', {
			stage,
			content
		});
	};

	const handleSaveBtnClick = (operation) => {
		if (operation == 'save' && saving.save || operation == 'saveAndContinue' && saving.saveAndContinue) return;
		dispatch('save', {
			operation
		});
	};

	export let editMode = false;
	// 保存按钮选择
	export let saving = {
		save: false,
		saveAndContinue: false
	};

	$: title = editMode ? 'Edit your questionnaire' : 'Create a new questionnaire';
	$: saveBtnClass = saving.save ? 'bg-blue-700/50 cursor-not-allowed' : 'bg-blue-700';
	$: saveAndContinueBtnClass = saving.saveAndContinue ? 'bg-slate-200/50 cursor-not-allowed' : 'bg-slate-200';
</script>

<h1 class="text-center text-xl my-4">{title}</h1>
<textarea
	id="content"
	class="w-full md:w-[80%] grow border border-slate-400 rounded-md p-1 overflow-y-auto"
	bind:value={content}
/>
<div class="h-32 mb-4 flex flex-wrap gap-2 justify-center items-end w-full md:w-[30em] p-4">
	<button
		class="bg-orange-100 rounded-md px-4 py-2 text-xl w-full"
		on:click={() => toStage('preview')}>Preview Questionnaire</button
	>
	<button
		class="{saveBtnClass} rounded-md px-4 py-2 text-xl text-slate-50 flex gap-2 items-center"
		on:click={() => handleSaveBtnClick('save')}
	>
		{#if saving.save}
			<LoadingIcon />
		{/if}
		Save
	</button>
	<button
		class="{saveAndContinueBtnClass} rounded-md px-4 py-2 text-xl grow flex gap-2 justify-center items-center"
		on:click={() => handleSaveBtnClick('saveAndContinue')}
	>
		{#if saving.saveAndContinue}
			<LoadingIcon dark={true}/>
		{/if}
		Save and continue
	</button>
</div>
