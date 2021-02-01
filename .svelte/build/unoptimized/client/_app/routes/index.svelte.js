import './index.svelte.css.proxy.js';
/* src/routes/index.svelte generated by Svelte v3.32.1 */
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
} from "../../_snowpack/pkg/svelte/internal.js";

import Navigation from "../../_components/Header/Navigation.svelte.js";
import FrontPageBanner from "../../_components/Home/FrontPage.svelte.js";
import Footer from "../../_components/Footer/Main.svelte.js";
import Featured from "../../_components/Home/Featured.svelte.js";
import ShopByCategory from "../../_components/Home/ShopByCategory.svelte.js";

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
			t2 = text("Welcome");
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
			t2 = claim_text(a1_nodes, "Welcome");
			a1_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(a0, "href", "/");
			attr(a0, "class", "breadcrumb svelte-1wi5vmp");
			attr(a1, "href", "/");
			attr(a1, "class", "breadcrumb svelte-1wi5vmp");
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
	let frontpagebanner;
	let t1;
	let br0;
	let t2;
	let br1;
	let t3;
	let br2;
	let t4;
	let featured;
	let t5;
	let shopbycategory;
	let t6;
	let br3;
	let t7;
	let footer;
	let current;
	navigation = new Navigation({});
	frontpagebanner = new FrontPageBanner({});
	featured = new Featured({});
	shopbycategory = new ShopByCategory({});

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
			create_component(frontpagebanner.$$.fragment);
			t1 = space();
			br0 = element("br");
			t2 = space();
			br1 = element("br");
			t3 = space();
			br2 = element("br");
			t4 = space();
			create_component(featured.$$.fragment);
			t5 = space();
			create_component(shopbycategory.$$.fragment);
			t6 = space();
			br3 = element("br");
			t7 = space();
			create_component(footer.$$.fragment);
			this.h();
		},
		l(nodes) {
			claim_component(navigation.$$.fragment, nodes);
			t0 = claim_space(nodes);
			claim_component(frontpagebanner.$$.fragment, nodes);
			t1 = claim_space(nodes);
			br0 = claim_element(nodes, "BR", { class: true });
			t2 = claim_space(nodes);
			br1 = claim_element(nodes, "BR", { class: true });
			t3 = claim_space(nodes);
			br2 = claim_element(nodes, "BR", { class: true });
			t4 = claim_space(nodes);
			claim_component(featured.$$.fragment, nodes);
			t5 = claim_space(nodes);
			claim_component(shopbycategory.$$.fragment, nodes);
			t6 = claim_space(nodes);
			br3 = claim_element(nodes, "BR", { class: true });
			t7 = claim_space(nodes);
			claim_component(footer.$$.fragment, nodes);
			this.h();
		},
		h() {
			attr(br0, "class", "svelte-1wi5vmp");
			attr(br1, "class", "svelte-1wi5vmp");
			attr(br2, "class", "svelte-1wi5vmp");
			attr(br3, "class", "svelte-1wi5vmp");
		},
		m(target, anchor) {
			mount_component(navigation, target, anchor);
			insert(target, t0, anchor);
			mount_component(frontpagebanner, target, anchor);
			insert(target, t1, anchor);
			insert(target, br0, anchor);
			insert(target, t2, anchor);
			insert(target, br1, anchor);
			insert(target, t3, anchor);
			insert(target, br2, anchor);
			insert(target, t4, anchor);
			mount_component(featured, target, anchor);
			insert(target, t5, anchor);
			mount_component(shopbycategory, target, anchor);
			insert(target, t6, anchor);
			insert(target, br3, anchor);
			insert(target, t7, anchor);
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
			transition_in(frontpagebanner.$$.fragment, local);
			transition_in(featured.$$.fragment, local);
			transition_in(shopbycategory.$$.fragment, local);
			transition_in(footer.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(navigation.$$.fragment, local);
			transition_out(frontpagebanner.$$.fragment, local);
			transition_out(featured.$$.fragment, local);
			transition_out(shopbycategory.$$.fragment, local);
			transition_out(footer.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(navigation, detaching);
			if (detaching) detach(t0);
			destroy_component(frontpagebanner, detaching);
			if (detaching) detach(t1);
			if (detaching) detach(br0);
			if (detaching) detach(t2);
			if (detaching) detach(br1);
			if (detaching) detach(t3);
			if (detaching) detach(br2);
			if (detaching) detach(t4);
			destroy_component(featured, detaching);
			if (detaching) detach(t5);
			destroy_component(shopbycategory, detaching);
			if (detaching) detach(t6);
			if (detaching) detach(br3);
			if (detaching) detach(t7);
			destroy_component(footer, detaching);
		}
	};
}

class Routes extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, null, create_fragment, safe_not_equal, {});
	}
}

export default Routes;
//# sourceMappingURL=index.svelte.js.map
