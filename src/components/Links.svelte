<script lang="ts">
	import { beforeUpdate } from 'svelte';

	export let fix;

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

<div class={`flex w-full ${$$props.class}`}>
	<div class="flex w-1/2">
		{#if fix.artcc}
			<div
				class="border mr-2 bg-orange-600 drop-shadow text-white rounded-xl px-2 py-1 text-sm font-bold float-left">
				<a href={vartccUrls[fix.artcc]} target="_blank" rel="noreferrer">{fix.artcc} vARTCC</a>
			</div>
		{/if}
	</div>
	<div class="flex w-1/2 justify-end">
		{#if fix.kind == 'AIRPORT'}
			{#if fix.icao_identifier}
				<div
					class="border mr-2 bg-blue-600 drop-shadow text-white rounded-xl px-2 py-1 text-sm font-bold">
					<a href={`https://metar-taf.com/${fix.icao_identifier}`} target="_blank" rel="noreferrer"
						>METAR & TAF</a>
				</div>
			{:else}
				<div
					class="border mr-2 bg-blue-600 drop-shadow text-white rounded-xl px-2 py-1 text-sm font-bold">
					<a href={`https://metar-taf.com/${fix.identifier}`} target="_blank" rel="noreferrer"
						>METAR & TAF</a>
				</div>
			{/if}
			<div
				class="border mr-2 bg-emerald-600 drop-shadow text-white rounded-xl px-2 py-1 text-sm font-bold">
				<a href={`https://skyvector.com/airport/${fix.identifier}`} target="_blank" rel="noreferrer"
					>Skyvector</a>
			</div>
			<div
				class="border bg-emerald-600 drop-shadow text-white rounded-xl px-2 py-1 text-sm font-bold">
				<a
					href={`https://flightaware.com/resources/airport/${fix.identifier}`}
					target="_blank"
					rel="noreferrer">FlightAware</a>
			</div>
		{/if}
	</div>
</div>
