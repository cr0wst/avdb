export async function load({ params, fetch }: any) {
	return {
		stats: (await fetch(`/api/stats`)).json()
	};
}
