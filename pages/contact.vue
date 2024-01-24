<template>
	<section class="dark:bg-[#0f172a]">
		<div class="container">
			<form
				action=""
				class="flex flex-col max-w-[500px] justify-center items-center m-auto py-28 dark:text-white"
			>
				<Forms_FormInput label="الاسم" class="" />
				<Forms_FormInput label="الايميل" type="email" />
				<Forms_FormTextarea label="الرسالة" />

				<Forms_FormButton
					text="ارسال"
					TextColor="text-white"
					BackgroundColor="bg-accent"
				/>
			</form>
		</div>
	</section>
</template>

<script setup></script>
