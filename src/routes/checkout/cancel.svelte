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

<div class="middle">
  <h3>Checkout canceled!</h3>
  <h4>Let's go back to your cart now... {counter}</h4>
</div>

<style>
  .middle {
    width: 100%;
    text-align: center;
    position: absolute;
    top: 50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
  }
</style>