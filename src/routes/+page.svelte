<script lang="ts">
	import axios from 'axios';

	let fixes = [];
	let timer;
	let query;
	let input;

	const debounce = () => {
		clearTimeout(timer);
		timer = setTimeout(() => {
			query = input;
			search();
		}, 250);
	};

	async function search() {
		const response = await axios.get(`/api?query=${query}`);
		fixes = response.data;
	}
</script>

<div class="min-h-screen flex flex-col">
	<!-- Search Section -->
	<div class="h-5/6 m-0 flex flex-col items-center mx-4">
		<div class="font-thin text-white text-4xl w-fit m-auto">avDB</div>
		<div class="font-thin text-white text-sm w-fit m-auto">An unofficial aviation database.</div>
		<div
			class="lg:w-1/2 lg:p-5 lg:my-5 w-full mx-auto drop-shadow rounded-xl bg-gray-600 flex justify-between items-center"
		>
			<div class="w-full flex">
				<input
					class="uppercase block w-full p-4 m-4 lg:m-0 text-gray-900 border border-gray-300 bg-gray-50 font-mono"
					type="text"
					placeholder="Enter Search Term... PIGLT, MCI, KCMI"
					on:keyup={({ target: { value } }) => debounce()}
					bind:value={input}
				/>
				<button
					class="btn inline-block px-6 py-2.5 bg-gray-800 text-white font-medium text-xs leading-tight uppercase shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out flex items-center"
					on:click={search}>Search</button
				>
			</div>
		</div>
		<!-- Info Section -->
		{#each fixes as fix}
			<div
				class="lg:w-1/2 w-full my-1 p-4 w-full mx-auto drop-shadow border-gray-300 bg-white flex flex-col justify-between items-center"
			>
				<div class="flex justify-between items-center w-full">
					<div class="text-2xl font-bold w-1/3">
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
					<div class="text-sm font-light w-1/3">
						{fix.kind}
					</div>
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
				</div>
			</div>
		{/each}
	</div>
	<div
		class="h-1/6 p-5 bg-gray-900 align-text-bottom text-gray-500 text-sm font-thin text-center mt-auto"
	>
		This database is for <span class="strong">entertainment purposes only</span>. There is no
		guarantee provided for the accuracy of the information. Users assume their own risk.<br /><br />

		Created by <a href="https://github.com/cr0wst" class="strong">Steve Crow (@cr0wst)</a>
	</div>
</div>
