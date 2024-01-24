<template>
	<footer
		class="flex sm:justify-between sm:flex-row flex-col justify-center bg-accent p-6 text-white items-center flex-wrap"
	>
		<div class="logo">
			<div
				class="logo font-logo font-bold tracking-wider text-xl space-x-2 uppercase text-white"
			>
				مدونة
			</div>
		</div>
		<ul
			class="links font-bold my-12 sm:m-0 flex flex-col sm:items-start items-center"
		>
			<li>
				<NuxtLink to="/">الصفحة الرئيسية</NuxtLink>
			</li>
			<li class="my-4">
				<NuxtLink to="/contact"> اتصل بنا</NuxtLink>
			</li>
			<li><NuxtLink to="/about"> عنا</NuxtLink></li>
		</ul>
		<ul class="social">
			<li>
				<a
					href="https://t.me/+GkLJbiVX_kVkODc0"
					target="_blank"
					rel="noopener noreferrer"
					class="font-bold capitalize font-mono"
				>
					telegram
				</a>
			</li>
		</ul>
	</footer>
</template>

<script setup></script>
