<script lang="ts">
	import axios from 'axios';

	let fixes = [];
	let timer;

	const debounce = (v) => {
		clearTimeout(timer);
		timer = setTimeout(() => {
			search(v);
		}, 750);
	};

	async function search(query) {
		const response = await axios.get(`/api?query=${query}`);
		fixes = response.data;
	}
</script>

<div class="min-h-screen flex flex-col">
	<!-- Search Section -->
	<div class="h-5/6 m-0 flex flex-col items-center">
		<div
			class="w-1/2 p-5 mx-auto my-5 drop-shadow rounded-xl bg-gray-600 flex justify-between items-center"
		>
			<div class="font-thin text-white text-2xl w-fit m-auto">avDB</div>
			<div class="w-10/12">
				<input
					class="uppercase block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 font-mono"
					type="text"
					placeholder="Enter Search Term... PIGLT, MCI, KCMI"
					on:keyup={({ target: { value } }) => debounce(value)}
				/>
			</div>
		</div>
		<!-- Info Section -->
		{#each fixes as fix}
			<div
				class="w-1/2 p-5 mx-auto my-1 drop-shadow border-gray-300 bg-white flex justify-between items-center"
			>
				<div class="flex justify-between items-center w-full">
					<div class="text-xl font-light italic w-1/3">
						{fix.kind}
					</div>
					<div class="text-2xl font-bold w-1/3">
						{fix.identifier}
					</div>
					<div class="text-xl font-light italic w-1/3">
						{#if fix.name}
							"{fix.name}"
						{:else}
							Submit Name
						{/if}
					</div>
				</div>
			</div>
		{/each}
	</div>
	<div class="h-1/6 p-5 bg-gray-900 align-text-bottom text-gray-500 text-center mt-auto">
		This database is for <span class="strong">entertainment purposes only</span>. There is no
		guarantee provided for the accuracy of the information. Users assume their own risk.<br /><br />

		Created by <a href="https://github.com/cr0wst" class="strong">Steve Crow (@cr0wst)</a>
	</div>
</div>
