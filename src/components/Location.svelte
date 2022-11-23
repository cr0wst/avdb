<script lang="ts">
	export let fix;
</script>

{#if fix.city}
	<div class="text-sm font-light w-2/3 text-right">
		{fix.city}, {fix.state}
		{fix.country}
	</div>
{:else}
	<div class="text-sm font-light w-2/3 text-right">
		{fix.state}
		{fix.country}
	</div>
{/if}
