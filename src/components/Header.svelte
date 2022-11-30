<script>
	import { goto } from '$app/navigation';
</script>

<div class="bg-gray-900 shadow">
	<div class="container mx-auto px-4 lg:w-2/3 w-full">
		<div class="flex items-center justify-between py-4">
			<div class="text-3xl text-white drop-shadow mx-auto">
				<a href="/" on:click={() => goto('/')}
					><span class="font-thin">v</span><span class="font-light">av</span><span class="font-bold"
						>DB</span
					><span class="font-thin">.com</span></a>
			</div>
		</div>
	</div>
</div>
