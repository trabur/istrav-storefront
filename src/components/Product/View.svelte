
<script>
  import { onMount } from 'svelte';

	// Import markdown conversion library
  import marked from 'marked'

  // objects
  export let productId
  let product
  let media
  let gallery
  let open
  let shipping = ''
  let about = ''
  let activeTab = 'description'

	onMount(() => {
    media = window.location.host

    // product request
    fetch(`./media/${media}/products/${productId}/data.json`, {
      method: 'GET',
      headers: {
        'Cache-Control': 'no-cache',
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    })
      .then(r => r.json())
      .then(value => {
        console.log('product:', value)
        product = value
      })

    // site request
    fetch(`./media/${media}/data.json`, {
      method: 'GET',
      headers: {
        'Cache-Control': 'no-cache',
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    })
      .then(r => r.json())
      .then(value => {
        shipping = value.shipping
        about = value.about
      })

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

<div class="row">
  <div class="col s0 m1"></div>
    {#if product}
      <div class="col s12 m5">
        <img on:click={() => open()} class="image" src={`/media/${media}/products/${productId}/${product.image}`} alt="" />
      </div>
      <div class="col s12 m5">
        <h1>{product.name}</h1>
        <p>{product.details}</p>
      </div>
    {/if}
  <div class="col s0 m1"></div>
</div>
<br />
<br />
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
      {@html marked(product.description)}
    {:else if activeTab === 'shipping'}
      {@html marked(shipping)}
    {:else}
      {@html marked(about)}
    {/if}
  </div>
  <div class="col s0 m1"></div>
</div>


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
