<script>
	// 创建从某个时间经过的毫秒数
	const createDateLocal = (startTime, passedMilliSed) => {
		let millised;
		let timezoneOffset = new Date().getTimezoneOffset() * 60 * 1000;
		if (startTime == undefined) {
			millised = new Date().getTime() - timezoneOffset;
		} else {
			millised = new Date(startTime).getTime() - timezoneOffset;
		}

		if (passedMilliSed == undefined) {
			passedMilliSed = 0;
		}
		millised = millised + passedMilliSed;
		return new Date(millised).toISOString().slice(0, -8);
	};

	let minTime = createDateLocal();
	// 最长时间为三周
	let maxTime = createDateLocal(undefined, 3 * 7 * 24 * 60 * 60 * 1000);

	export let endTime = createDateLocal(undefined, 1 * 60 * 60 * 1000);
	
	const getResultTimeLimit = (time) => {
		if (time == '') return 'uncertain time';
		return createDateLocal(time, 7 * 24 * 60 * 60 * 1000);
	};
	// 获取报告截止时间
	$: resultGetTimeLimit = getResultTimeLimit(endTime);

    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();
    const toStage = (stage) => {
        dispatch('changeStage', {
            stage,
            endTime,
        });
    }
</script>

<h1 class="text-center text-xl my-4">Set timeline</h1>
<div class="grow w-full md:w-[50em] px-8 space-y-4">
	<label class="flex flex-col gap-1">
		<span>Select a end time:</span>
		<input
			bind:value={endTime}
			min={minTime}
			max={maxTime}
			class="border border-slate-700 rounded-sm p-1"
			type="datetime-local"
			name="end-time"
		/>
	</label>
	<div class="border border-green-400 bg-green-100 rounded-md p-2">
		<span>the maximum end time is 3 weeks after start time</span>
	</div>
	<div class="flex flex-col items-center translate-x-[-5%] py-4">
		<div class="size-3 rounded-full bg-slate-700 relative">
			<span
				class="w-[10em] font-bold absolute right-[100%] top-0 translate-y-[-25%] text-right pr-2"
				>Start Time</span
			>
			<span class="w-[10em] absolute left-[100%] top-0 translate-y-[-25%] pl-2">Now</span>
		</div>
		<div class="w-1 h-16 bg-slate-400 rounded-3xl"></div>
		<div class="size-3 rounded-full bg-slate-700 relative">
			<span
				class="w-[10em] font-bold absolute right-[100%] top-0 translate-y-[-25%] text-right pr-2"
				>End Time</span
			>
			<span class="w-[10em] absolute left-[100%] top-0 translate-y-[-25%] pl-2">{endTime}</span>
		</div>
		<div class="w-1 h-16 bg-blue-300 rounded-3xl"></div>
		<div class="size-3 rounded-full bg-slate-700 relative">
			<span
				class="w-[10em] font-bold absolute right-[100%] top-0 translate-y-[-25%] text-right pr-2"
				>Result Get Deadline</span
			>
			<span class="w-[10em] absolute left-[100%] top-0 translate-y-[-25%] pl-2"
				>{resultGetTimeLimit}</span
			>
		</div>
	</div>
	<div class="border border-yellow-400 bg-yellow-100 rounded-md p-2">
		<span>The time limit to get result is 7 days after the end time of questionnaire</span>
	</div>
</div>
<div class="mb-4 flex flex-wrap gap-2 justify-center items-end w-full md:w-[30em] p-4">
	<button class="bg-green-200 rounded-md px-4 py-2 text-xl w-full"
		>Publish this questionnaire</button
	>
	<button
		class="bg-slate-200 rounded-md px-4 py-2 text-xl"
		on:click={() => toStage('editForm')}
	>
		Previous
	</button>
	<button class="bg-blue-700 rounded-md px-4 py-2 text-xl text-slate-50 grow"> Save all </button>
</div>
