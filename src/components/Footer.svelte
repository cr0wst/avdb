<script>
	import Fa from 'svelte-fa/src/fa.svelte';
	import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
</script>

<div
	class="p-5 bg-gray-900 align-text-bottom text-gray-500 text-sm font-thin text-center mt-auto w-full">
	<div class="flex flex-col m-auto">
		<div class="m-auto flex">
			<a href="https://github.com/cr0wst/avdb" class="text-white px-2"
				><Fa class="text-lg" icon={faGithub} /></a>
			<a href="https://twitter.com/cr0wst" class="text-white px-2"
				><Fa class="text-lg" icon={faTwitter} /></a>
		</div>
		<div class="m-auto">
			This database is for <span class="strong">entertainment purposes only</span>. There is no
			guarantee provided for the accuracy of the information. Users assume their own risk.
		</div>
		<div>
			Created by <a href="https://smcrow.com" class="strong text-orange-600"
				>Steve Crow (@cr0wst)</a>
		</div>
	</div>
</div>
