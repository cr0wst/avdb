<script lang="ts">
	export let item;
</script>

{#if item.city}
	<div class="text-sm font-light w-2/3 text-right">
		{item.city}, {item.state}
		{item.country}
	</div>
{:else}
	<div class="text-sm font-light w-2/3 text-right">
		{item.state}
		{item.country}
	</div>
{/if}
