<script>
  import { onMount } from 'svelte';

	let announce = JSON.parse(import.meta.env.SNOWPACK_PUBLIC_ANNOUNCE) || {
    line1: 'Final reduction',
    line2: 'Up to 70% off sale',
    buttonName: 'SHOP SALE',
    buttonUrl: '/category/accessories/7/'
  }

  // onMount(() => {
  // })
</script>

<div class="parallax-container">
  <div class="parallax">
    <img style={`opacity: 1; height: 600px;`} src="./clothing.jpg">
  </div>
</div>

<div class="announce">
  <span class="first"><h1 class="text">{announce.line1}</h1></span><br />
  <span class="second"><h1 class="text">{announce.line2}</h1></span><br />
  <a href={`${announce.buttonUrl}`} class="waves-effect waves-light btn-large" style="margin-top: 0.5em;">{announce.buttonName}</a>
</div>


<style>
.parallax-container {
  height: 600px;
}

.announce {
  margin-top: -450px;
  height: 200px;
  text-align: center;
  margin-bottom: 250px;
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
</style>