<script>
	import Fa from 'svelte-fa/src/fa.svelte';
	import { faSearch } from '@fortawesome/free-solid-svg-icons';
	import { goto } from '$app/navigation';

	export let query;

	function handleSearch(query) {
		if (query) {
			goto(`/search/${encodeURIComponent(query.toUpperCase())}`);
		} else {
			goto('/');
		}
	}
</script>

<div class="w-full flex">
	<form class="w-full flex" on:submit|preventDefault={() => handleSearch(query)}>
		<input
			autofocus
			class="uppercase block w-full p-4 lg:m-0 text-gray-900 border border-gray-300 bg-gray-50 font-mono"
			type="text"
			placeholder="Enter Search Term... KCVG CVG JAFAR"
			bind:value={query} />
		<button
			type="submit"
			class="btn inline-block px-6 py-2.5 bg-gray-800 text-white font-medium text-xs leading-tight uppercase shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out flex items-center"
			on:click|preventDefault={() => handleSearch(query)}>
			<Fa class="text-lg" icon={faSearch} />
		</button>
	</form>
</div>
