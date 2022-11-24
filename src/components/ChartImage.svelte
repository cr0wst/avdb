<script lang="ts">
	import { afterUpdate, beforeUpdate, onDestroy, onMount } from 'svelte';

	export let fix;
	let script;

	afterUpdate(() => {
		script = document.createElement('script');
		document.getElementById('sv_' + fix.id).appendChild(script);
		script.src = `//skyvector.com/api/lchart?ll=${fix.latitude},${fix.longitude}&amp;s=1&amp;c=sv_${fix.id}&amp;i=301`;
	});
</script>

<div id={'sv_' + fix.id} class={$$props.class} />
