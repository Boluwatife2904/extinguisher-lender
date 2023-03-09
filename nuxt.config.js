export default {
	// ssr: false,
	// target: "static",
	// generate: {
	// 	dir: "dist",
	// },
	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: "FireExt",
		htmlAttrs: {
			lang: "en",
		},
		meta: [{ charset: "utf-8" }, { name: "viewport", content: "width=device-width, initial-scale=1" }, { name: "theme-color", content: "#e7512b" }, { hid: "description", name: "description", content: "Your Go To Marketplace for fire extinguishers whenver you have a fire outbreak." }],
		link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: ["~/assets/bootstrap.min.css"],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [
		{
			src: "~/plugins/vue-calendar",
			mode: "client",
		},
	],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: ["@nuxtjs/pwa"],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [],

	// Axios module configuration: https://go.nuxtjs.dev/config-axios
	axios: {},

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {},

	pwa: {
		meta: {
			name: "Extinguisher App",
			author: "Bolwuatife2904",
			description: "A web app for lending fire extinguishers",
			theme_color: "#e7512b",
		},
		manifest: {
			name: "Extinguisher Lender",
			short_name: "Extinguisher Lender",
			lang: "en",
			description: "A web app for lending fire extinguishers",
			start_url: ".",
		},
	},
};
