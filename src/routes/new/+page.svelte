<script>
    import { examples } from "$lib/questionnaireExample";
</script>
<div class="grow p-1 relative flex flex-col">
    <h1 class="text-center text-xl my-4">Create new questionnaire</h1>
    <textarea class="w-full grow border border-slate-400 rounded-md p-1 overflow-y-auto">{examples}</textarea>
    <div class="h-16 mb-4 flex gap-2 justify-center items-end w-full">
        <button class="bg-blue-700 rounded-md px-4 py-2 text-xl text-slate-50">
            Save
        </button>
        <button class="bg-slate-200 rounded-md px-4 py-2 text-xl">
            Publish
        </button>
    </div>
</div>