<script>
	import QuestionnaireEdit from '$components/QuestionnaireEdit.svelte';

	let editMode = true;
	export let data;
	const { content, endTime, id } = data;
</script>
<svelte:head>
	<title>Edit your questionnaire</title>
</svelte:head>

<QuestionnaireEdit {content} {editMode} {endTime} {id}/>
