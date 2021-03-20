<script>
	import { onMount } from 'svelte'
	
	let wait = 3000
	let counter = wait / 1000

  let esApp
  let appId
  let domainId = window.location.host
  let state = 'production'
  let token = null
  let cart

	onMount(async () => {
    // user
		token = localStorage.getItem('token')

    domainId = window.location.host

    // pick an app to show for local development
    if (domainId.includes('localhost:3000')) {
      domainId = 'istrav.com'
    }
    // set appId from domain 
    if (domainId.includes('dimension.click')) {
      // for subdomains such as http://istrav.dimension.click
      let endpoint = domainId.split('.')[0]
      let esEndpoint = await scripts.tenant.apps.getEndpoint(null, endpoint)
      if (esEndpoint.payload.success === true) {
        esApp = esEndpoint.payload.data
        appId = esEndpoint.payload.data.id
      } else {
        alert(esEndpoint.payload.reason)
      }
    } else {
      // for custom domains such as https://istrav.com
      let esOne = await scripts.tenant.apps.getOne(null, domainId, state)
      if (esOne.payload.success === true) {
        esApp = esOne.payload.data
        appId = esOne.payload.data.id
      } else {
        alert(esOne.payload.reason)
      }
    }
    console.log('esApp', esApp)

		// get the cart
    let esCarts = await scripts.account.carts.getAll(appId, token)
    console.log('esCarts', esCarts)
    if (esCarts.payload.success === true) {
      let id = esCarts.payload.data[0].id
      let esCart = await scripts.account.carts.getOne(appId, token, id)
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
    let esCheckoutSession = await scripts.account.carts.getStripeCheckoutSession(appId, token, cart.id)
		console.log('esCheckoutSession', esCheckoutSession)
    if (esCheckoutSession.payload.success === true) {
      sessionId = esCheckoutSession.payload.data.id
			
      // then finally redirect using stripe
      let stripe
      if (esApp.isStripeTestData) {
        stripe = new Stripe(esApp.stripePublishableKeyTest)
      } else {
        stripe = new Stripe(esApp.stripePublishableKeyLive)
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
  <h3>My shopping cart,</h3>
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