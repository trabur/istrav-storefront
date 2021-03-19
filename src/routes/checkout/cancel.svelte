<script>
	import { onMount } from 'svelte';
	
	let wait = 3000
	let counter = wait / 1000

	onMount(() => {
    setTimeout(() => {
			window.location.href = `/cart`
		}, wait)

		setInterval(() => {
			counter = counter - 1
		}, 1000)
	})
</script>

<div style="text-align: center;">
  <h1>Checkout canceled!</h1>
  <h4>Let's go back to your cart now... {counter}</h4>
</div>