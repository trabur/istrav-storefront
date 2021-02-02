<script>
  import { onMount } from 'svelte';

	import Navigation from '../../components/Header/Navigation.svelte'
  import Footer from '../../components/Footer/Main.svelte'
  import View from '../../components/Product/View.svelte'

  import { stores } from "@sapper/app";
  
  const { page } = stores();
  const { id } = $page.params;
</script>

<Navigation />
<br />
<br />
<br />
<View productId={id} />
<br />
<br />
<br />
<br />
<Footer>
	<a href="/" class="breadcrumb">Home</a>
	<a href="/" class="breadcrumb">Products</a>
</Footer>

<style>

</style>