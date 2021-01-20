<script>
  import { onMount } from 'svelte';

	import Navigation from '$components/Header/Navigation.svelte'
  import Footer from '$components/Footer/Main.svelte'
  import ListProducts from '$components/Category/ListProducts.svelte'

  onMount(() => {
    let folders = window.location.pathname.split('/')
    let app = folders[1]
    let slug = folders[2]
    let id = folders[3]
    console.log('app', app)
    console.log('slug', slug)
    console.log('id', id)
  })
</script>

<Navigation />
<br />
<br />
<br />
<ListProducts />
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