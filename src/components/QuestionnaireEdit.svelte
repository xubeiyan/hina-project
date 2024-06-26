<script>
	import Preview from './questionnaireEdit/Preview.svelte';
	import EditForm from './questionnaireEdit/EditForm.svelte';
	import SetTimeline from './questionnaireEdit/SetTimeline.svelte';

	export let content = '';
	export let editMode = false;

	export let endTime = '';
	export let id = '';
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
	let saving = false;
	// 修改正在保存状态
	let changeSavingStatus = async (event) => {
		if (event.detail.save == 'form') {
			stage = 'setTimeline';
		} else if (event.detail.save == 'all') {
			const endTime = event.detail.endTime;
			saving = true;
			let res;
			// 新建则需要分配新的
			if (id == '') {
				res = await fetch(`/new`, {
					method: 'POST',
					body: JSON.stringify({ content, endTime }),
					headers: {
						'Content-Type': 'application/json'
					}
				});
			// 修改
			} else {
				res = await fetch(`/edit/id/${id}`, {
					method: 'POST',
					body: JSON.stringify({ content, endTime }),
					headers: {
						'Content-Type': 'application/json'
					}
				});
			}
			saving = false;
			console.log(await res.json());
		}
	};
</script>

<div class="grow mx-2 relative flex flex-col items-center overflow-y-auto">
	{#if stage == 'editForm'}
		<EditForm
			{content}
			{editMode}
			{saving}
			on:changeStage={changeStage}
			on:save={changeSavingStatus}
		/>
	{:else if stage == 'setTimeline'}
		<SetTimeline {endTime} {saving} on:changeStage={changeStage} on:save={changeSavingStatus} />
	{:else if stage == 'preview'}
		<Preview markdown={content} on:changeStage={changeStage} />
	{/if}
</div>
