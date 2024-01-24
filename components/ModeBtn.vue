<template>
	<div
		@click="darkmode"
		class="p-2 flex justify-center items-center opacity-80 font-bold hover:opacity-100 transition-opacity cursor-pointer"
	>
		<svg
			class="h-6 w-6 text-gray-800 dark:text-white"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8V16Z"
				fill="currentColor"
			/>
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM12 4V8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16V20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4Z"
				fill="currentColor"
			/>
		</svg>
	</div>
</template>

<script setup>
function darkmode() {
	document.body.classList.toggle("dark");

	localStorage.setItem("mode", document.body.className);
}
onMounted(() => {
	if (!localStorage.getItem("mode")) {
		localStorage.setItem("mode", "");
	}
	if (localStorage.getItem("mode") !== "") {
		document.body.classList.add(localStorage.getItem("mode"));
	}
});
</script>
