/* src/routes/logout.svelte generated by Svelte v3.32.1 */
import { create_ssr_component } from "../../_snowpack/pkg/svelte/internal.js";

import { onMount } from "../../_snowpack/pkg/svelte.js";

const Logout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	onMount(() => {
		localStorage.removeItem("token");
		window.location.href = `/`;
	});

	return ``;
});

export default Logout;
//# sourceMappingURL=logout.svelte.js.map