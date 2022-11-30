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
