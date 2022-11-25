<script lang="ts">
	import SearchInput from '../components/SearchInput.svelte';
	import ResultItem from '../components/ResultItem.svelte';
	import axios from 'axios';
	import lodash from 'lodash';
	import { onMount } from 'svelte';

	const { debounce } = lodash;

	let results = [];
	let stats = {
		airport_count: 0,
		fixes_count: 0,
		navaids_count: 0
	};

	export async function search(query: string) {
		const response = await axios.get(`/api/search?query=${query}`);

		return response.data;
	}

	async function handleSearch(query) {
		if (query) {
			results = await search(query);
		} else {
			results = [];
		}
	}

	onMount(async () => {
		const response = await axios.get(`/api/stats`);

		stats = response.data;
	});
</script>

<div class="h-5/6 m-0 flex flex-col items-center mx-4">
	<div class="w-full lg:w-2/3 my-4">
		<SearchInput onInputChange={debounce(handleSearch, 500)} onButtonClick={handleSearch} />
	</div>
	{#each results as fix}
		<ResultItem {fix} />
	{:else}
		<div class="bg-gray-100 p-5 lg:w-2/3">
			<div class="border-b border-b-gray-300 py-5">
				<p class="text-xl mb-2">
					Welcome to <span class="font-thin">v</span><span class="font-light">av</span><span
						class="font-bold">DB</span
					>.
				</p>
				<p>
					This website was created to help quickly look up airports and other identifiers while
					flying on the <a class="text-orange-600" href="https://vatsim.net">VATSIM</a>
					network. The information is sourced using the
					<a
						class="text-orange-600"
						href="https://www.faa.gov/air_traffic/flight_info/aeronav/aero_data/"
						>FAA Aeronotical Data</a
					>.
				</p>
			</div>
			<div class="py-5">
				<p class="text-xl mb-2">Other Useful Websites</p>
				<p>Here are some other websites you might find useful.</p>
				<div class="flex flex-col lg:flex-row">
					<div class="w-full lg:w-1/3 py-2">
						<p class="text-xl mb-2">VATSIM</p>
						<ul class="text-orange-600">
							<li>
								<a href="https://vatsim.net" target="_blank" rel="noreferrer">Official Site</a>
							</li>
							<li><a href="https://vatusa.net" target="_blank" rel="noreferrer">VATUSA</a></li>
							<li>
								<a href="https://www.thepilotclub.org" target="_blank" rel="noreferrer"
									>The Pilot Club</a>
							</li>
						</ul>
					</div>
					<div class="w-full lg:w-1/3 py-2">
						<p class="text-xl mb-2">Aviation Tools</p>
						<ul class="text-orange-600">
							<li>
								<a href="https://skyvector.com" target="_blank" rel="noreferrer">SkyVector</a>
							</li>
							<li>
								<a href="https://flightaware.com" target="_blank" rel="noreferrer">FlightAware</a>
							</li>
							<li>
								<a href="https://metar-taf.com" target="_blank" rel="noreferrer">METAR & TAF</a>
							</li>
							<li>
								<a href="https://www.simbrief.com/home" target="_blank" rel="noreferrer"
									>SimBrief</a>
							</li>
						</ul>
					</div>
					<div class="w-full lg:w-1/3 py-2">
						<p class="text-xl mb-2">Miscellaneous</p>
						<ul class="text-orange-600">
							<li>
								<a href="https://fseconomy.net" target="_blank" rel="noreferrer">FSEconomy</a>
							</li>
							<li>
								<a href="https://fse-planner.piero-la-lune.fr/" target="_blank" rel="noreferrer"
									>FSE Planner</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	{/each}
</div>
