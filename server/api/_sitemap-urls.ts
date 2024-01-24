export default defineEventHandler(async (event) => {
	const posts = await $fetch("/api/articles", {
		headers: {
			Authorization: "Nn123123",
		},
	});
	return posts.blogs.map((p) => {
		return {
			loc: `https://blog-0-0.netlify.app/posts/${p.id}`,
			lastmod: p.created_at,
		};
	});
});
