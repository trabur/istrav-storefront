<script>
	import Navigation from '../components/Header/Navigation.svelte'
	import MyCart from '../components/Cart/Edit.svelte'
  import Footer from '../components/Footer/Main.svelte'
</script>

<Navigation />
<MyCart />
<Footer>
	<a href="/" class="breadcrumb">Home</a>
	<a href="/cart" class="breadcrumb">Cart</a>
</Footer>