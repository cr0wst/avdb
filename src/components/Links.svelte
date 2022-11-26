<script lang="ts">
	export let item;

	const vartccUrls = {
		ZAB: 'https://zabartcc.org/',
		ZAN: 'https://pacificcontrol.net/',
		ZDV: 'https://denartcc.org/',
		ZLA: 'https://laartcc.org/',
		ZOA: 'https://oakartcc.org/',
		ZLC: 'https://zlcartcc.com/',
		ZSE: 'https://zseartcc.org/',
		ZAU: 'https://www.chicagoartcc.org/',
		ZFW: 'https://www.zfwartcc.net/',
		ZHU: 'https://www.zhuartcc.org/',
		ZID: 'https://zidartcc.org/',
		ZKC: 'https://kcartcc.com/',
		ZME: 'https://vzme.net/',
		ZMP: 'https://www.minniecenter.org/',
		ZTL: 'https://www.ztlartcc.org/',
		ZBW: 'https://forum.bvartcc.com/home',
		ZOB: 'https://clevelandcenter.org/',
		ZJX: 'https://zjxartcc.org/',
		ZMA: 'https://www.zmaartcc.net/',
		ZNY: 'https://nyartcc.org/',
		ZDC: 'https://www.vzdc.org/'
	};
</script>

<div class={`flex lg:flex-row flex-col w-full ${$$props.class}`}>
	{#if item.artcc}
		<div
			class="w-full lg:w-auto border mr-2 bg-orange-600 drop-shadow text-white rounded-xl px-2 py-1 text-sm font-bold float-left">
			<a href={vartccUrls[item.artcc]} target="_blank" rel="noreferrer">{item.artcc} vARTCC</a>
		</div>
	{/if}
	{#if item.kind == 'AIRPORT'}
		{#if item.icao_identifier}
			<div
				class="w-full lg:w-auto border mr-2 bg-blue-600 drop-shadow text-white rounded-xl px-2 py-1 text-sm font-bold">
				<a href={`https://metar-taf.com/${item.icao_identifier}`} target="_blank" rel="noreferrer"
					>METAR & TAF</a>
			</div>
		{:else}
			<div
				class="w-full lg:w-auto border mr-2 bg-blue-600 drop-shadow text-white rounded-xl px-2 py-1 text-sm font-bold">
				<a href={`https://metar-taf.com/${item.identifier}`} target="_blank" rel="noreferrer"
					>METAR & TAF</a>
			</div>
		{/if}
		<div
			class=" w-full lg:w-auto border mr-2 bg-emerald-600 drop-shadow text-white rounded-xl px-2 py-1 text-sm font-bold">
			<a href={`https://skyvector.com/airport/${item.identifier}`} target="_blank" rel="noreferrer"
				>Skyvector</a>
		</div>
		<div
			class="w-full lg:w-auto border bg-emerald-600 drop-shadow text-white rounded-xl px-2 py-1 text-sm font-bold">
			<a
				href={`https://flightaware.com/resources/airport/${item.identifier}`}
				target="_blank"
				rel="noreferrer">FlightAware</a>
		</div>
	{/if}
</div>
