// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: false },
	css: ["~/assets/main.css"],

	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},
	ssr: true,
	modules: [
		"@nuxtjs/supabase",
		"@nuxtjs/tailwindcss",
		"@nuxtjs/seo",
		"@nuxtjs/cloudinary",
	],
	supabase: {
		redirect: false,
	},
	cloudinary: {
		cloudName: "dnru0whph",
	},
	site: {
		url: "https://sport-blog-ahemd.netlify.app",
		name: "sport blog",
		description: "",
		defaultLocale: "ar",
	},
});
