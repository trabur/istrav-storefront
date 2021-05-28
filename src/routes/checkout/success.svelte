<script>
	import { onMount } from 'svelte';
	
	import { appData } from '../../stores.js';
  import { istrav, scripts } from '../../../farmerless/api'

	let wait = 3000
	let counter = wait / 1000

  let app
  appData.subscribe(value => {
    app = value
    console.log(app)
  })
  let token = null
  let cart

	onMount(async () => {
    // user
		token = localStorage.getItem('token')

    if (!app.id) return;

		// get the cart
    let esCarts = await scripts.account.carts.getAll(app.id, token)
    console.log('esCarts', esCarts)
    if (esCarts.payload.success === true) {
      let id = esCarts.payload.data[0].id
      let esCart = await scripts.account.carts.getOne(app.id, token, id)
      console.log('esCart', esCart)
      if (esCart.payload.success === true) {
        cart = esCart.payload.data
      } else {
        alert(esCart.payload.reason)
      }
    } else {
      alert(esCarts.payload.reason)
    }

    // empty old cart
    let esEmpty = await scripts.account.carts.getRemove(app.id, token, cart.id)
    console.log('esEmpty', esEmpty)
    if (esEmpty.payload.success === true) {
      // finish
      setTimeout(() => {
        window.location.href = `/account#orderHistory`
      }, wait)
      setInterval(() => {
        counter = counter - 1
      }, 1000)
    } else {
      alert(esEmpty.payload.reason)
    }
	})
</script>

<div class="middle">
  <h3>Checkout success!</h3>
  <h4>Let's take a look at your order history now... {counter}</h4>
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