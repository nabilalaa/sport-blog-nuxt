<template>
	<div class="input_group">
		<label>{{ label }}</label>
		<select
			:value="modelValue"
			@change="$emit('update:modelValue', $event.target.value)"
		>
			<option
				v-for="category in categories"
				:key="category"
				:value="category.nameEnglish"
			>
				{{ category.nameArabic }}
			</option>
		</select>
	</div>
</template>

<script>
import axios from "axios";
export default {
	data() {
		return {
			categories: [],
		};
	},
	name: "FormSelect",
	props: ["modelValue", "label", "select"],
	async mounted() {
		await axios
			.get(`http://127.0.0.1:8000/category`)
			.then((response) => {
				this.categories = response.data;
			});
	},
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
select {
	width: 100%;
	height: 40px;
	padding: 5px 10px;
	border: 2px solid;
	border-radius: 5px;
	outline: none;
	cursor: pointer;
}
select:focus {
	border: 2px solid var(--secondary_text_color);
}
</style>
