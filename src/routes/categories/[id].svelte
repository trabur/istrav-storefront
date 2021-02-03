<script>
  import { onMount } from 'svelte';

	import Navigation from '../../components/Header/Navigation.svelte'
  import Footer from '../../components/Footer/Main.svelte'
  import ListProducts from '../../components/Category/ListProducts.svelte'
  import Banner from '../../components/Category/Banner.svelte'

  import { stores } from "@sapper/app";

  const { page } = stores();
  const { id } = $page.params;

</script>

<Navigation />
<Banner categoryId={id} />
<br />
<br />
<br />
<ListProducts categoryId={id} />
<br />
<br />
<br />
<br />
<Footer>
	<a href="/" class="breadcrumb hide-on-med-and-down">Home</a>
	<a href="/" class="breadcrumb">Categories</a>
	<a href={`/categories/${id}`} class="breadcrumb">{id.toUpperCase()}</a>
</Footer>