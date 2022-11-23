<script lang="ts">
	export let fix;
</script>

{#if fix.kind == 'AIRPORT'}
	<div class={`flex ${$$props.class}`}>
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
	</div>
{/if}
