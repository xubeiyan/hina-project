<script>
	import GridEditIcon from '$icons/grid_edit.svelte';
	import { redirect } from '@sveltejs/kit';

	let visitCode = 'babel-cheap-drive-gloom';

	$: buttonDisable = visitCode == '';

	// 显示错误
	let errorMessage = {
		show: false,
		text: ''
	};

	const visitCodeValide = async () => {
		const res = await fetch('/edit', {
			method: 'POST',
			body: JSON.stringify({ visitCode }),
			headers: {
				'Content-Type': 'application/json'
			}
		});
		const resJSON = await res.json();
		if (resJSON.code == 'EXIST') {
			window.location = `/edit/id/${visitCode}`;
			return;
		}

		errorMessage = {
			show: true,
			text: `can not find ${visitCode} in records`
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
		<GridEditIcon />
		Edit it
	</button>
	{#if errorMessage.show}
		<span class="border border-red-500 rounded-md px-2 py-1 bg-red-100">{errorMessage.text}</span>
	{/if}
</div>
