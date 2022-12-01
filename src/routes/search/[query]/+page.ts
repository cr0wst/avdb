export async function load({ params, fetch }: any) {
	const results = await (await fetch(`/api/search?query=${params.query}`)).json();

	return {
		query: params.query,
		results: results.data ?? [],
		total: results.total ?? 0
	};
}
