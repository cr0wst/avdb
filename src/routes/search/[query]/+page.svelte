<script lang="ts">
	import SearchInput from '../../../components/SearchInput.svelte';
	import AirportResultItem from '../../../components/AirportResultItem.svelte';
	import FixResultItem from '../../../components/FixResultItem.svelte';
	import NavaidResultItem from '../../../components/NavaidResultItem.svelte';
	import AircraftResultItem from '../../../components/AircraftResultItem.svelte';

	export let data;
</script>

<div class="h-5/6 m-0 flex flex-col items-center mx-4">
	<div class="w-full lg:w-2/3 my-4">
		<SearchInput query={data.query} />
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
	{:else}
		<div class="bg-gray-100 p-5 lg:w-2/3">
			<div class="py-5">
				<p class="text-xl mb-2">Not Found</p>
				<p>
					No results for {data.query}
				</p>
			</div>
		</div>
	{/each}
</div>
