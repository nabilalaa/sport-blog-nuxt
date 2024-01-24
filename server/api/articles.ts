import { serverSupabaseClient } from "#supabase/server";

export default defineEventHandler(async (event) => {
	if (
		event.node.req.rawHeaders.find((obj) => {
			return obj == "Nn123123";
		})
	) {
		const client = serverSupabaseClient(event);

		let { data: blogs } = await (await client)
			.from("blogs")
			.select("*")
			.order("updated_at", { ascending: false });

		return {
			blogs,
		};
	}
});
