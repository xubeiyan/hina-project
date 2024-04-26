<script>
	import { examples } from '$lib/questionnaireExample';
	let content = examples;

	// 创建当前时间经过的毫秒数
	const createDateLocal = (passedMillsecond) => {
		let date = new Date();
		if (passedMillsecond == undefined) {
			passedMillsecond = 0;
		}
		let passedTime = new Date(date.getTime() + passedMillsecond);
		// 去掉后面的秒数毫秒数和Z
		return passedTime.toISOString().slice(0, -8);
	};
	let minTime = createDateLocal();
    // 最长时间为三周
	let maxTime = createDateLocal(3 * 7 * 24 * 60 * 60 * 1000);

	let endTime = minTime;

	let stage = 'setTimeline';
</script>

<div class="grow p-1 relative flex flex-col items-center">
	{#if stage == 'editForm'}
		<h1 class="text-center text-xl my-4">Create new questionnaire</h1>
		<textarea class="w-full md:w-[80%] grow border border-slate-400 rounded-md p-1 overflow-y-auto"
			>{content}</textarea
		>
		<div class="h-16 mb-4 flex gap-2 justify-center items-end w-full">
			<button class="bg-blue-700 rounded-md px-4 py-2 text-xl text-slate-50"> Save </button>
			<button
				class="bg-slate-200 rounded-md px-4 py-2 text-xl"
				on:click={() => {
					stage = 'setTimeline';
				}}
			>
				Save and continue
			</button>
		</div>
	{:else if stage == 'setTimeline'}
		<h1 class="text-center text-xl my-4">Set timeline</h1>
		<div class="grow w-full px-8 space-y-4">
			<label class="flex flex-col gap-1">
				<span>Select a end time:</span>
				<input
					bind:value={endTime}
					min={minTime}
					max={maxTime}
					class="border border-slate-700 rounded-sm"
					type="datetime-local"
					name="end-time"
				/>
			</label>
            <div class="border border-yellow-400 bg-yellow-100 rounded-md p-2">
                <span>The time limit to get result is 7 days after the end time of questionnaire</span>
            </div>
            <div class="flex flex-col items-center translate-x-[-5%] pt-4">
                <div class="size-3 rounded-full bg-slate-700 relative" >
                    <span class="w-[10em] font-bold absolute right-[100%] top-0 translate-y-[-25%] text-right pr-2">Start Time</span>
                    <span class="w-[10em] absolute left-[100%] top-0 translate-y-[-25%] pl-2">Now</span>
                </div>
                <div class="w-1 h-16 bg-slate-400 rounded-3xl"></div>
                <div class="size-3 rounded-full bg-slate-700 relative" >
                    <span class="w-[10em] font-bold absolute right-[100%] top-0 translate-y-[-25%] text-right pr-2">End Time</span>
                    <span class="w-[10em] absolute left-[100%] top-0 translate-y-[-25%] pl-2">{endTime}</span>
                </div>
                <div class="w-1 h-16 bg-blue-300 rounded-3xl"></div>
                <div class="size-3 rounded-full bg-slate-700 relative" >
                    <span class="w-[10em] font-bold absolute right-[100%] top-0 translate-y-[-25%] text-right pr-2">Result Get Deadline</span>
                    <span class="w-[10em] absolute left-[100%] top-0 translate-y-[-25%] pl-2">{endTime}</span>
                </div>
            </div>
		</div>
		<div class="h-16 mb-4 flex gap-2 justify-center items-end w-full">
			<button
				class="bg-slate-200 rounded-md px-4 py-2 text-xl"
				on:click={() => {
					stage = 'editForm';
				}}
			>
				Previous
			</button>
			<button
				class="bg-blue-700 rounded-md px-4 py-2 text-xl text-slate-50"
			>
				Save all things
			</button>
		</div>
	{/if}
</div>
