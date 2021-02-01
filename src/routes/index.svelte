<script>
	import Navigation from '../components/Header/Navigation.svelte'
	import FrontPageBanner from '../components/Home/FrontPage.svelte'
  import Footer from '../components/Footer/Main.svelte'
  import Featured from '../components/Home/Featured.svelte'
  import ShopByCategory from '../components/Home/ShopByCategory.svelte'
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