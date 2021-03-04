
<script>
  import { onMount } from 'svelte';

  export let appId
  export let uploads
  export let domainId
  export let state
  let cart
  let token

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

<h5 style="text-align: center; margin-bottom: 0;">My Cart</h5>

<!-- {JSON.stringify(cart, null, 2)} -->

{#if token}
  <div class="items">
    {#if cart && cart.products}
      {#each cart.products as item (item.slug)}
        <div class="item">
          <div class="image" style={`background-image: url(https://rawcdn.githack.com/${uploads}/${domainId}/${state}/products/${item.slug}/${item.image});`}>
          </div>
          <div class="details">
            <h5 style="color: #111; margin: 0;">{item.name}</h5>
          </div>
        </div>
      {/each}
    {/if}
  </div>
  <div class="checkout">
    <button type='submit' class="waves-effect btn btn-large checkout-button" on:click={() => checkout()}>checkout</button>
  </div>
{:else}
  <div class="auth">
    <a href="/login" class="waves-effect btn btn-large auth-button">Let's go!</a>
    <p style="text-align: center;">(please login or register to get started)</p>
  </div>
{/if}



<style>
  .auth,
  .checkout {
    padding: 0.5em;
  }

  .auth-button,
  .checkout-button {
    width: 100%;
  }

  .items {
    padding: 1em;
  }

  .item {
    padding: 10px 0;
    margin: 0;
    min-height: 120px;
    border-top: 1px solid #eee;
  }

  .image {
    width: 100px;
    height: 100px;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    float: left;
  }

  .details {
    margin-left: 110px;
  }
</style>