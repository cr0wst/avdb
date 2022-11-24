<script lang="ts">
	import SearchInput from '../components/SearchInput.svelte';
	import ResultItem from '../components/ResultItem.svelte';
	import axios from 'axios';
	import lodash from 'lodash';
	import Footer from '../components/Footer.svelte';
	const { debounce } = lodash;

	let results = [];

	export async function search(query: string) {
		const response = await axios.get(`/api?query=${query}`);

		return response.data;
	}

	async function handleSearch(query) {
		if (query) {
			results = await search(query);
		} else {
			results = [];
		}
	}
</script>

<div class="min-h-screen flex flex-col">
	<div class="h-5/6 m-0 flex flex-col items-center mx-4">
		<div class="font-thin text-white text-4xl w-fit m-auto">avDB</div>
		<div class="font-thin text-white text-sm w-fit m-auto">
			An unofficial aviation database for <a href="https://www.vatusa.net/">VATUSA.</a>
		</div>
		<SearchInput onInputChange={debounce(handleSearch, 500)} onButtonClick={handleSearch} />
		{#each results as fix}
			<ResultItem {fix} />
		{/each}
	</div>
	<Footer />
</div>
