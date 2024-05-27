<script>
  import '../app.css';
	import Header from '../components/Header.svelte';
</script>

<div class="min-h-svh flex flex-col">
  <Header />
  <slot />
</div>