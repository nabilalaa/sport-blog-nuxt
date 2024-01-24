<template>
	<NuxtLink
		class="group relative block rounded-xl dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
		:to="to"
	>
		<div
			class="flex-shrink-0 h-full relative rounded-xl w-full overflow-hidden before:absolute before:inset-x-0 before:w-full before:h-full before:bg-gradient-to-t before:from-gray-900/[.7] before:z-[1]"
		>
			<!-- <CldImage
				width="800"
				height="600"
				:src="image.slice(50)"
				class="w-full h-full object-cover absolute rounded-3xl"
				:alt="title"
			/> -->
			<img
				:src="image"
				class="w-full h-full absolute rounded-3xl top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
				:alt="title"
			/>
		</div>

		<div class="absolute bottom-0 inset-x-0 z-10">
			<div class="flex flex-col h-full p-4 sm:p-6">
				<h3
					class="text-lg sm:text-3xl font-semibold text-white group-hover:text-white/[.8]"
				>
					{{ title }}
				</h3>
				<p class="mt-2 text-white/[.8]">
					{{ date }}
				</p>
			</div>
		</div>
	</NuxtLink>
</template>

<script setup>
const props = defineProps({
	image: String,
	to: String,
	title: String,
	date: String,
});
</script>

<style></style>
