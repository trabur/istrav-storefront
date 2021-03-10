<script>
  import { onMount } from 'svelte';

  export let products
  export let raw
  export let uploads
  export let state
  export let domainId
  export let updatePrices

  function remove(product) {
    console.log('delete', product)
    updatePrices()
  }

  function changeQty(slug) {
    console.log('changeQty', raw[slug])
    updatePrices()
  }

	// onMount(() => {
  //   M.updateTextFields()
  // })
</script>

{#if products && products.length > 0}
  <div class="items">
    {#each products as item (item.slug)}
      <div class="item">
        <a href={`/products/${item.slug}`}><div class="image" style={`background-image: url(https://rawcdn.githack.com/${uploads}/${domainId}/${state}/products/${item.slug}/${item.image});`}></div> </a>
        <div class="details">
          <div style="float: right;">${item.price / 100}</div>
          <a href={`/products/${item.slug}`} style="color: #111; margin: 0;">{item.name}</a>
          <br />
          <button class="btn" style="float: right;" on:click={() => remove(item)}><i class="material-icons">delete</i></button>
          <div class="row edit">
            <div class="input-field col s6 m4">
              <div style="font-size: 0.75em; color: #aaa; margin: -0.5em 0;">Item Count:</div>
              <input id="itemCount" type="number" class="validate" bind:value={raw[item.slug]} on:change={(e) => changeQty(item.slug)}>
            </div>
          </div>
        </div>
      </div>
    {/each}
  </div>
{/if}

<style>
  .items {
    padding: 0;
  }

  .item {
    padding: 10px 0;
    margin: 0;
    min-height: 120px;
    border-bottom: 1px solid #eee;
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

  .edit,
  .input-field {
    margin-bottom: 0;
  }
</style>