<script>
	import router from 'page';
	import { setContext } from 'svelte';

	import BDCAboveTheFoldView, { key } from './components/views/BDCAboveTheFoldView.svelte';
	import BDCFooterView from './components/views/BDCFooterView.svelte';
	import TestATF from './components/atfs/TestATF.svelte';
	import routes from './pages/routes';

	const user = {
		ipAddress: '0.0.0.0',
		isAuthenticated: false
	};

	let page;
	let params;
	let atfIsOpen = true;

    function scrollToTop() {
		window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
	}

	function openAtf() {
		atfIsOpen = true;
		scrollToTop();
	}

	function closeAtf() {
		atfIsOpen = false;
		scrollToTop();
	}

	function handleAtfShouldclose(event) {
		closeAtf();
	}

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
	setContext(key, {openAtf, closeAtf});
</script>

<style>
	#app {
		height: 100vh;
		display: flex;
  		flex-direction: column;
	}

	:global(.main-content) {
		flex: 1 0 auto;
	}

	:global(.wrapper) {
		/* 1. Around 1200px at 16px font */
        width: 95%;
        max-width: 75rem; /* 1. */
        margin: auto;
	}
</style>

<section>
	<BDCAboveTheFoldView isOpen={atfIsOpen}>
		<TestATF on:shouldclose={handleAtfShouldclose} />
	</BDCAboveTheFoldView>
</section>

<section id="app">
	<svelte:component this={page} params={params} />
	<BDCFooterView />
</section>