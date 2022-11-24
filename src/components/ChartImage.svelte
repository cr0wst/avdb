<script lang="ts">
	import { afterUpdate } from 'svelte';

	export let fix;
	let script;

	// 301 = VFR, 302 = World Low, 304 = World High
	const chartMap = {
		AIRPORT: 301,
		WP: 304,
		RP: 302,
		MW: 301,
		MR: 301,
		CN: 301,
		RADAR: 301,
		NRS: 304,
		VFR: 301,
		NDB: 301,
		VORTAC: 302,
		VOT: 302,
		'VOR/DME': 302,
		'NDB/DME': 302,
		VOR: 302,
		TACAN: 302,
		DME: 302,
		'FAN MARKER': 301,
		'MARINE NDB': 301
	};

	afterUpdate(() => {
		script = document.createElement('script');
		document.getElementById('sv_' + fix.id).appendChild(script);
		script.src = `//skyvector.com/api/lchart?ll=${fix.latitude},${fix.longitude}&amp;s=1&amp;c=sv_${
			fix.id
		}&amp;i=${chartMap[fix.kind] || 301}`;
	});
</script>

<div id={'sv_' + fix.id} class={$$props.class} />
