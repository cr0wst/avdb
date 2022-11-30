export async function load({ params, fetch }: any) {
	return {
		query: params.query,
		results: (await fetch(`/api/search?query=${params.query}`)).json() ?? []
	};
}
