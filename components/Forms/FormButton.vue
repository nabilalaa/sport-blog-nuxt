<template>
	<button
		:class="`h-[40px] ${TextColor} ${BackgroundColor} rounded-lg  p-4 text-center flex items-center justify-center`"
	>
		{{ text }}
	</button>
</template>

<script scoped>
export default {
	name: "FormButon",
	props: ["text", "BackgroundColor", "TextColor"]
};
</script>
