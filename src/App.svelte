<script>
	import router from 'page';
	
	import routes from './routes';
	import BDCFooterView from './components/views/BDCFooterView.svelte';
	import BDCAboveTheFoldView from './components/views/BDCAboveTheFoldView.svelte';
	import TestATF from './components/atfs/TestATF.svelte';

	let atfOpen = true;

	const user = {
		ipAddress: '0.0.0.0',
		isAuthenticated: false
	};

	let page;
	let params;

	routes.forEach(route => {
		router(route.path,
			(context, next) => {
				params = context.params;
				next();
			},
			() => {
				if (route.requiresAuth && !user.isAuthenticated) {
					router.redirect('/login');
					return;
				}

				page = route.component
			}
		);
	});

	router.start();

	function scrollToTop() {
		window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
	}

	function handleAtfClose(event) {
		atfOpen = false;
		scrollToTop();
	}

	function handleAtfOpenButtonClick(event) {
		atfOpen = true;
		scrollToTop();
	}
</script>

<style>
	#app {
		/* 1. Around 1200px at 16px font */
        width: 95%;
        max-width: 75rem; /* 1. */
        margin: auto;
		height: 100vh;
		display: flex;
  		flex-direction: column;
	}

	main {
		flex: 1 0 auto;
	}
</style>

{#if atfOpen}
	<BDCAboveTheFoldView on:close={handleAtfClose}>
		<TestATF on:shouldclose={handleAtfClose} />
	</BDCAboveTheFoldView>
{/if}

<div id="app">
	<main>
		<svelte:component this={page} params={params} />
	</main>
	<BDCFooterView />
</div>