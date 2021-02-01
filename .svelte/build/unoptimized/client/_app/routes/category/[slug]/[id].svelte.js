/* src/routes/category/[slug]/[id].svelte generated by Svelte v3.32.1 */
import {
	SvelteComponent,
	append,
	attr,
	children,
	claim_component,
	claim_element,
	claim_space,
	claim_text,
	create_component,
	destroy_component,
	detach,
	element,
	init,
	insert,
	mount_component,
	safe_not_equal,
	space,
	text,
	transition_in,
	transition_out
} from "../../../../_snowpack/pkg/svelte/internal.js";

import { onMount } from "../../../../_snowpack/pkg/svelte.js";
import Navigation from "../../../../_components/Header/Navigation.svelte.js";
import Footer from "../../../../_components/Footer/Main.svelte.js";
import ListProducts from "../../../../_components/Category/ListProducts.svelte.js";

function create_default_slot(ctx) {
	let a0;
	let t0;
	let t1;
	let a1;
	let t2;

	return {
		c() {
			a0 = element("a");
			t0 = text("Home");
			t1 = space();
			a1 = element("a");
			t2 = text("Category");
			this.h();
		},
		l(nodes) {
			a0 = claim_element(nodes, "A", { href: true, class: true });
			var a0_nodes = children(a0);
			t0 = claim_text(a0_nodes, "Home");
			a0_nodes.forEach(detach);
			t1 = claim_space(nodes);
			a1 = claim_element(nodes, "A", { href: true, class: true });
			var a1_nodes = children(a1);
			t2 = claim_text(a1_nodes, "Category");
			a1_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(a0, "href", "/");
			attr(a0, "class", "breadcrumb");
			attr(a1, "href", "/");
			attr(a1, "class", "breadcrumb");
		},
		m(target, anchor) {
			insert(target, a0, anchor);
			append(a0, t0);
			insert(target, t1, anchor);
			insert(target, a1, anchor);
			append(a1, t2);
		},
		d(detaching) {
			if (detaching) detach(a0);
			if (detaching) detach(t1);
			if (detaching) detach(a1);
		}
	};
}

function create_fragment(ctx) {
	let navigation;
	let t0;
	let br0;
	let t1;
	let br1;
	let t2;
	let br2;
	let t3;
	let listproducts;
	let t4;
	let br3;
	let t5;
	let br4;
	let t6;
	let br5;
	let t7;
	let br6;
	let t8;
	let footer;
	let current;
	navigation = new Navigation({});
	listproducts = new ListProducts({});

	footer = new Footer({
			props: {
				$$slots: { default: [create_default_slot] },
				$$scope: { ctx }
			}
		});

	return {
		c() {
			create_component(navigation.$$.fragment);
			t0 = space();
			br0 = element("br");
			t1 = space();
			br1 = element("br");
			t2 = space();
			br2 = element("br");
			t3 = space();
			create_component(listproducts.$$.fragment);
			t4 = space();
			br3 = element("br");
			t5 = space();
			br4 = element("br");
			t6 = space();
			br5 = element("br");
			t7 = space();
			br6 = element("br");
			t8 = space();
			create_component(footer.$$.fragment);
		},
		l(nodes) {
			claim_component(navigation.$$.fragment, nodes);
			t0 = claim_space(nodes);
			br0 = claim_element(nodes, "BR", {});
			t1 = claim_space(nodes);
			br1 = claim_element(nodes, "BR", {});
			t2 = claim_space(nodes);
			br2 = claim_element(nodes, "BR", {});
			t3 = claim_space(nodes);
			claim_component(listproducts.$$.fragment, nodes);
			t4 = claim_space(nodes);
			br3 = claim_element(nodes, "BR", {});
			t5 = claim_space(nodes);
			br4 = claim_element(nodes, "BR", {});
			t6 = claim_space(nodes);
			br5 = claim_element(nodes, "BR", {});
			t7 = claim_space(nodes);
			br6 = claim_element(nodes, "BR", {});
			t8 = claim_space(nodes);
			claim_component(footer.$$.fragment, nodes);
		},
		m(target, anchor) {
			mount_component(navigation, target, anchor);
			insert(target, t0, anchor);
			insert(target, br0, anchor);
			insert(target, t1, anchor);
			insert(target, br1, anchor);
			insert(target, t2, anchor);
			insert(target, br2, anchor);
			insert(target, t3, anchor);
			mount_component(listproducts, target, anchor);
			insert(target, t4, anchor);
			insert(target, br3, anchor);
			insert(target, t5, anchor);
			insert(target, br4, anchor);
			insert(target, t6, anchor);
			insert(target, br5, anchor);
			insert(target, t7, anchor);
			insert(target, br6, anchor);
			insert(target, t8, anchor);
			mount_component(footer, target, anchor);
			current = true;
		},
		p(ctx, [dirty]) {
			const footer_changes = {};

			if (dirty & /*$$scope*/ 1) {
				footer_changes.$$scope = { dirty, ctx };
			}

			footer.$set(footer_changes);
		},
		i(local) {
			if (current) return;
			transition_in(navigation.$$.fragment, local);
			transition_in(listproducts.$$.fragment, local);
			transition_in(footer.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(navigation.$$.fragment, local);
			transition_out(listproducts.$$.fragment, local);
			transition_out(footer.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(navigation, detaching);
			if (detaching) detach(t0);
			if (detaching) detach(br0);
			if (detaching) detach(t1);
			if (detaching) detach(br1);
			if (detaching) detach(t2);
			if (detaching) detach(br2);
			if (detaching) detach(t3);
			destroy_component(listproducts, detaching);
			if (detaching) detach(t4);
			if (detaching) detach(br3);
			if (detaching) detach(t5);
			if (detaching) detach(br4);
			if (detaching) detach(t6);
			if (detaching) detach(br5);
			if (detaching) detach(t7);
			if (detaching) detach(br6);
			if (detaching) detach(t8);
			destroy_component(footer, detaching);
		}
	};
}

function instance($$self) {
	onMount(() => {
		let folders = window.location.pathname.split("/");
		let app = folders[1];
		let slug = folders[2];
		let id = folders[3];
		console.log("app", app);
		console.log("slug", slug);
		console.log("id", id);
	});

	return [];
}

class U5Bidu5D extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, {});
	}
}

export default U5Bidu5D;
//# sourceMappingURL=[id].svelte.js.map
