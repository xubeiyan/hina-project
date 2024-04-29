<script>
	import Preview from './questionnaireEdit/Preview.svelte';
	import EditForm from './questionnaireEdit/EditForm.svelte';
	import SetTimeline from './questionnaireEdit/SetTimeline.svelte';

	export let content = '';
	export let editMode = false;

	let endTime = '';
	let stage = 'editForm';
	// 切换stage
	const changeStage = (event) => {
		stage = event.detail.stage;
		if (event.detail.content) {
			content = event.detail.content;
		}
		if (event.detail.endTime) {
			endTime = event.detail.endTime;
		}
	};
</script>

<div class="grow p-1 relative flex flex-col items-center">
	{#if stage == 'editForm'}
		<EditForm {content} {editMode} on:changeStage={changeStage} />
	{:else if stage == 'setTimeline'}
		<SetTimeline {endTime} on:changeStage={changeStage} />
	{:else if stage == 'preview'}
		<Preview markdown={content} on:changeStage={changeStage} />
	{/if}
</div>
