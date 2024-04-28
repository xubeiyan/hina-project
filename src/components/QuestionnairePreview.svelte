<script>
    import { parse } from "$lib/markdownParser";
    export let markdown = '';
</script>
<div class="grow w-full">
    {@html parse(markdown) }
</div>