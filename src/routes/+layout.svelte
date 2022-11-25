<script>
	import '../app.css';
	import Footer from '../components/Footer.svelte';
	import Header from '../components/Header.svelte';
</script>

<svelte:head>
	<title>vavDB - The Virtual Aviation Database</title>
	<meta property="og:title" content="vavDB.com" />
	<meta property="og:image" content="https://vavdb.com/favicon.ico" />
	<meta
		property="og:description"
		content="Welcome to vavDB. This website was created to help quickly look up airports and other identifiers while flying on the VATSIM network. The information is sourced using the FAA Aeronotical Data." />
	<meta property="og:url" content="https://vavdb.com" />
</svelte:head>
<div class="min-h-screen flex flex-col">
	<Header />
	<div class="w-full lg:w-5/6 mx-auto mt-2">
		<slot />
	</div>
	<Footer />
</div>
