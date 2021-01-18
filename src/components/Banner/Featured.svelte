<script>
  import { onMount } from 'svelte';

  onMount(() => {
		new Splide( '#secondary-slider', {
      fixedWidth: 400,
		  height: 300,
      rewind: true,
      gap: 10,
		  cover: true,
      pagination: true,
    }).mount();
  })
</script>
<br />
<br />
<div class="row">
  <div class="col s0 m1"></div>
  <div class="col s12 m10">
    <h3 class="title">FEATURED</h3>
    <div id="secondary-slider" class="splide">
      <div class="splide__track">
        <ul class="splide__list">
          <li class="splide__slide">
            <img src="coffee-cup.jpg">
          </li>
          <li class="splide__slide">
            <img src="coffee-cup.jpg">
          </li>
          <li class="splide__slide">
            <img src="coffee-cup.jpg">
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>


<style>
.title {
  font-size: 2rem;
  font-weight: 900;
}

.splide__slide img {
	width: 100%;
	height: auto;
}
</style>