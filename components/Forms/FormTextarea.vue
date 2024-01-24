<template>
	<div class="input_group">
		<label>{{ label }}</label>
		<textarea
			class="outline-none focus:outline-accent border border-accent dark:border-0 dark:bg-[#314b88]"
			:placeholder="label"
			:value="modelValue"
			:name="name"
			@input="$emit('update:modelValue', $event.target.value)"
		></textarea>
		<!-- <input
			:type="type"
			:placeholder="label"
			:value="modelValue"
			:name="name"
		/> -->
	</div>
</template>

<script>
export default {
	name: "FormInput",
	props: ["label", "type", "modelValue", "name"],
};
</script>

<style scoped>
.input_group {
	margin-bottom: 40px;
	width: 100%;
}
label {
	display: block;
	margin-bottom: 10px;
	font-size: 18px;
}
textarea {
	width: 100%;
	height: 200px;
	resize: vertical;
	padding: 5px 10px;
	border-radius: 5px;
}
</style>
