/* src/routes/account.svelte generated by Svelte v3.32.1 */
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

import { onMount } from "../../_snowpack/pkg/svelte.js";
import Navigation from "../../_components/Header/Navigation.svelte.js";
import Footer from "../../_components/Footer/Main.svelte.js";
import Account from "../../_components/Auth/Account.svelte.js";

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
			t2 = text("My Account");
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
			t2 = claim_text(a1_nodes, "My Account");
			a1_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(a0, "href", "/");
			attr(a0, "class", "breadcrumb");
			attr(a1, "href", "/account");
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
	let account;
	let t3;
	let footer;
	let current;
	navigation = new Navigation({});
	account = new Account({});

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
			create_component(account.$$.fragment);
			t3 = space();
			create_component(footer.$$.fragment);
		},
		l(nodes) {
			claim_component(navigation.$$.fragment, nodes);
			t0 = claim_space(nodes);
			br0 = claim_element(nodes, "BR", {});
			t1 = claim_space(nodes);
			br1 = claim_element(nodes, "BR", {});
			t2 = claim_space(nodes);
			claim_component(account.$$.fragment, nodes);
			t3 = claim_space(nodes);
			claim_component(footer.$$.fragment, nodes);
		},
		m(target, anchor) {
			mount_component(navigation, target, anchor);
			insert(target, t0, anchor);
			insert(target, br0, anchor);
			insert(target, t1, anchor);
			insert(target, br1, anchor);
			insert(target, t2, anchor);
			mount_component(account, target, anchor);
			insert(target, t3, anchor);
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
			transition_in(account.$$.fragment, local);
			transition_in(footer.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(navigation.$$.fragment, local);
			transition_out(account.$$.fragment, local);
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
			destroy_component(account, detaching);
			if (detaching) detach(t3);
			destroy_component(footer, detaching);
		}
	};
}

class Account_1 extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, null, create_fragment, safe_not_equal, {});
	}
}

export default Account_1;
//# sourceMappingURL=account.svelte.js.map
