import { respond } from '@sveltejs/kit/ssr';
import root from './generated/root.svelte';
import { set_paths } from './runtime/paths.js';
import { set_prerendering } from './runtime/env.js';
import * as user_hooks from "./hooks.js";

const template = ({ head, body }) => "<!doctype html>\n<html lang=\"en\">\n<head>\n\t<meta charset=\"utf-8\">\n\t<meta name=\"viewport\" content=\"width=device-width,initial-scale=1.0\">\n\t<meta name=\"theme-color\" content=\"#333333\">\n\n\t<link rel=\"stylesheet\" href=\"/global.css\">\n\t<link rel=\"manifest\" href=\"/manifest.json\" crossorigin=\"use-credentials\">\n\t<link rel=\"icon\" type=\"image/png\" href=\"/favicon.png\">\n\n\t<!-- Import Google Icon Font -->\n\t<link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\">\n\t<!-- Import materialize.css -->\n\t<link type=\"text/css\" rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css\"  media=\"screen,projection\"/>\n\t<!-- Import masonry -->\n\t<script src=\"https://unpkg.com/masonry-layout@4/dist/masonry.pkgd.min.js\"></script>\n\n\t<!-- Core CSS file -->\n\t<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/photoswipe/4.1.3/photoswipe.css\"> \n\n\t<!-- Skin CSS file (styling of UI - buttons, caption, etc.)\n\t\t\tIn the folder of skin CSS file there are also:\n\t\t\t- .png and .svg icons sprite, \n\t\t\t- preloader.gif (for browsers that do not support CSS animations) -->\n\t<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/photoswipe/4.1.3/default-skin/default-skin.css\"> \n\n\t<!-- Core JS file -->\n\t<script src=\"https://cdnjs.cloudflare.com/ajax/libs/photoswipe/4.1.3/photoswipe.min.js\"></script> \n\n\t<!-- UI JS file -->\n\t<script src=\"https://cdnjs.cloudflare.com/ajax/libs/photoswipe/4.1.3/photoswipe-ui-default.min.js\"></script> \n\n\t<!-- Stripe -->\n\t<script src=\"https://js.stripe.com/v3/\"></script>\n\n\t" + head + "\n</head>\n<body>\n\t<div id=\"svelte\">" + body + "</div>\n\n\t<!-- JavaScript at end of body for optimized loading -->\n\t<script src=\"https://cdn.jsdelivr.net/npm/@splidejs/splide@latest/dist/js/splide.min.js\"></script>\n\t<script type=\"text/javascript\" src=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js\"></script>\n</body>\n</html>\n";

let options = null;

// allow paths to be overridden in svelte-kit preview
// and in prerendering
export function init(settings) {
	set_paths(settings.paths);
	set_prerendering(settings.prerendering || false);

	options = {
		amp: false,
		dev: false,
		entry: {
			file: "/./_app/start-74a09945.js",
			css: ["/./_app/assets/start-a8cd1609.css"],
			js: ["/./_app/start-74a09945.js","/./_app/chunks/vendor-ebfb1990.js"]
		},
		fetched: undefined,
		floc: false,
		get_component_path: id => "/./_app/" + entry_lookup[id],
		get_stack: error => String(error), // for security
		handle_error: error => {
			console.error(error.stack);
			error.stack = options.get_stack(error);
		},
		hooks: get_hooks(user_hooks),
		hydrate: true,
		initiator: undefined,
		load_component,
		manifest,
		paths: settings.paths,
		read: settings.read,
		root,
		router: true,
		ssr: true,
		target: "#svelte",
		template,
		trailing_slash: "never"
	};
}

const d = decodeURIComponent;
const empty = () => ({});

const manifest = {
	assets: [{"file":"favicon.png","size":3127,"type":"image/png"},{"file":"global.css","size":704,"type":"text/css"},{"file":"logo-192.png","size":4760,"type":"image/png"},{"file":"logo-512.png","size":13928,"type":"image/png"},{"file":"manifest.json","size":324,"type":"application/json"},{"file":"media/istrav.com/categories/storefronts.jpg","size":3173815,"type":"image/jpeg"},{"file":"media/istrav.com/categories/storefronts.json","size":353,"type":"application/json"},{"file":"media/istrav.com/data.json","size":3050,"type":"application/json"},{"file":"media/istrav.com/heic1901a.jpg","size":5473576,"type":"image/jpeg"},{"file":"media/istrav.com/products/istrav.com/IMG-0695.jpg","size":3173815,"type":"image/jpeg"},{"file":"media/istrav.com/products/istrav.com/data.json","size":526,"type":"application/json"},{"file":"media/istrav.com/products/oldneckties.com/IMG-0695.jpg","size":3173815,"type":"image/jpeg"},{"file":"media/istrav.com/products/oldneckties.com/data.json","size":531,"type":"application/json"},{"file":"media/istrav.com/products/printedbasics.com/IMG-0695.jpg","size":3173815,"type":"image/jpeg"},{"file":"media/istrav.com/products/printedbasics.com/data.json","size":533,"type":"application/json"},{"file":"media/localhost:3000/categories/generic.jpg","size":3173815,"type":"image/jpeg"},{"file":"media/localhost:3000/categories/generic.json","size":2,"type":"application/json"},{"file":"media/localhost:3000/categories/plain.jpg","size":3173815,"type":"image/jpeg"},{"file":"media/localhost:3000/categories/plain.json","size":301,"type":"application/json"},{"file":"media/localhost:3000/categories/simple.jpg","size":3173815,"type":"image/jpeg"},{"file":"media/localhost:3000/categories/simple.json","size":2,"type":"application/json"},{"file":"media/localhost:3000/coffee-cup.jpg","size":249452,"type":"image/jpeg"},{"file":"media/localhost:3000/data.json","size":3486,"type":"application/json"},{"file":"media/localhost:3000/products/first/IMG-0695.jpg","size":3173815,"type":"image/jpeg"},{"file":"media/localhost:3000/products/first/data.json","size":869,"type":"application/json"},{"file":"media/localhost:3000/products/fourth/IMG-0695.jpg","size":3173815,"type":"image/jpeg"},{"file":"media/localhost:3000/products/fourth/data.json","size":516,"type":"application/json"},{"file":"media/localhost:3000/products/second/IMG-0695.jpg","size":3173815,"type":"image/jpeg"},{"file":"media/localhost:3000/products/second/data.json","size":516,"type":"application/json"},{"file":"media/localhost:3000/products/third/IMG-0695.jpg","size":3173815,"type":"image/jpeg"},{"file":"media/localhost:3000/products/third/data.json","size":515,"type":"application/json"},{"file":"media/oldneckties.com/categories/generic.jpg","size":3173815,"type":"image/jpeg"},{"file":"media/oldneckties.com/categories/generic.json","size":2,"type":"application/json"},{"file":"media/oldneckties.com/categories/plain.jpg","size":3173815,"type":"image/jpeg"},{"file":"media/oldneckties.com/categories/plain.json","size":301,"type":"application/json"},{"file":"media/oldneckties.com/categories/simple.jpg","size":3173815,"type":"image/jpeg"},{"file":"media/oldneckties.com/categories/simple.json","size":2,"type":"application/json"},{"file":"media/oldneckties.com/data.json","size":5274,"type":"application/json"},{"file":"media/oldneckties.com/products/first/IMG-0695.jpg","size":3173815,"type":"image/jpeg"},{"file":"media/oldneckties.com/products/first/data.json","size":869,"type":"application/json"},{"file":"media/oldneckties.com/products/fourth/IMG-0695.jpg","size":3173815,"type":"image/jpeg"},{"file":"media/oldneckties.com/products/fourth/data.json","size":870,"type":"application/json"},{"file":"media/oldneckties.com/products/second/IMG-0695.jpg","size":3173815,"type":"image/jpeg"},{"file":"media/oldneckties.com/products/second/data.json","size":870,"type":"application/json"},{"file":"media/oldneckties.com/products/third/IMG-0695.jpg","size":3173815,"type":"image/jpeg"},{"file":"media/oldneckties.com/products/third/data.json","size":869,"type":"application/json"},{"file":"media/oldneckties.com/ties-in-boxes.jpg","size":1324006,"type":"image/jpeg"},{"file":"media/printedbasics.com/categories/generic.jpg","size":3173815,"type":"image/jpeg"},{"file":"media/printedbasics.com/categories/generic.json","size":2,"type":"application/json"},{"file":"media/printedbasics.com/categories/plain.jpg","size":3173815,"type":"image/jpeg"},{"file":"media/printedbasics.com/categories/plain.json","size":301,"type":"application/json"},{"file":"media/printedbasics.com/categories/simple.jpg","size":3173815,"type":"image/jpeg"},{"file":"media/printedbasics.com/categories/simple.json","size":2,"type":"application/json"},{"file":"media/printedbasics.com/clothing.jpg","size":104886,"type":"image/jpeg"},{"file":"media/printedbasics.com/data.json","size":2695,"type":"application/json"},{"file":"media/printedbasics.com/products/first/IMG-0695.jpg","size":3173815,"type":"image/jpeg"},{"file":"media/printedbasics.com/products/first/data.json","size":515,"type":"application/json"},{"file":"media/printedbasics.com/products/fourth/IMG-0695.jpg","size":3173815,"type":"image/jpeg"},{"file":"media/printedbasics.com/products/fourth/data.json","size":516,"type":"application/json"},{"file":"media/printedbasics.com/products/second/IMG-0695.jpg","size":3173815,"type":"image/jpeg"},{"file":"media/printedbasics.com/products/second/data.json","size":516,"type":"application/json"},{"file":"media/printedbasics.com/products/third/IMG-0695.jpg","size":3173815,"type":"image/jpeg"},{"file":"media/printedbasics.com/products/third/data.json","size":515,"type":"application/json"},{"file":"poweredByISTRAV.png","size":95,"type":"image/png"},{"file":"we-accept/accept1.png","size":430,"type":"image/png"},{"file":"we-accept/accept2.png","size":792,"type":"image/png"},{"file":"we-accept/accept3.png","size":594,"type":"image/png"},{"file":"we-accept/accept4.png","size":509,"type":"image/png"}],
	layout: "src/routes/__layout.svelte",
	error: ".svelte-kit/build/components/error.svelte",
	routes: [
		{
						type: 'page',
						pattern: /^\/$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/index.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/collections\/([^/]+?)\/?$/,
						params: (m) => ({ id: d(m[1])}),
						a: ["src/routes/__layout.svelte", "src/routes/collections/[id].svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/categories\/([^/]+?)\/?$/,
						params: (m) => ({ id: d(m[1])}),
						a: ["src/routes/__layout.svelte", "src/routes/categories/[id].svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/checkout\/success\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/checkout/success.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/checkout\/cancel\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/checkout/cancel.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/checkout\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/checkout.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/products\/([^/]+?)\/?$/,
						params: (m) => ({ id: d(m[1])}),
						a: ["src/routes/__layout.svelte", "src/routes/products/[id].svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/register\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/register.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/account\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/account.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/logout\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/logout.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/login\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/login.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/cart\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/cart.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					}
	]
};

// this looks redundant, but the indirection allows us to access
// named imports without triggering Rollup's missing import detection
const get_hooks = hooks => ({
	getSession: hooks.getSession || (() => ({})),
	handle: hooks.handle || (({ request, render }) => render(request))
});

const module_lookup = {
	"src/routes/__layout.svelte": () => import("../../src/routes/__layout.svelte"),".svelte-kit/build/components/error.svelte": () => import("./components/error.svelte"),"src/routes/index.svelte": () => import("../../src/routes/index.svelte"),"src/routes/collections/[id].svelte": () => import("../../src/routes/collections/[id].svelte"),"src/routes/categories/[id].svelte": () => import("../../src/routes/categories/[id].svelte"),"src/routes/checkout/success.svelte": () => import("../../src/routes/checkout/success.svelte"),"src/routes/checkout/cancel.svelte": () => import("../../src/routes/checkout/cancel.svelte"),"src/routes/checkout.svelte": () => import("../../src/routes/checkout.svelte"),"src/routes/products/[id].svelte": () => import("../../src/routes/products/[id].svelte"),"src/routes/register.svelte": () => import("../../src/routes/register.svelte"),"src/routes/account.svelte": () => import("../../src/routes/account.svelte"),"src/routes/logout.svelte": () => import("../../src/routes/logout.svelte"),"src/routes/login.svelte": () => import("../../src/routes/login.svelte"),"src/routes/cart.svelte": () => import("../../src/routes/cart.svelte")
};

const metadata_lookup = {"src/routes/__layout.svelte":{"entry":"/./_app/pages/__layout.svelte-d479031b.js","css":[],"js":["/./_app/pages/__layout.svelte-d479031b.js","/./_app/chunks/vendor-ebfb1990.js","/./_app/chunks/api-3c9fd495.js"],"styles":null},".svelte-kit/build/components/error.svelte":{"entry":"/./_app/error.svelte-e3ab324e.js","css":[],"js":["/./_app/error.svelte-e3ab324e.js","/./_app/chunks/vendor-ebfb1990.js"],"styles":null},"src/routes/index.svelte":{"entry":"/./_app/pages/index.svelte-02aa4c75.js","css":["/./_app/assets/pages/index.svelte-302ae6e1.css","/./_app/assets/BigBackFooter-a6ec8e56.css"],"js":["/./_app/pages/index.svelte-02aa4c75.js","/./_app/chunks/vendor-ebfb1990.js","/./_app/chunks/api-3c9fd495.js","/./_app/chunks/BigBackFooter-73416400.js"],"styles":null},"src/routes/collections/[id].svelte":{"entry":"/./_app/pages/collections/[id].svelte-e9c59cdb.js","css":["/./_app/assets/pages/collections/[id].svelte-d8809c88.css","/./_app/assets/BigBackFooter-a6ec8e56.css"],"js":["/./_app/pages/collections/[id].svelte-e9c59cdb.js","/./_app/chunks/vendor-ebfb1990.js","/./_app/chunks/api-3c9fd495.js","/./_app/chunks/BigBackFooter-73416400.js","/./_app/chunks/stores-aa9bd5bf.js"],"styles":null},"src/routes/categories/[id].svelte":{"entry":"/./_app/pages/categories/[id].svelte-09dab9f6.js","css":["/./_app/assets/pages/collections/[id].svelte-d8809c88.css","/./_app/assets/BigBackFooter-a6ec8e56.css"],"js":["/./_app/pages/categories/[id].svelte-09dab9f6.js","/./_app/chunks/vendor-ebfb1990.js","/./_app/chunks/api-3c9fd495.js","/./_app/chunks/BigBackFooter-73416400.js","/./_app/chunks/stores-aa9bd5bf.js"],"styles":null},"src/routes/checkout/success.svelte":{"entry":"/./_app/pages/checkout/success.svelte-de7a4d3d.js","css":["/./_app/assets/pages/checkout/success.svelte-6d16b603.css"],"js":["/./_app/pages/checkout/success.svelte-de7a4d3d.js","/./_app/chunks/vendor-ebfb1990.js","/./_app/chunks/api-3c9fd495.js"],"styles":null},"src/routes/checkout/cancel.svelte":{"entry":"/./_app/pages/checkout/cancel.svelte-77a05da4.js","css":["/./_app/assets/pages/checkout/success.svelte-6d16b603.css"],"js":["/./_app/pages/checkout/cancel.svelte-77a05da4.js","/./_app/chunks/vendor-ebfb1990.js"],"styles":null},"src/routes/checkout.svelte":{"entry":"/./_app/pages/checkout.svelte-f35bf511.js","css":["/./_app/assets/pages/checkout/success.svelte-6d16b603.css"],"js":["/./_app/pages/checkout.svelte-f35bf511.js","/./_app/chunks/vendor-ebfb1990.js","/./_app/chunks/api-3c9fd495.js"],"styles":null},"src/routes/products/[id].svelte":{"entry":"/./_app/pages/products/[id].svelte-13220f6f.js","css":["/./_app/assets/pages/products/[id].svelte-1e1ccba0.css","/./_app/assets/BigBackFooter-a6ec8e56.css"],"js":["/./_app/pages/products/[id].svelte-13220f6f.js","/./_app/chunks/vendor-ebfb1990.js","/./_app/chunks/api-3c9fd495.js","/./_app/chunks/BigBackFooter-73416400.js","/./_app/chunks/stores-aa9bd5bf.js"],"styles":null},"src/routes/register.svelte":{"entry":"/./_app/pages/register.svelte-953a4b1e.js","css":["/./_app/assets/pages/register.svelte-9ffed927.css","/./_app/assets/BigBackFooter-a6ec8e56.css"],"js":["/./_app/pages/register.svelte-953a4b1e.js","/./_app/chunks/vendor-ebfb1990.js","/./_app/chunks/api-3c9fd495.js","/./_app/chunks/BigBackFooter-73416400.js"],"styles":null},"src/routes/account.svelte":{"entry":"/./_app/pages/account.svelte-bc37771e.js","css":["/./_app/assets/pages/account.svelte-f6ba07f1.css","/./_app/assets/BigBackFooter-a6ec8e56.css"],"js":["/./_app/pages/account.svelte-bc37771e.js","/./_app/chunks/vendor-ebfb1990.js","/./_app/chunks/api-3c9fd495.js","/./_app/chunks/BigBackFooter-73416400.js"],"styles":null},"src/routes/logout.svelte":{"entry":"/./_app/pages/logout.svelte-d39a1046.js","css":[],"js":["/./_app/pages/logout.svelte-d39a1046.js","/./_app/chunks/vendor-ebfb1990.js"],"styles":null},"src/routes/login.svelte":{"entry":"/./_app/pages/login.svelte-205f556f.js","css":["/./_app/assets/pages/register.svelte-9ffed927.css","/./_app/assets/BigBackFooter-a6ec8e56.css"],"js":["/./_app/pages/login.svelte-205f556f.js","/./_app/chunks/vendor-ebfb1990.js","/./_app/chunks/api-3c9fd495.js","/./_app/chunks/BigBackFooter-73416400.js"],"styles":null},"src/routes/cart.svelte":{"entry":"/./_app/pages/cart.svelte-7e1b4050.js","css":["/./_app/assets/pages/cart.svelte-f807c940.css","/./_app/assets/BigBackFooter-a6ec8e56.css"],"js":["/./_app/pages/cart.svelte-7e1b4050.js","/./_app/chunks/vendor-ebfb1990.js","/./_app/chunks/api-3c9fd495.js","/./_app/chunks/BigBackFooter-73416400.js"],"styles":null}};

async function load_component(file) {
	return {
		module: await module_lookup[file](),
		...metadata_lookup[file]
	};
}

init({ paths: {"base":"","assets":"/."} });

export function render(request, {
	prerender
} = {}) {
	const host = request.headers["host"];
	return respond({ ...request, host }, options, { prerender });
}