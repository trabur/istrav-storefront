<script>
  import { onMount } from 'svelte';

	import Navigation from '../../components/Header/Navigation.svelte'
  import Footer from '../../components/Footer/Main.svelte'
  import ListProducts from '../../components/Category/ListProducts.svelte'

  import { stores } from "@sapper/app";

  const { page } = stores();
  const { id } = $page.params;

</script>

<Navigation />
<br />
<br />
<br />
<ListProducts categoryId={id} />
<br />
<br />
<br />
<br />
<Footer>
	<a href="/" class="breadcrumb">Home</a>
	<a href="/" class="breadcrumb">Category</a>
</Footer>

<style>

</style>