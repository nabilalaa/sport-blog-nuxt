<template>
	<div class="input_group">
		<label>{{ label }}</label>
		<input
			class="outline-none focus:outline-accent border border-accent dark:border-0 dark:bg-[#314b88]"
			:type="type"
			:placeholder="label"
			:value="modelValue"
			:name="name"
			@input="$emit('update:modelValue', $event.target.value)"
		/>
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
input {
	width: 100%;
	height: 40px;
	padding: 5px 10px;
	border-radius: 5px;
}
</style>
