<script>
  import { onMount } from 'svelte';
  
  let items = []
  let uploads
  let domain
  let state
  let domainId

	onMount(async () => {
    // fetch
    let appId
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
        domainId = esEndpoint.payload.data.domain
        appId = esEndpoint.payload.data.id
        uploads = esEndpoint.payload.data.uploads
      } else {
        alert(esEndpoint.payload.reason)
      }
    } else {
      // for custom domains such as https://istrav.com
      let esOne = await scripts.tenant.apps.getOne(null, domain, state)
      if (esOne.payload.success === true) {
        domainId = esOne.payload.data.domain
        appId = esOne.payload.data.id
        uploads = esOne.payload.data.uploads
      } else {
        alert(esOne.payload.reason)
      }
    }
    // get the products
    let esCategories = await scripts.store.categories.getAll(appId)
    if (esCategories.payload.success === true) {
      items = esCategories.payload.data
    } else {
      alert(esCategories.payload.reason)
    }
    // console.log('categories', items)
  })
</script>
<div class="row">
  <div class="col s0 m1"></div>
  <div class="col s12 m10">
    <h3 class="title">SHOP BY CATEGORY</h3>
    <div class="masonry">
      {#each items as item (item.slug)}
        <div class="item">
          <a href={`/categories/${item.slug}`}>
            <div class="image" style={`background-image: url(https://rawcdn.githack.com/${uploads}/${domainId}/${state}/categories/${item.slug}/${item.image});`}></div>
            <h5 class="subtitle">{item.name}</h5>
          </a>
        </div>
      {/each}
    </div>
  </div>
</div>


<style>
.title {
  font-size: 2rem;
  font-weight: 900;
}

.subtitle {
  font-size: 1.5em;
  font-weight: 900;
  margin: 0.5em 0;
  text-transform: uppercase;
  color: #111;
}

.image {
  width: 100%;
  height: 400px;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}

.masonry {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2em;
}

.item {
  padding: 0;
  margin: 0;
}

/* Masonry on medium-sized screens */
@media only screen and (max-width: 1023px) and (min-width: 768px) {
  .masonry {
    grid-template-columns: 1fr 1fr;
  }
}

/* Masonry on small screens */
@media only screen and (max-width: 767px) and (min-width: 0px) {
  .masonry {
    grid-template-columns: 1fr;
  }
}
</style>