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
	export let fix;
</script>

<div
	class="lg:w-2/3 w-full my-1 p-4 w-full mx-auto drop-shadow border-gray-300 bg-white flex flex-col justify-between items-center">
	<div class="flex justify-between items-center w-full">
		<div class="text-2xl font-bold lg:w-1/3 w-full">
			{#if fix.icao_identifier}
				{fix.icao_identifier}/
			{/if}
			{fix.identifier}
		</div>
		<div class="text-xl font-light italic lg:w-2/3 w-full text-right">
			{#if fix.name}
				{startCase(lowerCase(fix.name))}
			{:else}
				{fix.identifier}
			{/if}
		</div>
	</div>
	<div class="flex justify-between items-center w-full">
		<div class="text-sm font-light w-1/4">
			{fix.kind}
		</div>
		<Location {fix} />
	</div>
	<div class="w-full">
		<ChartImage class="w-full h-52" {fix} />
	</div>
	<div class="w-full pt-2">
		<Links {fix} />
	</div>
	<div class="w-full pt-2 text-xs flex">
		<div class="w-1/2" title={dayjs(fix.created_at).format()}>
			Added {dayjs(fix.created_at).fromNow()}
		</div>
		<div class="w-1/2 text-right" title={dayjs(fix.effective_date).format()}>
			Effective {dayjs(fix.effective_date).fromNow()}
		</div>
	</div>
</div>
