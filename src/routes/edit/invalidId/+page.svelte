<script>
	import ErrorMessage from "$components/ErrorMessage.svelte";
</script>
<svelte:head>
    <title>Something wrong...</title>
</svelte:head>
<ErrorMessage title='No Database Record' message='Can not find a questionnaire of this id...' type="warning"/>