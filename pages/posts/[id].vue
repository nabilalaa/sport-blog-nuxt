<template>
	<!-- <ins
		class="adsbygoogle"
		style="display: block"
		data-ad-client="ca-pub-6052257709634296"
		data-ad-slot="4020145914"
		data-ad-format="auto"
		data-full-width-responsive="true"
	></ins> -->
	<section class="py-20 dark:bg-[#0f172a]">
		<div class="container max-w-screen-md p-4">
			<article v-for="p in post" :key="p">
				<h1 class="text-center dark:text-white">
					{{ p.title }}
				</h1>
				<p
					class="flex justify-center items-center text-center my-8 dark:text-white"
				>
					<svg
						class="w-6 h-6 ml-2 text-gray-800 dark:text-white"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
					>
						<path
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 10h16M8 14h8m-4-7V4M7 7V4m10 3V4M5 20h14c.6 0 1-.4 1-1V7c0-.6-.4-1-1-1H5a1 1 0 0 0-1 1v12c0 .6.4 1 1 1Z"
						/>
					</svg>
					{{ p.created_at.slice(0, 10) }}
				</p>

				<img lazy :src="p.image_url" :alt="title" />
				<!-- <NuxtImg :src="p.image_url"/> -->

				<!-- <CldImage
					aspectRatio="0/0"
					width="auto"
					height="auto"
					class="mx-auto object-cover"
					sizes="sm:100vw, md:500px"
					:src="
						p.image_url ? p.image_url.slice(50) : 'https://placehold.co/600x400'
					"
					:alt="p.title"
					format="webp"
				/> -->

				<div class="content mt-10 dark:text-white" v-html="p.content"></div>
				<Title>{{ p.title }}</Title>
				<Meta name="description" :content="p.title" />
				<Link
					rel="canonical"
					:href="`https://blog-0-0.netlify.app/posts/${p.id}`"
				/>
			</article>
		</div>
		<ins
			class="adsbygoogle"
			style="display: block"
			data-ad-client="ca-pub-6052257709634296"
			data-ad-slot="4020145914"
			data-ad-format="auto"
			data-full-width-responsive="true"
		></ins>
	</section>
</template>

<script setup>
const id = useRoute().params.id;
const post = ref(null);
await $fetch(`/api/articles/${id}`, {
	headers: {
		Authorization: "Nn123123",
	},
}).then((response) => {
	post.value = response;
});
</script>
