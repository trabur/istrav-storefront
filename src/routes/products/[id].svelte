<script>
  import { onMount } from 'svelte';

	import Navigation from '../../components/Header/Navigation.svelte'
  import Footer from '../../components/Footer/Main.svelte'
  import View from '../../components/Product/View.svelte'

  import { stores } from "@sapper/app"
  const { page } = stores()

  // When this is true, show the component
  let load = false

  $: { reMount($page.params.id) }
  function reMount() {
    load = false
    setTimeout(() => load = true, 0)
  }
</script>

<Navigation />
{#if load === true}
  <View productId={$page.params.id} />
{/if}
<Footer>
	<a href="/" class="breadcrumb hide-on-med-and-down">Home</a>
	<a href="/" class="breadcrumb">Products</a>
	<a href={`/products/${$page.params.id}`} class="breadcrumb">{$page.params.id.toUpperCase()}</a>
</Footer>

<style>

</style>