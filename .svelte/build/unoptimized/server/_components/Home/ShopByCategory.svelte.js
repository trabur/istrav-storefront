import './ShopByCategory.svelte.css.proxy.js';
/* src/components/Home/ShopByCategory.svelte generated by Svelte v3.32.1 */
import {
	add_attribute,
	create_ssr_component,
	each,
	escape
} from "../../_snowpack/pkg/svelte/internal.js";

import { onMount } from "../../_snowpack/pkg/svelte.js";
import { GET_CATEGORIES } from "./queries.js";

const css = {
	code: ".title.svelte-127i5hm{font-size:2rem;font-weight:900}.subtitle.svelte-127i5hm{font-size:1.5em;font-weight:900;margin:0.5em 0;text-transform:uppercase;color:#111}.image.svelte-127i5hm{width:100%;height:400px;background-position:center center;background-repeat:no-repeat;background-size:cover}.masonry.svelte-127i5hm{width:100%;display:grid;grid-template-columns:1fr 1fr;grid-gap:2em}.item.svelte-127i5hm{padding:0;margin:0}@media only screen and (max-width: 1023px) and (min-width: 768px){.masonry.svelte-127i5hm{grid-template-columns:1fr 1fr}}@media only screen and (max-width: 767px) and (min-width: 0px){.masonry.svelte-127i5hm{grid-template-columns:1fr}}",
	map: "{\"version\":3,\"file\":\"ShopByCategory.svelte\",\"sources\":[\"ShopByCategory.svelte\"],\"sourcesContent\":[\"<script>\\n  import { onMount } from 'svelte';\\n  import { GET_CATEGORIES } from \\\"./queries\\\"\\n  \\n  let items = []\\n  let media \\n\\n\\tonMount(() => {\\n    media = window.location.host\\n\\n    // data request\\n    fetch(`./media/${media}/data.json`, {\\n      method: 'POST',\\n      headers: {\\n        'Content-Type': 'application/json',\\n        'Accept': 'application/json',\\n      }\\n    })\\n      .then(r => r.json())\\n      .then(value => {\\n        console.log('value.categories:', value)\\n        items = value.shopByCategory\\n      })\\n  })\\n</script>\\n<div class=\\\"row\\\">\\n  <div class=\\\"col s0 m1\\\"></div>\\n  <div class=\\\"col s12 m10\\\">\\n    <h3 class=\\\"title\\\">SHOP BY CATEGORY</h3>\\n    <div class=\\\"masonry\\\">\\n      {#each items as item (item.slug)}\\n        <div class=\\\"item\\\">\\n          <a href={`/category/${item.slug}`}>\\n            <div class=\\\"image\\\" style={`background-image: url(./media/${media}/${item.image});`}>\\n            <h5 class=\\\"subtitle\\\">{item.name}</h5>\\n          </a>\\n        </div>\\n      {/each}\\n    </div>\\n  </div>\\n</div>\\n\\n\\n<style>\\n.title {\\n  font-size: 2rem;\\n  font-weight: 900;\\n}\\n\\n.subtitle {\\n  font-size: 1.5em;\\n  font-weight: 900;\\n  margin: 0.5em 0;\\n  text-transform: uppercase;\\n  color: #111;\\n}\\n\\n.image {\\n  width: 100%;\\n  height: 400px;\\n  background-position: center center;\\n  background-repeat: no-repeat;\\n  background-size: cover;\\n}\\n\\n.masonry {\\n  width: 100%;\\n  display: grid;\\n  grid-template-columns: 1fr 1fr;\\n  grid-gap: 2em;\\n}\\n\\n.item {\\n  padding: 0;\\n  margin: 0;\\n}\\n\\n/* Masonry on medium-sized screens */\\n@media only screen and (max-width: 1023px) and (min-width: 768px) {\\n  .masonry {\\n    grid-template-columns: 1fr 1fr;\\n  }\\n}\\n\\n/* Masonry on small screens */\\n@media only screen and (max-width: 767px) and (min-width: 0px) {\\n  .masonry {\\n    grid-template-columns: 1fr;\\n  }\\n}\\n</style>\"],\"names\":[],\"mappings\":\"AA4CA,MAAM,eAAC,CAAC,AACN,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,GAAG,AAClB,CAAC,AAED,SAAS,eAAC,CAAC,AACT,SAAS,CAAE,KAAK,CAChB,WAAW,CAAE,GAAG,CAChB,MAAM,CAAE,KAAK,CAAC,CAAC,CACf,cAAc,CAAE,SAAS,CACzB,KAAK,CAAE,IAAI,AACb,CAAC,AAED,MAAM,eAAC,CAAC,AACN,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,KAAK,CACb,mBAAmB,CAAE,MAAM,CAAC,MAAM,CAClC,iBAAiB,CAAE,SAAS,CAC5B,eAAe,CAAE,KAAK,AACxB,CAAC,AAED,QAAQ,eAAC,CAAC,AACR,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,IAAI,CACb,qBAAqB,CAAE,GAAG,CAAC,GAAG,CAC9B,QAAQ,CAAE,GAAG,AACf,CAAC,AAED,KAAK,eAAC,CAAC,AACL,OAAO,CAAE,CAAC,CACV,MAAM,CAAE,CAAC,AACX,CAAC,AAGD,OAAO,IAAI,CAAC,MAAM,CAAC,GAAG,CAAC,YAAY,MAAM,CAAC,CAAC,GAAG,CAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AACjE,QAAQ,eAAC,CAAC,AACR,qBAAqB,CAAE,GAAG,CAAC,GAAG,AAChC,CAAC,AACH,CAAC,AAGD,OAAO,IAAI,CAAC,MAAM,CAAC,GAAG,CAAC,YAAY,KAAK,CAAC,CAAC,GAAG,CAAC,YAAY,GAAG,CAAC,AAAC,CAAC,AAC9D,QAAQ,eAAC,CAAC,AACR,qBAAqB,CAAE,GAAG,AAC5B,CAAC,AACH,CAAC\"}"
};

const ShopByCategory = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let items = [];
	let media;

	onMount(() => {
		media = window.location.host;

		// data request
		fetch(`./media/${media}/data.json`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"Accept": "application/json"
			}
		}).then(r => r.json()).then(value => {
			console.log("value.categories:", value);
			items = value.shopByCategory;
		});
	});

	$$result.css.add(css);

	return `<div class="${"row"}"><div class="${"col s0 m1"}"></div>
  <div class="${"col s12 m10"}"><h3 class="${"title svelte-127i5hm"}">SHOP BY CATEGORY</h3>
    <div class="${"masonry svelte-127i5hm"}">${each(items, item => `<div class="${"item svelte-127i5hm"}"><a${add_attribute("href", `/category/${item.slug}`, 0)}><div class="${"image svelte-127i5hm"}"${add_attribute("style", `background-image: url(./media/${media}/${item.image});`, 0)}><h5 class="${"subtitle svelte-127i5hm"}">${escape(item.name)}</h5>
          </div></a>
        </div>`)}</div></div>
</div>`;
});

export default ShopByCategory;
//# sourceMappingURL=ShopByCategory.svelte.js.map
