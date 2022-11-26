<script>
	import Location from './Location.svelte';
	import Links from './Links.svelte';
	import ChartImage from './ChartImage.svelte';

	import relativeTime from 'dayjs/plugin/relativeTime';
	import customParseFormat from 'dayjs/plugin/customParseFormat';
	import utc from 'dayjs/plugin/utc';
	import dayjs from 'dayjs';
	import lodash from 'lodash';
	const { startCase, lowerCase } = lodash;
	dayjs.extend(utc);
	dayjs.extend(relativeTime);
	dayjs.extend(customParseFormat);
	export let item;
</script>

<div
	class="lg:w-2/3 w-full my-1 p-4 w-full mx-auto drop-shadow border-gray-300 bg-white flex flex-col justify-between items-center">
	<div class="flex justify-between items-center w-full">
		<div class="text-2xl font-bold lg:w-1/3 w-full">
			{#if item.icao_identifier}
				{item.icao_identifier}/
			{/if}
			{item.identifier}
		</div>
		<div class="text-xl font-light italic lg:w-2/3 w-full text-right">
			{startCase(lowerCase(item.manufacturer + ' ' + item.name))}
		</div>
	</div>
	<div class="flex justify-between items-center w-full">
		<div class="text-sm font-light w-1/4">
			{item.kind}
		</div>
		<div>{item.engine_type}</div>
	</div>
</div>
