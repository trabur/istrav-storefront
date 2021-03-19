<script>
	import { onMount } from 'svelte';
	
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

    // empty old cart
    let esEmpty = await scripts.account.carts.getRemove(appId, token, cart.id)
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

<div style="text-align: center;">
  <h1>Checkout success!</h1>
  <h4>Let's take a look at your order history now... {counter}</h4>
</div>