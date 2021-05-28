<script>
	import { onMount } from 'svelte'

	import { appData } from '../stores.js';
  import { istrav, scripts } from '../../farmerless/api'

  let app
  appData.subscribe(value => {
    app = value
    console.log(app)
  })

	let wait = 3000
	let counter = wait / 1000
  
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

    // get the session
		let sessionId
    let esCheckoutSession = await scripts.account.carts.getStripeCheckoutSession(app.id, token, cart.id)
		console.log('esCheckoutSession', esCheckoutSession)
    if (esCheckoutSession.payload.success === true) {
      sessionId = esCheckoutSession.payload.data.id
			
      // then finally redirect using stripe
      let stripe
      if (app.isStripeTestData) {
        stripe = new Stripe(app.stripePublishableKeyTest)
      } else {
        stripe = new Stripe(app.stripePublishableKeyLive)
      }

      // finish
      setTimeout(() => {
			  stripe.redirectToCheckout({ sessionId })
      }, wait)
      setInterval(() => {
        counter = counter - 1
      }, 1000)
    } else {
      alert(esCheckoutSession.payload.reason)
    }
	})
</script>


<div class="middle">
  <h3>Finalizing cart,</h3>
  <h4>Let's proceed to checkout now... {counter}</h4>
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