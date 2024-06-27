<script>
	import GridEditIcon from '$icons/grid_edit.svelte';
	import LoadingIcon from '$icons/loading.svelte';

	import { dev } from '$app/environment';

	// 查看sheet的visit code
	let visitCode = dev ? 'babel-cheap-drive-gloom' : '';

	// 是否点击
	let visitBtnClicked = false;

	$: buttonDisable = visitCode == '' || visitBtnClicked;

	// 显示错误
	let errorMessage = {
		show: false,
		text: ''
	};

	// 验证visitCode是否存在
	const visitCodeValide = async () => {
		visitBtnClicked = true;
		const res = await fetch('/edit', {
			method: 'POST',
			body: JSON.stringify({ visitCode }),
			headers: {
				'Content-Type': 'application/json'
			}
		});
		const resJSON = await res.json();

		// 直接返回id供跳转
		if (resJSON.code == 'EXIST') {
			const { id } = resJSON;
			window.location.href = `/edit/id/${id}`;
			return;
		}

		visitBtnClicked = false;
		errorMessage = {
			show: true,
			text: `can not find questionnaire with visit code "${visitCode}" in database records`
		};
	};

	const clearErrorMessage = () => {
		errorMessage = {
			show: false,
			text: ''
		};
	};
</script>

<div class="grow flex flex-col justify-center items-center gap-2 bg-slate-100">
	<h1 class="text-lg text-center">Please offer the visit code of questionnaire:</h1>
	<h2 class="text-slate-500">It looks like "xxxxx-xxxxx-xxxxx-xxxxx"</h2>
	<input
		bind:value={visitCode}
		on:input={clearErrorMessage}
		type="text"
		class="w-[90%] md:w-[30em] p-2 border border-neutral-600 rounded-md text-center"
	/>
	<button
		class="flex gap-2 items-center border border-slate-400
        bg-slate-300 disabled:bg-slate-50 disabled:text-neutral-400 rounded-md p-2"
		disabled={buttonDisable}
		on:click={visitCodeValide}
	>
		{#if visitBtnClicked}
			<LoadingIcon dark={true} size="2rem"/>
		{:else}
			<GridEditIcon />
		{/if}
		Edit it
	</button>
	{#if errorMessage.show}
		<span class="border border-red-500 rounded-md px-2 py-1 bg-red-100">{errorMessage.text}</span>
	{/if}
</div>
