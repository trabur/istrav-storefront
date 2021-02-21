
<script>
  import { onMount } from 'svelte';

  export let appId
  let cart

	onMount(async () => {
		let token = localStorage.getItem('token')

    let esCarts = await scripts.account.carts.getAll(appId, token)
    console.log('esCarts', esCarts)
    if (esCarts.payload.success === true) {
      cart = esCarts.payload.data[0]
      let esCart = await scripts.account.carts.getOne(appId, token, cart.id)
      console.log('esCart', esCart)
      if (esCarts.payload.success === true) {
        cart = esCart.payload.data
      } else {
        alert(esCart.payload.reason)
      }
    } else {
      alert(esCarts.payload.reason)
    }
  })

  function checkout () {
    alert('checkout')
  }
</script>

<h5 style="text-align: center;">my cart</h5>

{JSON.stringify(cart, null, 2)}
<div class="checkout">
  <button type='submit' class="waves-effect btn btn-large checkout-button" on:click={() => checkout()}>checkout</button>
</div>



<style>
  .checkout {
    padding: 0.5em;
  }

  .checkout-button {
    width: 100%;
  }
</style>