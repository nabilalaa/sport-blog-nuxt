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
	modules: ["@nuxtjs/supabase", "@nuxtjs/tailwindcss"],
	supabase: {
		redirect: false,
	},
});
