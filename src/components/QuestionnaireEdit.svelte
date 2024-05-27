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
	// 正在保存
	let saving = {
		save: false,
		saveAndContinue: false
	};
	// 修改正在保存状态
	let changeSavingStatus = (event) => {
		if (event.detail.operation == 'save') {
			saving.save = true;
			setTimeout(() => {
				saving.save = false;
			}, 1000);
		} else if (event.detail.operation == 'saveAndContinue') {
			saving.saveAndContinue = true;
			setTimeout(() => {
				saving.saveAndContinue = false;
				stage = 'setTimeline';
			}, 1000);
		}
	};
</script>

<div class="grow relative flex flex-col items-center overflow-y-auto">
	{#if stage == 'editForm'}
		<EditForm
			{content}
			{editMode}
			{saving}
			on:changeStage={changeStage}
			on:save={changeSavingStatus}
		/>
	{:else if stage == 'setTimeline'}
		<SetTimeline {endTime} on:changeStage={changeStage} />
	{:else if stage == 'preview'}
		<Preview markdown={content} on:changeStage={changeStage} />
	{/if}
</div>
