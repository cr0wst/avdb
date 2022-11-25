<script>
	import '../app.css';
	import Footer from '../components/Footer.svelte';
	import Header from '../components/Header.svelte';
</script>

<svelte:head><title>avDB - An Unofficial Aviation Database</title></svelte:head>
<div class="min-h-screen flex flex-col">
	<Header />
	<div class="w-full lg:w-5/6 mx-auto mt-2">
		<slot />
	</div>
	<Footer />
</div>
