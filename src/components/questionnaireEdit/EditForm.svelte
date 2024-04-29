<script>
    export let content = '';
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();
    const toStage = (stage) => {
        dispatch('changeStage', {
            stage,
            content,
        });
    }
</script>

<h1 class="text-center text-xl my-4">Create new questionnaire</h1>
<textarea
	class="w-full md:w-[80%] grow border border-slate-400 rounded-md p-1 overflow-y-auto"
	bind:value={content}
/>
<div class="h-32 mb-4 flex flex-wrap gap-2 justify-center items-end w-full p-4">
	<button
		class="bg-orange-100 rounded-md px-4 py-2 text-xl w-full"
		on:click={() => toStage('preview')}>Preview Questionnaire</button
	>
	<button class="bg-blue-700 rounded-md px-4 py-2 text-xl text-slate-50"> Save </button>
	<button
		class="bg-slate-200 rounded-md px-4 py-2 text-xl grow"
		on:click={() => toStage('setTimeline')}
	>
		Save and continue
	</button>
</div>
