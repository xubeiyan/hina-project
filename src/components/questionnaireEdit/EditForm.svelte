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

	const handleSaveBtnClick = () => {
		if (saving == true) return;
		dispatch('save', {
			save: 'form'
		});
	};

	export let editMode = false;
	// 保存按钮选择
	export let saving = false;

	$: title = editMode ? 'Edit your questionnaire' : 'Create a new questionnaire';
	$: saveBtnClass = saving ? 'bg-slate-200/50 cursor-not-allowed' : 'bg-slate-200';
</script>

<h1 class="text-center text-xl my-4">{title}</h1>
<textarea
	id="content"
	class="w-full md:w-[80%] grow border border-slate-400 rounded-md p-1 overflow-y-auto"
	bind:value={content}
/>
<div class="mb-4 flex flex-wrap gap-2 justify-center items-end w-full md:w-[40em] p-4">
	<button
		class="bg-orange-100 rounded-md px-4 py-2 text-xl w-full md:w-[45%]"
		on:click={() => toStage('preview')}>Preview Questionnaire</button
	>
	<button
		class="{saveBtnClass} rounded-md px-4 py-2 text-xl flex gap-2 justify-center items-center w-full md:w-[45%]"
		on:click={() => handleSaveBtnClick()}
	>
		{#if saving}
			<LoadingIcon dark={true}/>
		{/if}
		Save and continue
	</button>
</div>
