<script>
  import { onMount } from 'svelte';

  export let appId
  export let product
  let cart
  let token
  let itemCount = 1

	onMount(async () => {
    M.updateTextFields()
		token = localStorage.getItem('token')
    console.log('appId', appId)

    // add cart if missing
    let esCarts = await scripts.account.carts.getAll(appId, token)
    console.log('esCarts', esCarts)
    if (esCarts.payload.success === true) {
      cart = esCarts.payload.data[0]
      if (!cart) {
        let change = {
          products: []
        }
        let esSave = await scripts.account.carts.getSave(appId, token, change)
        console.log('esSave', esSave)
        if (esSave.payload.success === true) {
          cart = esSave.payload.data
        } else {
          alert(esSave.payload.reason)
        }
      }
    } else {
      alert(esCarts.payload.reason)
    }
  })

	async function addToCart() {
    if (itemCount === '') return alert('item count must be defined.')

    let change = {
      products: cart.products || []
    }
    change.products.push(product)

    let esUpdate = await scripts.account.carts.getUpdate(appId, token, cart.id, change)
    console.log('esUpdate', esUpdate)
    if (esUpdate.payload.success === true) {
      M.toast({html: `Successfuly added "${product.name}" to your cart.`})
    } else {
      alert(esUpdate.payload.reason)
    }
  }
</script>


<div class="row addToCart">
  <div class="col s12 m6">
    <div class="input-field col s12">
      <input id="itemCount" type="number" class="validate" bind:value={itemCount}>
      <label for="itemCount">Item Count:</label>
    </div>
  </div>
  <div class="col s12 m6">
    <button type='submit' class="waves-effect btn btn-large submit-button" on:click={() => addToCart()}>Add to cart</button>
  </div>
</div>


<style>
  .addToCart {
    background: #eee;
    padding: 1em 1em 0 0;
  }

  .submit-button {
    width: 100%;
    margin-top: 0.4em;
  }
</style>