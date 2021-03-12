
<script>
  import { onMount } from 'svelte';
  import AddToCart from './AddToCart.svelte'
  
	// Import markdown conversion library
  import marked from 'marked'

  // objects
  let domain
  let domainId
  let state
  let uploads
  let product
  let gallery
  let open
  let shipping = ''
  let about = ''
  let activeTab = 'description'
  export let productId
  let appId

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
        appId = esEndpoint.payload.data.id
        domainId = esEndpoint.payload.data.domain
        uploads = esEndpoint.payload.data.uploads
        about = JSON.parse(esEndpoint.payload.data.raw).about
        shipping = JSON.parse(esEndpoint.payload.data.raw).shipping
      } else {
        alert(esEndpoint.payload.reason)
      }
    } else {
      // for custom domains such as https://istrav.com
      let esOne = await scripts.tenant.apps.getOne(null, domain, state)
      if (esOne.payload.success === true) {
        appId = esOne.payload.data.id
        domainId = esOne.payload.data.domain
        uploads = esOne.payload.data.uploads
        about = JSON.parse(esOne.payload.data.raw).about
        shipping = JSON.parse(esOne.payload.data.raw).shipping
      } else {
        alert(esOne.payload.reason)
      }
    }
    // get the products
    let esProducts = await scripts.store.products.getOne(appId, productId)
    if (esProducts.payload.success === true) {
      product = esProducts.payload.data
    } else {
      alert(esProducts.payload.reason)
    }
    console.log('product', product)

    /**
     * photoswipe
     */
    var pswpElement = document.querySelectorAll('.pswp')[0];

    // build items array
    var items = [
      {
        src: 'https://placekitten.com/600/400',
        w: 600,
        h: 400
      },
      {
        src: 'https://placekitten.com/1200/900',
        w: 1200,
        h: 900
      }
    ];

    // define options (if needed)
    var options = {
      // optionName: 'option value'
      // for example:
      index: 0 // start at first slide
    };

    open = function () {
      gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options)
      gallery.init()
    }

    /**
     * tabs
     */
    var elemTabs = document.querySelector('#productTabs')
    var instance = M.Tabs.init(elemTabs, {});
  })
</script>

<div style="min-height: 100vh;">
  <br />
  <br />
  <br />
  <div class="row">
    <div class="col s0 m1"></div>
      {#if product}
        <div class="col s12 m5">
          <img on:click={() => open()} class="image" src={`https://rawcdn.githack.com/${uploads}/${domainId}/${state}/products/${productId}/${product.image}`} alt="" />
        </div>
        <div class="col s12 m5">
          <h1 style="margin: 0; font-size: 2.5em;">{product.name}</h1>
          <hr>
          {#if product.isNotForSale}
            <h2 style="margin: 0; font-weight: 800; font-size: 1.5em;"><strike>${product.price / 100}</strike> NOT FOR SALE</h2>
          {:else}
            <h2 style="margin: 0; font-weight: 800; font-size: 1.5em;">${product.price / 100}</h2>
          {/if}
          <p>{product.details || 'Product details coming soon...'}</p>
          <AddToCart appId={appId} product={product} />
        </div>
      {/if}
    <div class="col s0 m1"></div>
  </div>
  <br />
  <div class="row">
    <div class="col s0 m1"></div>
    <div class="col s12 m10">
      <ul class="tabs tabs-fixed-width" id="productTabs">
        <li class="tab col s3"><a href="#description" on:click={() => activeTab = 'description'}>Description</a></li>
        <li class="tab col s3"><a href="#shipping" on:click={() => activeTab = 'shipping'}>Shipping</a></li>
        <li class="tab col s3"><a href="#about" on:click={() => activeTab = 'about'}>About</a></li>
      </ul>
      {#if product && activeTab === 'description'}
        {@html marked(product.description || '')}
      {:else if activeTab === 'shipping'}
        {@html marked(shipping)}
      {:else}
        {@html marked(about)}
      {/if}
    </div>
    <div class="col s0 m1"></div>
  </div>
</div>

<!-- <div class="row">
  <div class="col s0 m1"></div>
  <div class="col s12 m10">
    {#if product}
      <ShopByRelated products={product.related} />
    {/if}
  </div>
  <div class="col s0 m1"></div>
</div> -->

<!-- Root element of PhotoSwipe. Must have class pswp. -->
<div class="pswp" tabindex="-1" role="dialog" aria-hidden="true">

    <!-- Background of PhotoSwipe. 
         It's a separate element as animating opacity is faster than rgba(). -->
    <div class="pswp__bg"></div>

    <!-- Slides wrapper with overflow:hidden. -->
    <div class="pswp__scroll-wrap">

        <!-- Container that holds slides. 
            PhotoSwipe keeps only 3 of them in the DOM to save memory.
            Don't modify these 3 pswp__item elements, data is added later on. -->
        <div class="pswp__container">
            <div class="pswp__item"></div>
            <div class="pswp__item"></div>
            <div class="pswp__item"></div>
        </div>

        <!-- Default (PhotoSwipeUI_Default) interface on top of sliding area. Can be changed. -->
        <div class="pswp__ui pswp__ui--hidden">

            <div class="pswp__top-bar">

                <!--  Controls are self-explanatory. Order can be changed. -->

                <div class="pswp__counter"></div>

                <button class="pswp__button pswp__button--close" title="Close (Esc)"></button>

                <button class="pswp__button pswp__button--share" title="Share"></button>

                <button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>

                <button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button>

                <!-- Preloader demo https://codepen.io/dimsemenov/pen/yyBWoR -->
                <!-- element will get class pswp__preloader--active when preloader is running -->
                <div class="pswp__preloader">
                    <div class="pswp__preloader__icn">
                      <div class="pswp__preloader__cut">
                        <div class="pswp__preloader__donut"></div>
                      </div>
                    </div>
                </div>
            </div>

            <div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
                <div class="pswp__share-tooltip"></div> 
            </div>

            <button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)">
            </button>

            <button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)">
            </button>

            <div class="pswp__caption">
                <div class="pswp__caption__center"></div>
            </div>
        </div>
    </div>
</div>

<style>
  .image {
    width: 100%;
    cursor: pointer;
  }

  h1 {
    margin: 0;
  }
</style>
