<script lang="ts">
	import SearchInput from '../components/SearchInput.svelte';
	import ResultItem from '../components/ResultItem.svelte';
	import axios from 'axios';
	import lodash from 'lodash';
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
	<div
		class="p-5 bg-gray-900 align-text-bottom text-gray-500 text-sm font-thin text-center mt-auto">
		This database is for <span class="strong">entertainment purposes only</span>. There is no
		guarantee provided for the accuracy of the information. Users assume their own risk.<br /><br />

		Created by <a href="https://github.com/cr0wst" class="strong">Steve Crow (@cr0wst)</a>
	</div>
</div>
