<script>
	import Navigation from '$components/Header/Navigation.svelte'
	import FrontPageBanner from '$components/Banner/FrontPage.svelte'
  import Footer from '$components/Footer/Main.svelte'
  import Featured from '$components/Banner/Featured.svelte'
  import ShopByCategory from '$components/Banner/ShopByCategory.svelte'
	
	let name = import.meta.env.SNOWPACK_PUBLIC_NAME
	let apiUri = import.meta.env.SNOWPACK_PUBLIC_API_URI
	let announce = import.meta.env.SNOWPACK_PUBLIC_ANNOUNCE
	console.log('NAME', name)
	console.log('API_URI', apiUri)
	console.log('ANNOUNCE', announce)
</script>

<Navigation />
<FrontPageBanner />
<br />
<br />
<br />
<Featured />
<ShopByCategory />
<br />
<Footer>
	<a href="/" class="breadcrumb">Home</a>
	<a href="/" class="breadcrumb">Welcome</a>
</Footer>

<style>
	:root {
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	}
</style>