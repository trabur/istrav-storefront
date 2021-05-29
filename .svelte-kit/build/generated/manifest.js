const c = [
	() => import("../../../src/routes/__layout.svelte"),
	() => import("../components/error.svelte"),
	() => import("../../../src/routes/index.svelte"),
	() => import("../../../src/routes/collections/[id].svelte"),
	() => import("../../../src/routes/categories/[id].svelte"),
	() => import("../../../src/routes/checkout/success.svelte"),
	() => import("../../../src/routes/checkout/cancel.svelte"),
	() => import("../../../src/routes/checkout.svelte"),
	() => import("../../../src/routes/products/[id].svelte"),
	() => import("../../../src/routes/register.svelte"),
	() => import("../../../src/routes/account.svelte"),
	() => import("../../../src/routes/logout.svelte"),
	() => import("../../../src/routes/login.svelte"),
	() => import("../../../src/routes/cart.svelte")
];

const d = decodeURIComponent;

export const routes = [
	// src/routes/index.svelte
	[/^\/$/, [c[0], c[2]], [c[1]]],

	// src/routes/collections/[id].svelte
	[/^\/collections\/([^/]+?)\/?$/, [c[0], c[3]], [c[1]], (m) => ({ id: d(m[1])})],

	// src/routes/categories/[id].svelte
	[/^\/categories\/([^/]+?)\/?$/, [c[0], c[4]], [c[1]], (m) => ({ id: d(m[1])})],

	// src/routes/checkout/success.svelte
	[/^\/checkout\/success\/?$/, [c[0], c[5]], [c[1]]],

	// src/routes/checkout/cancel.svelte
	[/^\/checkout\/cancel\/?$/, [c[0], c[6]], [c[1]]],

	// src/routes/checkout.svelte
	[/^\/checkout\/?$/, [c[0], c[7]], [c[1]]],

	// src/routes/products/[id].svelte
	[/^\/products\/([^/]+?)\/?$/, [c[0], c[8]], [c[1]], (m) => ({ id: d(m[1])})],

	// src/routes/register.svelte
	[/^\/register\/?$/, [c[0], c[9]], [c[1]]],

	// src/routes/account.svelte
	[/^\/account\/?$/, [c[0], c[10]], [c[1]]],

	// src/routes/logout.svelte
	[/^\/logout\/?$/, [c[0], c[11]], [c[1]]],

	// src/routes/login.svelte
	[/^\/login\/?$/, [c[0], c[12]], [c[1]]],

	// src/routes/cart.svelte
	[/^\/cart\/?$/, [c[0], c[13]], [c[1]]]
];

export const fallback = [c[0](), c[1]()];