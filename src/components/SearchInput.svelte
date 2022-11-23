<script>
	export let onInputChange;
	export let onButtonClick;

	let query;
</script>

<div
	class="lg:w-1/2 lg:p-5 lg:my-5 w-full mx-auto drop-shadow rounded-xl bg-gray-600 flex justify-between items-center">
	<div class="w-full flex">
		<input
			class="uppercase block w-full p-4 m-4 lg:m-0 text-gray-900 border border-gray-300 bg-gray-50 font-mono"
			type="text"
			placeholder="Enter Search Term... PIGLT, MCI, KCMI"
			on:keyup={({ target: { value } }) => onInputChange(value)}
			bind:value={query} />
		<button
			class="btn inline-block px-6 py-2.5 bg-gray-800 text-white font-medium text-xs leading-tight uppercase shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out flex items-center"
			on:click={() => onButtonClick(query)}>
			Search
		</button>
	</div>
</div>
