<script>
  import { onMount } from 'svelte';
  import ListProducts from './ListProducts.svelte'

	let email = '';
  let password = '';
  let esApp
  let cart
  let token
  let raw = {}
  let subtotal
  let total
  let uploads
  let appId
  let domainId
  let domain
  let state

	async function auth() {
    if (email === '') return alert('Email must be defined.')
    if (password === '') return alert('Password must be defined.')

    console.log('esApp', esApp)
    if (esApp.payload.success === true) {
      let esLogin = await scripts.account.users.getLogin(esApp.payload.data.id, email, password)
      console.log('esLogin', esLogin)
      if (esLogin.payload.success === true) {
        localStorage.setItem('token', esLogin.payload.data.token)
        window.location = '/account'
      } else {
        alert(esLogin.payload.reason)
      }
    } else {
      alert(esApp.payload.reason)
    }
  }

  function calculateSubtotal (products, raw) {
    let amount = 0
    products.forEach((value, index) => {
      amount = amount + value.price * raw[value.slug]
    })
    return amount
  }

	onMount(async () => {
    // fetch
    domain = window.location.host
    state = 'production'

    // pick an app to show for local development
    if (domain.includes('localhost:3000')) {
      domain = 'istrav.com'
    }
    // set appId from domain 
    if (domain.includes('dimension.click')) {
      // for subdomains such as http://istrav.dimension.click
      let endpoint = domain.split('.')[0]
      let esEndpoint = await scripts.tenant.apps.getEndpoint(null, endpoint)
      if (esEndpoint.payload.success === true) {
        esApp = esEndpoint
      } else {
        alert(esEndpoint.payload.reason)
      }
    } else {
      // for custom domains such as https://istrav.com
      let esOne = await scripts.tenant.apps.getOne(null, domain, state)
      if (esOne.payload.success === true) {
        esApp = esOne
      } else {
        alert(esOne.payload.reason)
      }
    }

    // my cart
    if (esApp) {
      appId = esApp.payload.data.id
      domainId = esApp.payload.data.domain
      uploads = esApp.payload.data.uploads

      token = localStorage.getItem('token')
  
      let esCarts = await scripts.account.carts.getAll(appId, token)
      console.log('esCarts', esCarts)
      if (esCarts.payload.success === true) {
        cart = esCarts.payload.data[0]
        let esCart = await scripts.account.carts.getOne(appId, token, cart.id)
        console.log('esCart', esCart)
        if (esCarts.payload.success === true) {
          cart = esCart.payload.data
          raw = esCart.payload.data.raw
          subtotal = calculateSubtotal(cart.products, raw)
          total = subtotal
        } else {
          alert(esCart.payload.reason)
        }
      } else {
        alert(esCarts.payload.reason)
      }
    }
  })
</script>

<div class="row" style="min-height: 100vh;">
  <div class="col s12 m12 l1"></div>
  <div class="col s12 m12 l7">
    <br>
    <br>
    <br>
    <h3 class="title">My Cart</h3>
    <h4 class="description">REVIEW YOUR ORDER</h4>
    <hr style="margin: 0.5em 0 0 0;">
    {#if cart}
      <ListProducts products={cart.products} raw={raw} uploads={uploads} domainId={domainId} state={state} />
    {/if}
  </div>
  <div class="col s12 m12 l3">
    <br>
    <br>
    <br>
    <div class="card" style="padding: 1em; background: #eee;">
      <div class="calculate">
        <hr>
        <div style="float: right;">${subtotal / 100}</div>
        <div>Subtotal</div>
        <div style="float: right;">Calculated at checkout</div>
        <div>Taxes</div>
        <div style="float: right;"><strong>FREE</strong></div>
        <div>Estimated Shipping</div>
        <hr>
        <div style="font-weight: 900;">
          <div style="float: right;">${total / 100}</div>
          <div>Total</div>
        </div>
      </div>
      <div class="checkout">
        <a href="/checkout" class="waves-effect btn btn-large checkout-button">proceed to checkout</a>
      </div>
    </div>
    <div class="col s12 m12 l1"></div>
  </div>
</div>

<style>
  .title {
    margin: 0;
    font-size: 2em;
    font-weight: 900;
  }
  .description {
    margin: 0;
    font-size: 1.5em;
  }
  .checkout {
    padding: 1em 0 0 0;
  }
  .checkout-button {
    width: 100%;
  }
</style>