<script>
    import QuestionnaireEdit from "$components/QuestionnaireEdit.svelte";
    let content = 
`# This is edit test
## What do you want to hide?

1. if you are human, what thing do you want to do?

    `;
    let editMode = true;
    let endTime = '2024-06-15T19:00'
</script>

<QuestionnaireEdit {content} {editMode} {endTime}/>
