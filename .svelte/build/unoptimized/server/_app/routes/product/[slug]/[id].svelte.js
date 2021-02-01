/* src/routes/product/[slug]/[id].svelte generated by Svelte v3.32.1 */
import { create_ssr_component, validate_component } from "../../../../_snowpack/pkg/svelte/internal.js";

import { onMount } from "../../../../_snowpack/pkg/svelte.js";
import Navigation from "../../../../_components/Header/Navigation.svelte.js";
import Footer from "../../../../_components/Footer/Main.svelte.js";
import View from "../../../../_components/Product/View.svelte.js";

const U5Bidu5D = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	onMount(() => {
		let folders = window.location.pathname.split("/");
		let app = folders[1];
		let slug = folders[2];
		let id = folders[3];
		console.log("app", app);
		console.log("slug", slug);
		console.log("id", id);
	});

	return `${validate_component(Navigation, "Navigation").$$render($$result, {}, {}, {})}
<br>
<br>
<br>
${validate_component(View, "View").$$render($$result, {}, {}, {})}
<br>
<br>
<br>
<br>
${validate_component(Footer, "Footer").$$render($$result, {}, {}, {
		default: () => `<a href="${"/"}" class="${"breadcrumb"}">Home</a>
	<a href="${"/"}" class="${"breadcrumb"}">Category</a>
`
	})}`;
});

export default U5Bidu5D;
//# sourceMappingURL=[id].svelte.js.map
