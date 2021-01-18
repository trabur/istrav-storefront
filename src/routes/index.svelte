<script>
	import Counter from '$components/Counter.svelte'
	import Navigation from '$components/MainMenu/Navigation.svelte'
	import FrontPageBanner from '$components/Banner/FrontPage.svelte'
  import Footer from '$components/Footer/Main.svelte'
	
	let name = import.meta.env.SNOWPACK_PUBLIC_NAME
	let apiUri = import.meta.env.SNOWPACK_PUBLIC_API_URI
	let announce = import.meta.env.SNOWPACK_PUBLIC_ANNOUNCE
	console.log('NAME', name)
	console.log('API_URI', apiUri)
	console.log('ANNOUNCE', announce)
</script>

<Navigation />
<FrontPageBanner />
<main>
	<h1>Hello world!</h1>

	<Counter/>
	<p>Visit the <a href="https://svelte.dev">svelte.dev</a> to learn how to build Svelte apps.</p>
</main>

<Footer>
	<a href="/" class="breadcrumb">Home</a>
	<a href="/" class="breadcrumb">Welcome</a>
</Footer>

<style>
	:root {
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	}

	main {
		text-align: center;
		padding: 1em;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4rem;
		font-weight: 100;
		line-height: 1.1;
		margin: 4rem auto;
		max-width: 14rem;
	}

	p {
		max-width: 14rem;
		margin: 2rem auto;
		line-height: 1.35;
	}

	@media (min-width: 480px) {
		h1 {
			max-width: none;
		}

		p {
			max-width: none;
		}
	}
</style>