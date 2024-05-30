<script>
	import QuestionnaireEdit from '$components/QuestionnaireEdit.svelte';

	let editMode = true;
	export let data;
	const { content, endTime, id } = data;
</script>

<QuestionnaireEdit {content} {editMode} {endTime} {id}/>
