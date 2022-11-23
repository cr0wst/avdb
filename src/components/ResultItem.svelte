<script>
	import Location from './Location.svelte';
	import Links from './Links.svelte';

	export let fix;
</script>

<div
	class="lg:w-1/2 w-full my-1 p-4 w-full mx-auto drop-shadow border-gray-300 bg-white flex flex-col justify-between items-center">
	<div class="flex justify-between items-center w-full">
		<div class="text-2xl font-bold w-1/3">
			{#if fix.icao_identifier}
				{fix.icao_identifier}/
			{/if}
			{fix.identifier}
		</div>
		<div class="text-xl font-light italic w-2/3 text-right">
			{#if fix.name}
				{fix.name}
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
		<Links {fix} />
	</div>
</div>
