<script>
    import { parse } from "$lib/markdownParser";
    export let markdown = '';
</script>
<div class="grow w-full px-4">
    {@html parse(markdown) }
</div>