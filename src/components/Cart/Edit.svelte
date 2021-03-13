<script>
  import { onMount } from 'svelte';
  import ListProducts from './ListProducts.svelte'

  export let appId
  export let uploads
  export let state
  export let domainId

  let cart
  let token
  let raw = {}
  let subtotal
  let total

  function calculateSubtotal (products, raw) {
    let amount = 0
    products.forEach((value, index) => {
      amount = amount + value.price * raw[value.slug]
    })
    return amount
  }

  function updatePrices () {
    subtotal = calculateSubtotal(cart.products, raw)
    total = subtotal
  }

	onMount(async () => {
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
      <ListProducts products={cart.products} raw={raw} uploads={uploads} domainId={domainId} state={state} updatePrices={updatePrices} />
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