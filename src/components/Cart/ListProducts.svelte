<script>
  export let products
  export let raw
  export let uploads
  export let state
  export let domainId
</script>

{#if products && products.length > 0}
  <div class="items">
    {#each products as item (item.slug)}
      <div class="item">
        <a href={`/products/${item.slug}`}><div class="image" style={`background-image: url(https://rawcdn.githack.com/${uploads}/${domainId}/${state}/products/${item.slug}/${item.image});`}></div> </a>
        <div class="details">
          <div style="float: right;">${item.price / 100}</div>
          <a href={`/products/${item.slug}`} style="color: #111; margin: 0;">{item.name}</a>
          <div style="color: #888;">qty: {raw[item.slug]}</div>
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
</style>