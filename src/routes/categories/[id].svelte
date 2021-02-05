<script>
  import { onMount } from 'svelte';

	import Navigation from '../../components/Header/Navigation.svelte'
  import Footer from '../../components/Footer/Main.svelte'
  import ListProducts from '../../components/Category/ListProducts.svelte'
  import Banner from '../../components/Category/Banner.svelte'

  import { stores } from "@sapper/app";
  const { page } = stores();

  // When this is true, show the component
  let load = false

  $: { reMount($page.params.id) }
  function reMount() {
    load = false
    setTimeout(() => load = true, 0)
  }
</script>

<Navigation />
<Banner categoryId={$page.params.id} />
<br />
<br />
<br />
{#if load === true}
  <ListProducts categoryId={$page.params.id} />
{/if}
<br />
<br />
<br />
<br />
<Footer>
	<a href="/" class="breadcrumb hide-on-med-and-down">Home</a>
	<a href="/" class="breadcrumb">Categories</a>
	<a href={`/categories/${$page.params.id}`} class="breadcrumb">{$page.params.id.toUpperCase()}</a>
</Footer>