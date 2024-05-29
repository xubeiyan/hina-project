<script>
	import QuestionnaireEdit from '$components/QuestionnaireEdit.svelte';

	let editMode = true;
	export let data;
	const { content, endTime } = data;
</script>

<QuestionnaireEdit {content} {editMode} {endTime} />
