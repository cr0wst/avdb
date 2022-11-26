<script lang="ts">
	import { afterUpdate } from 'svelte';

	export let item;
	let script;

	// 301 = VFR, 302 = World Low, 304 = World High
	const chartMap = {
		AIRPORT: 301,
		WP: 304,
		RP: 304,
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
		document.getElementById('sv_' + item.id).appendChild(script);
		script.src = `//skyvector.com/api/lchart?ll=${item.latitude},${
			item.longitude
		}&amp;s=1&amp;c=sv_${item.id}&amp;i=${chartMap[item.kind] || 301}`;
	});
</script>

<div id={'sv_' + item.id} class={$$props.class} />
