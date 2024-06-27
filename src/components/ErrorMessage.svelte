<script>
    export let title = 'title text missing';
    export let message = 'message text missing';
    export let type = 'info';
    $: bgAndBorderClass = type == 'danger' ? 'bg-red-200 border-red-400' : 
        type == 'warning' ? 'bg-amber-100 border-amber-400' : 'bg-neutral-100 border-neutral-300';
    $: btnBgAndBorderClass = type == 'danger' ? 'bg-red-300 border-red-400 hover:bg-red-400' : 
    type == 'warning' ? 'bg-amber-200 border-amber-400 hover:bg-amber-300' : 'bg-neutral-200 border-neutral-300 hover:bg-neutral-300';
</script>
<div class="grow flex justify-center items-center px-2">
    <div class="border {bgAndBorderClass} w-full md:w-[30em] rounded-md py-6 px-8 flex flex-col gap-6">
        <h1 class="text-2xl">{ title }</h1>
        <p>{ message }</p>
        <div class="flex justify-end">
            <a href="/" class="{btnBgAndBorderClass} rounded-md px-4 py-1">to Main Page</a>
        </div>
    </div>
</div>