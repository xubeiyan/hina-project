<script>
	import QuestionnaireEdit from '$components/QuestionnaireEdit.svelte';
	import { examples } from '$lib/questionnaireExample';

	// markdown内容
	let content = examples;
</script>

<QuestionnaireEdit {content} />
