import { serverSupabaseClient } from "#supabase/server";

export default defineEventHandler(async (event) => {
	const client = serverSupabaseClient(event);
	const id = event.context.params.id;
	// console.log(event.context.params.id );
	if (
		event.node.req.rawHeaders.find((obj) => {
			return obj == "Nn123123";
		})
	) {
		let { data: blogs, error } = await (await client)
			.from("blogs")
			.select("*")
			.eq("id", id);

		return blogs;
	}
});
