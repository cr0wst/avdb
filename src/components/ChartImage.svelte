<script lang="ts">
	import { beforeUpdate } from 'svelte';

	export let fix;

	beforeUpdate(() => {
		// Dynamically load skyvector script since they don't expose it as an image
		const script = document.createElement('script');
		script.src = `//skyvector.com/api/lchart?ll=${fix.latitude},${fix.longitude}&amp;s=1&amp;c=sv_${fix.id}&amp;i=301`;
		document.body.appendChild(script);
	});
</script>

<div id={'sv_' + fix.id} class={$$props.class}>
	Make your <a href="https://skyvector.com/">Flight Plan</a> at SkyVector.com
</div>
