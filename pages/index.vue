<template>
	<section class="py-20 dark:bg-[#0f172a]">
		<div class="container">
			<div class="grid xl:grid-cols-2 lg:gap-y-16 gap-10">
				<post-image
					v-for="post in posts.blogs.slice(0, 1)"
					:key="post"
					:to="`posts/${post.id}`"
					:image="post.image_url"
					:title="post.title"
					:date="post.created_at.slice(0, 10)"
				></post-image>
				<div class="grid content-between gap-10">
					<post-grids-list
						v-for="post in posts.blogs.slice(1, 4)"
						:key="post"
						:to="`posts/${post.id}`"
						:image="post.image_url"
						:title="post.title"
						:date="post.created_at.slice(0, 10)"
					></post-grids-list>
				</div>
			</div>
		</div>
	</section>
	<!-- <section class="py-20 dark:bg-[#0f172a]">
		<div class="container">
			<div class="grid lg:grid-cols-2 lg:gap-y-16 gap-10">
				<post-image-overlay
					class="lg:min-h-[500px] min-h-[400px]"
					v-for="post in posts.blogs.slice(4, 5)"
					:key="post"
					:to="`posts/${post.id}`"
					:image="post.image_url"
					:title="post.title"
					:date="post.created_at.slice(0, 10)"
				></post-image-overlay>

				<div class="grid content-center grid-rows-2 lg:gap-y-16 gap-10">
					<post-image-overlay
						class="lg:min-h-[250px] min-h-[400px]"
						v-for="post in posts.blogs.slice(5, 7)"
						:key="post"
						:to="`posts/${post.id}`"
						:image="post.image_url"
						:title="post.title"
						:date="post.created_at.slice(0, 10)"
					></post-image-overlay>
				</div>
			</div>
		</div>
	</section> -->
	<section class="py-20 dark:bg-[#0f172a]">
		<div class="container">
			<div class="grid md:grid-cols-2 xl:grid-cols-3 gap-10">
				<post-image
					class="border p-4 border-gray-100 dark:border-gray-700"
					v-for="post in posts.blogs.slice(4)"
					:key="post"
					:to="`posts/${post.id}`"
					:image="post.image_url"
					:title="post.title"
					:date="post.created_at.slice(0, 10)"
				></post-image>
			</div>
		</div>
	</section>
</template>

<script setup>
const posts = await $fetch("/api/articles", {
	headers: {
		Authorization: "Nn123123",
	},
});

const morebtn = ref(true);
const pag = ref(7);

const more = () => {
	if (pag.value > posts.blogs.length) {
		morebtn.value = false;
	} else {
		pag.value += 8;
	}
};
</script>

<style></style>
