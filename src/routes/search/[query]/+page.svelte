<script lang="ts">
	import { goto } from '$app/navigation';
	import SearchInput from '../../../components/SearchInput.svelte';
	import AirportResultItem from '../../../components/AirportResultItem.svelte';
	import FixResultItem from '../../../components/FixResultItem.svelte';
	import NavaidResultItem from '../../../components/NavaidResultItem.svelte';
	import AircraftResultItem from '../../../components/AircraftResultItem.svelte';

	export let data;

	function prevPage() {
		const page = data.page - 1;
		const resultsPerPage = data.resultsPerPage;
		goto(
			`/search/${encodeURIComponent(
				data.query.toUpperCase()
			)}?page=${page}&resultsPerPage=${resultsPerPage}`
		);
	}

	function nextPage() {
		const page = data.page + 1;
		const resultsPerPage = data.resultsPerPage;
		goto(
			`/search/${encodeURIComponent(
				data.query.toUpperCase()
			)}?page=${page}&resultsPerPage=${resultsPerPage}`
		);
	}
</script>

<svelte:head>
	<title>vavDB - {data.query} results - The Virtual Aviation Database</title>
</svelte:head>

<div class="h-5/6 m-0 flex flex-col items-center mx-4">
	<div class="w-full lg:w-2/3 my-4">
		<SearchInput query={data.query} />
	</div>
	{#if data.results.length === 0}
		<div class="bg-gray-100 p-5 lg:w-2/3">
			<div class="py-5">
				<p class="text-xl mb-2">Not Found</p>
				<p>
					No results for {data.query}
				</p>
			</div>
		</div>
	{:else}
		<div class="w-full mx-auto text-center text-white font-light">
			Showing {data.page * data.resultsPerPage + 1} to {Math.min(
				data.page * data.resultsPerPage + data.resultsPerPage,
				data.total
			)} of {data.total} Results
		</div>
		{#each data.results as item}
			{#if item.classification == 'airports'}
				<AirportResultItem {item} />
			{:else if item.classification == 'fixes'}
				<FixResultItem {item} />
			{:else if item.classification == 'navaids'}
				<NavaidResultItem {item} />
			{:else if item.classification == 'aircrafts'}
				<AircraftResultItem {item} />
			{/if}
		{/each}
		<div class="p-5 lg:w-2/3">
			<div class="flex w-1/2 mx-auto">
				<div class="w-1/2 mx-auto text-center mr-1">
					<button
						class="w-full hover:bg-orange-200 bg-orange-400 disabled:bg-gray-200 disabled:text-gray-400 text-white font-bold p-2 disabled:pointer-events-none enabled:cursor-pointer"
						disabled={data.page === 0}
						on:click={prevPage}>Previous</button>
				</div>
				<div class="w-1/2 mx-auto text-center ml-1">
					<button
						class="w-full hover:bg-orange-200 bg-orange-400 disabled:bg-gray-200 disabled:text-gray-400 text-white font-bold p-2 disabled:pointer-events-none enabled:cursor-pointer"
						disabled={data.page + 1 >= data.total / data.resultsPerPage}
						on:click={nextPage}>Next</button>
				</div>
			</div>
		</div>
	{/if}
</div>
