<script>
	// import router from 'page';
	import { setContext } from 'svelte';

	import BDCAboveTheFoldView, { key } from './components/views/BDCAboveTheFoldView.svelte';
	import BDCFooterView from './components/views/BDCFooterView.svelte';
	import TestATF from './components/atfs/TestATF.svelte';

	import RouteManager from './managers/RouteManager';
	import ThemeManager from './managers/ThemeManager';

	import { routeInfo } from './stores';
	import constants from './constants';
	import routes from './routes';

	// ***********************************************************
	// ABOVE THE FOLD ********************************************
	// ***********************************************************

	let atfIsOpen = false;

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

	setContext(key, {openAtf, closeAtf});


	// ***********************************************************
	// ROUTER ****************************************************
	// ***********************************************************

	const routeManager = new RouteManager(routes);
	routeManager.init();

	$: page = $routeInfo.page;
	$: params = $routeInfo.params;

	// ***********************************************************
	// THEME MANAGER *********************************************
	// ***********************************************************

	const themeManager = new ThemeManager(document.body);
	const themes = constants.THEME_NAMES.map(name => {
        const updateTheme = themeManager.makeUpdateTheme(name);
		return {name, updateTheme};
	});
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
	<BDCFooterView
		{themes}
		email={constants.COMPANY_EMAIL}
		socialMediaAccounts={constants.SOCIAL_MEDIA_ACCOUNTS}
	/>
</section>