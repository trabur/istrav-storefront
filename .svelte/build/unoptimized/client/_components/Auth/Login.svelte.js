import './Login.svelte.css.proxy.js';
/* src/components/Auth/Login.svelte generated by Svelte v3.32.1 */
import {
	SvelteComponent,
	append,
	attr,
	children,
	claim_element,
	claim_space,
	claim_text,
	detach,
	element,
	init,
	insert,
	listen,
	noop,
	run_all,
	safe_not_equal,
	set_input_value,
	set_style,
	space,
	text
} from "../../_snowpack/pkg/svelte/internal.js";

import { onMount, onDestroy } from "../../_snowpack/pkg/svelte.js";

function create_fragment(ctx) {
	let div8;
	let div0;
	let t0;
	let div6;
	let h3;
	let t1;
	let t2;
	let div4;
	let div3;
	let div1;
	let input0;
	let t3;
	let label0;
	let t4;
	let t5;
	let div2;
	let input1;
	let t6;
	let label1;
	let t7;
	let t8;
	let br;
	let t9;
	let button;
	let t10;
	let t11;
	let div5;
	let a;
	let t12;
	let t13;
	let div7;
	let mounted;
	let dispose;

	return {
		c() {
			div8 = element("div");
			div0 = element("div");
			t0 = space();
			div6 = element("div");
			h3 = element("h3");
			t1 = text("LOGIN");
			t2 = space();
			div4 = element("div");
			div3 = element("div");
			div1 = element("div");
			input0 = element("input");
			t3 = space();
			label0 = element("label");
			t4 = text("Email");
			t5 = space();
			div2 = element("div");
			input1 = element("input");
			t6 = space();
			label1 = element("label");
			t7 = text("Password");
			t8 = space();
			br = element("br");
			t9 = space();
			button = element("button");
			t10 = text("Submit");
			t11 = space();
			div5 = element("div");
			a = element("a");
			t12 = text("REGISTER");
			t13 = space();
			div7 = element("div");
			this.h();
		},
		l(nodes) {
			div8 = claim_element(nodes, "DIV", { class: true });
			var div8_nodes = children(div8);
			div0 = claim_element(div8_nodes, "DIV", { class: true });
			children(div0).forEach(detach);
			t0 = claim_space(div8_nodes);
			div6 = claim_element(div8_nodes, "DIV", { class: true });
			var div6_nodes = children(div6);
			h3 = claim_element(div6_nodes, "H3", { class: true });
			var h3_nodes = children(h3);
			t1 = claim_text(h3_nodes, "LOGIN");
			h3_nodes.forEach(detach);
			t2 = claim_space(div6_nodes);
			div4 = claim_element(div6_nodes, "DIV", { class: true, style: true });
			var div4_nodes = children(div4);
			div3 = claim_element(div4_nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			div1 = claim_element(div3_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			input0 = claim_element(div1_nodes, "INPUT", { id: true, type: true, class: true });
			t3 = claim_space(div1_nodes);
			label0 = claim_element(div1_nodes, "LABEL", { for: true });
			var label0_nodes = children(label0);
			t4 = claim_text(label0_nodes, "Email");
			label0_nodes.forEach(detach);
			div1_nodes.forEach(detach);
			t5 = claim_space(div3_nodes);
			div2 = claim_element(div3_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			input1 = claim_element(div2_nodes, "INPUT", { id: true, type: true, class: true });
			t6 = claim_space(div2_nodes);
			label1 = claim_element(div2_nodes, "LABEL", { for: true });
			var label1_nodes = children(label1);
			t7 = claim_text(label1_nodes, "Password");
			label1_nodes.forEach(detach);
			div2_nodes.forEach(detach);
			t8 = claim_space(div3_nodes);
			br = claim_element(div3_nodes, "BR", {});
			t9 = claim_space(div3_nodes);
			button = claim_element(div3_nodes, "BUTTON", { style: true, type: true, class: true });
			var button_nodes = children(button);
			t10 = claim_text(button_nodes, "Submit");
			button_nodes.forEach(detach);
			div3_nodes.forEach(detach);
			div4_nodes.forEach(detach);
			t11 = claim_space(div6_nodes);
			div5 = claim_element(div6_nodes, "DIV", { style: true });
			var div5_nodes = children(div5);
			a = claim_element(div5_nodes, "A", { href: true, class: true });
			var a_nodes = children(a);
			t12 = claim_text(a_nodes, "REGISTER");
			a_nodes.forEach(detach);
			div5_nodes.forEach(detach);
			div6_nodes.forEach(detach);
			t13 = claim_space(div8_nodes);
			div7 = claim_element(div8_nodes, "DIV", { class: true });
			children(div7).forEach(detach);
			div8_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(div0, "class", "col s12 m4");
			attr(h3, "class", "title svelte-1ha4hs7");
			attr(input0, "id", "email");
			attr(input0, "type", "text");
			attr(input0, "class", "validate");
			attr(label0, "for", "email");
			attr(div1, "class", "input-field col s12");
			attr(input1, "id", "password");
			attr(input1, "type", "password");
			attr(input1, "class", "validate");
			attr(label1, "for", "password");
			attr(div2, "class", "input-field col s12");
			set_style(button, "margin-left", "1em");
			attr(button, "type", "submit");
			attr(button, "class", "waves-effect btn");
			attr(div3, "class", "row");
			attr(div4, "class", "card");
			set_style(div4, "padding", "1em");
			set_style(div4, "background", "#eee");
			attr(a, "href", "/register");
			attr(a, "class", "waves-effect red lighten-2 btn");
			set_style(div5, "text-align", "right");
			attr(div6, "class", "col s12 m4");
			attr(div7, "class", "col s12 m4");
			attr(div8, "class", "row");
		},
		m(target, anchor) {
			insert(target, div8, anchor);
			append(div8, div0);
			append(div8, t0);
			append(div8, div6);
			append(div6, h3);
			append(h3, t1);
			append(div6, t2);
			append(div6, div4);
			append(div4, div3);
			append(div3, div1);
			append(div1, input0);
			set_input_value(input0, /*email*/ ctx[0]);
			append(div1, t3);
			append(div1, label0);
			append(label0, t4);
			append(div3, t5);
			append(div3, div2);
			append(div2, input1);
			set_input_value(input1, /*password*/ ctx[1]);
			append(div2, t6);
			append(div2, label1);
			append(label1, t7);
			append(div3, t8);
			append(div3, br);
			append(div3, t9);
			append(div3, button);
			append(button, t10);
			append(div6, t11);
			append(div6, div5);
			append(div5, a);
			append(a, t12);
			append(div8, t13);
			append(div8, div7);

			if (!mounted) {
				dispose = [
					listen(input0, "input", /*input0_input_handler*/ ctx[3]),
					listen(input1, "input", /*input1_input_handler*/ ctx[4]),
					listen(button, "click", /*click_handler*/ ctx[5])
				];

				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			if (dirty & /*email*/ 1 && input0.value !== /*email*/ ctx[0]) {
				set_input_value(input0, /*email*/ ctx[0]);
			}

			if (dirty & /*password*/ 2 && input1.value !== /*password*/ ctx[1]) {
				set_input_value(input1, /*password*/ ctx[1]);
			}
		},
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(div8);
			mounted = false;
			run_all(dispose);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let email = "";
	let password = "";

	function auth() {
		if (email === "") return alert("Email must be defined.");
		if (password === "") return alert("Password must be defined.");
		login(email, password);
	}

	function input0_input_handler() {
		email = this.value;
		$$invalidate(0, email);
	}

	function input1_input_handler() {
		password = this.value;
		$$invalidate(1, password);
	}

	const click_handler = () => auth();

	return [
		email,
		password,
		auth,
		input0_input_handler,
		input1_input_handler,
		click_handler
	];
}

class Login extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, {});
	}
}

export default Login;
//# sourceMappingURL=Login.svelte.js.map
