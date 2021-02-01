import * as renderer from '@sveltejs/kit/dist/renderer';
import root from './_app/assets/generated/root.svelte.js';
import { set_paths } from './_app/assets/runtime/internal/singletons.js';
import * as setup from './_app/setup/index.js';

const template = ({ head, body }) => "<!DOCTYPE html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<link rel=\"icon\" href=\"/favicon.ico\" />\n\n\t\t<!-- Import Google Icon Font -->\n\t\t<link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\">\n\t\t<!-- Import materialize.css -->\n\t\t<link type=\"text/css\" rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css\"  media=\"screen,projection\"/>\n\t\t<!-- Import masonry -->\n\t\t<script src=\"https://unpkg.com/masonry-layout@4/dist/masonry.pkgd.min.js\"></script>\n\n\t\t<!-- Let browser know website is optimized for mobile -->\n\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"/>\n\n\t\t<!-- svelte -->\n\t\t" + head + "\n\t</head>\n\t<body>\n\t\t<div id=\"svelte\">" + body + "</div>\n\n\t\t<!-- JavaScript at end of body for optimized loading -->\n\t\t<script src=\"https://cdn.jsdelivr.net/npm/@splidejs/splide@latest/dist/js/splide.min.js\"></script>\n\t\t<script type=\"text/javascript\" src=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js\"></script>\n\t</body>\n</html>\n";

const entry = "entry-bbbfa211.js";

set_paths({"base":"","assets":"/."});

// allow paths to be overridden in svelte-kit start
export function init({ paths }) {
	set_paths(paths);
}

init({ paths: {"base":"","assets":"/."} });

const d = decodeURIComponent;
const empty = () => ({});

const components = [
	() => import("./_app/routes/index.svelte.js"),
	() => import("./_app/routes/category/[slug]/[id].svelte.js"),
	() => import("./_app/routes/register.svelte.js"),
	() => import("./_app/routes/account.svelte.js"),
	() => import("./_app/routes/product/[slug]/[id].svelte.js"),
	() => import("./_app/routes/logout.svelte.js"),
	() => import("./_app/routes/login.svelte.js")
];



const manifest = {
	assets: [{"file":"clothing.jpg","size":104886,"type":"image/jpeg"},{"file":"coffee-cup.jpg","size":249452,"type":"image/jpeg"},{"file":"favicon.ico","size":1150,"type":"image/vnd.microsoft.icon"},{"file":"localhost.htm","size":10049,"type":"text/html"},{"file":"localhost_files/Featured.svelte.css","size":100,"type":"text/css"},{"file":"localhost_files/FrontPage.svelte.css","size":493,"type":"text/css"},{"file":"localhost_files/Masonry.svelte.css","size":340,"type":"text/css"},{"file":"localhost_files/NavigationLinks.svelte.css","size":170,"type":"text/css"},{"file":"localhost_files/clothing.jpg","size":104886,"type":"image/jpeg"},{"file":"localhost_files/hmr-client.js","size":6972,"type":"application/javascript"},{"file":"localhost_files/hmr-error-overlay.js","size":28298,"type":"application/javascript"},{"file":"localhost_files/icon","size":574,"type":null},{"file":"localhost_files/index.svelte.css","size":186,"type":"text/css"},{"file":"localhost_files/materialize.min.css","size":141841,"type":"text/css"},{"file":"localhost_files/materialize.min.js","size":181109,"type":"application/javascript"},{"file":"localhost_files/splide.min.css","size":4140,"type":"text/css"},{"file":"localhost_files/splide.min.js","size":29040,"type":"application/javascript"},{"file":"media/istrav.com/IMG-0695.jpg","size":3173815,"type":"image/jpeg"},{"file":"media/istrav.com/data.json","size":1580,"type":"application/json"},{"file":"media/localhost:3000/IMG-0695.jpg","size":3173815,"type":"image/jpeg"},{"file":"media/localhost:3000/data.json","size":1578,"type":"application/json"},{"file":"media/oldneckties.com/IMG-0695.jpg","size":3173815,"type":"image/jpeg"},{"file":"media/oldneckties.com/data.json","size":1524,"type":"application/json"},{"file":"media/printedbasics.com/IMG-0695.jpg","size":3173815,"type":"image/jpeg"},{"file":"media/printedbasics.com/data.json","size":1526,"type":"application/json"},{"file":"robots.txt","size":67,"type":"text/plain"}],
	layout: () => import("./_app/assets/components/layout.svelte.js"),
	error: () => import("./_app/assets/components/error.svelte.js"),
	pages: [
		{
					pattern: /^\/$/,
					params: empty,
					parts: [components[0]],
					css: ["/_app/start-1646ff03.css", "/_app/Main.svelte-eefec21e.css", "/_app/index.svelte-42028265.css"],
					js: ["/_app/index.svelte-447da5b3.js", "/_app/start-0ccfa33c.js", "/_app/inject_styles-0e3d93cc.js", "/_app/Main.svelte-b1c9ca11.js"]
				},
		{
					pattern: /^\/category\/([^/]+?)\/([^/]+?)\/?$/,
					params: (m) => ({ slug: d(m[1]), id: d(m[2])}),
					parts: [components[1]],
					css: ["/_app/start-1646ff03.css", "/_app/Main.svelte-eefec21e.css"],
					js: ["/_app/[id].svelte-26e29f54.js", "/_app/start-0ccfa33c.js", "/_app/inject_styles-0e3d93cc.js", "/_app/Main.svelte-b1c9ca11.js"]
				},
		{
					pattern: /^\/register\/?$/,
					params: empty,
					parts: [components[2]],
					css: ["/_app/start-1646ff03.css", "/_app/Main.svelte-eefec21e.css", "/_app/register.svelte-687cd962.css"],
					js: ["/_app/register.svelte-650bc292.js", "/_app/start-0ccfa33c.js", "/_app/inject_styles-0e3d93cc.js", "/_app/Main.svelte-b1c9ca11.js"]
				},
		{
					pattern: /^\/account\/?$/,
					params: empty,
					parts: [components[3]],
					css: ["/_app/start-1646ff03.css", "/_app/Main.svelte-eefec21e.css", "/_app/account.svelte-d20878a8.css"],
					js: ["/_app/account.svelte-a785759e.js", "/_app/start-0ccfa33c.js", "/_app/inject_styles-0e3d93cc.js", "/_app/Main.svelte-b1c9ca11.js"]
				},
		{
					pattern: /^\/product\/([^/]+?)\/([^/]+?)\/?$/,
					params: (m) => ({ slug: d(m[1]), id: d(m[2])}),
					parts: [components[4]],
					css: ["/_app/start-1646ff03.css", "/_app/Main.svelte-eefec21e.css"],
					js: ["/_app/[id].svelte-ad342173.js", "/_app/start-0ccfa33c.js", "/_app/inject_styles-0e3d93cc.js", "/_app/Main.svelte-b1c9ca11.js"]
				},
		{
					pattern: /^\/logout\/?$/,
					params: empty,
					parts: [components[5]],
					css: ["/_app/start-1646ff03.css"],
					js: ["/_app/logout.svelte-26c8ae26.js", "/_app/start-0ccfa33c.js", "/_app/inject_styles-0e3d93cc.js"]
				},
		{
					pattern: /^\/login\/?$/,
					params: empty,
					parts: [components[6]],
					css: ["/_app/start-1646ff03.css", "/_app/Main.svelte-eefec21e.css", "/_app/login.svelte-687cd962.css"],
					js: ["/_app/login.svelte-caea0923.js", "/_app/start-0ccfa33c.js", "/_app/inject_styles-0e3d93cc.js", "/_app/Main.svelte-b1c9ca11.js"]
				}
	],
	endpoints: [
		
	]
};

export function render(request, {
	paths = {"base":"","assets":"/."},
	local = false,
	only_prerender = false,
	get_static_file
} = {}) {
	return renderer.render(request, {
		paths,
		local,
		template,
		manifest,
		target: "#svelte",
		entry,
		root,
		setup,
		dev: false,
		amp: false,
		only_prerender,
		app_dir: "_app",
		host: null,
		host_header: null,
		get_stack: error => error.stack,
		get_static_file,
		get_amp_css: dep => css_lookup[dep]
	});
}