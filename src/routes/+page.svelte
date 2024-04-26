<script>
	import AddIcon from '../assets/icons/add.svelte';
	import EditIcon from '../assets/icons/edit.svelte';
</script>

<div class="w-full grow flex flex-col gap-2 justify-center items-center">
	<h1 class="text-3xl mb-16">Hina Project</h1>
	<h5 class="mx-4 text-center">
		Hina Project is a website allows you to publish, edit and collect a questionnaire. You can
		choose an operation...
	</h5>
	<div class="flex gap-2">
		<a href="/new">
			<button class="flex items-center gap-2 p-2 rounded-md border border-blue-400 bg-blue-300 shadow-sm">
				<AddIcon />
				<span>New</span>
			</button>
		</a>
		<a href="/edit/">
			<button class="flex items-center gap-2 p-2 rounded-md border border-neutral-300 bg-neutral-200 shadow-sm">
				<EditIcon />
				<span>Edit an existed one</span>
			</button>
		</a>
	</div>
</div>
