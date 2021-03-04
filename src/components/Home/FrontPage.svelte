<script>
  import { onMount } from 'svelte';

  let domainId
  let domain
  let state
  let uploads
  let image = ''
  let line1
  let line2
  let buttonName
  let buttonUrl

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
        domainId = esEndpoint.payload.data.domain
        uploads = esEndpoint.payload.data.uploads
        image = esEndpoint.payload.data.image
        line1 = esEndpoint.payload.data.line1
        line2 = esEndpoint.payload.data.line2
        buttonName = esEndpoint.payload.data.buttonName
        buttonUrl = esEndpoint.payload.data.buttonUrl
      } else {
        alert(esEndpoint.payload.reason)
      }
    } else {
      // for custom domains such as https://istrav.com
      let esOne = await scripts.tenant.apps.getOne(null, domain, state)
      if (esOne.payload.success === true) {
        domainId = esOne.payload.data.domain
        uploads = esOne.payload.data.uploads
        image = esOne.payload.data.image
        line1 = esOne.payload.data.line1
        line2 = esOne.payload.data.line2
        buttonName = esOne.payload.data.buttonName
        buttonUrl = esOne.payload.data.buttonUrl
      } else {
        alert(esOne.payload.reason)
      }
    }
  })
</script>

<div class="banner">
  {#if image && uploads}
    <div class="image" style={`background-image: url(https://rawcdn.githack.com/${uploads}/${domainId}/${state}/${image});`}>
      <div class="announce">
        <div class="hide-on-med-and-down">
          <span class="first"><h1 class="text">{line1}</h1></span><br />
          <span class="second"><h1 class="text" style="font-size: 2rem;">{line2}</h1></span>
        </div>
        <div class="hide-on-large-only">
          <span class="first"><h1 class="text small">{line1}</h1></span><br />
          <span class="second"><h1 class="text small" style="font-size: 1rem;">{line2}</h1></span>
        </div>
        <a href={`${buttonUrl}`} class="waves-effect waves-light btn-large" style="margin-top: 0.5em;">{buttonName}</a>
      </div>
    </div>
  {/if}
</div>



<style>
  .image {
    width: 100%;
    height: 100vh;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    box-shadow: inset 0px 10px 10px -10px #000;
  }

  .banner {
    height: 100vh;
    position: relative;
    overflow: hidden;
  }


  .announce {
    text-align: center;
    width: 100%;
    position: absolute;
    top: 50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
  }

  .first,
  .second {
    background-color: #fff;
    display: inline-block;
    transform: skew(45deg);
    padding: 0.2em 4em;
    margin: 0.4em;
    text-transform: uppercase;
  }

  .text {
    transform: skew(-45deg);
    margin: 0;
    font-size: 4rem;
    font-weight: 900;
  }

  .small {
    font-size: 2rem;
    font-weight: 900;
  }
</style>