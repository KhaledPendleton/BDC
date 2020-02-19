<script>
	import router from 'page';
	
	import routes from './routes';
	import BDCFooterView from './components/views/BDCFooterView.svelte';

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

<div id="app">
	<main>
		<svelte:component this={page} params={params} />
	</main>
	<BDCFooterView />
</div>