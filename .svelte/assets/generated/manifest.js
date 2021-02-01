import * as layout from "/_app/assets/components/layout.svelte.js";

const components = [
	() => import("/_app/routes/index.svelte.js"),
	() => import("/_app/routes/category/[slug]/[id].svelte.js"),
	() => import("/_app/routes/register.svelte.js"),
	() => import("/_app/routes/account.svelte.js"),
	() => import("/_app/routes/product/[slug]/[id].svelte.js"),
	() => import("/_app/routes/logout.svelte.js"),
	() => import("/_app/routes/login.svelte.js")
];

const d = decodeURIComponent;
const empty = () => ({});

export const pages = [
	{
		// index.svelte
		pattern: /^\/$/,
		params: empty,
		parts: [components[0]]
	},

	{
		// category/[slug]/[id].svelte
		pattern: /^\/category\/([^/]+?)\/([^/]+?)\/?$/,
		params: (m) => ({ slug: d(m[1]), id: d(m[2])}),
		parts: [components[1]]
	},

	{
		// register.svelte
		pattern: /^\/register\/?$/,
		params: empty,
		parts: [components[2]]
	},

	{
		// account.svelte
		pattern: /^\/account\/?$/,
		params: empty,
		parts: [components[3]]
	},

	{
		// product/[slug]/[id].svelte
		pattern: /^\/product\/([^/]+?)\/([^/]+?)\/?$/,
		params: (m) => ({ slug: d(m[1]), id: d(m[2])}),
		parts: [components[4]]
	},

	{
		// logout.svelte
		pattern: /^\/logout\/?$/,
		params: empty,
		parts: [components[5]]
	},

	{
		// login.svelte
		pattern: /^\/login\/?$/,
		params: empty,
		parts: [components[6]]
	}
];

export const ignore = [
	
];

export { layout };