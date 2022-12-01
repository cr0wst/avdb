export async function load({ url, params, fetch }: any) {
	const page = Number(url.searchParams.get('page')) || 0;
	const resultsPerPage = Number(url.searchParams.get('resultsPerPage')) || 5;

	const results = await (
		await fetch(`/api/search?query=${params.query}&page=${page}&resultsPerPage=${resultsPerPage}`)
	).json();

	return {
		query: params.query,
		results: results.data ?? [],
		total: results.total ?? 0,
		page,
		resultsPerPage
	};
}
