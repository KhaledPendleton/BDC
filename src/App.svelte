<script>
	import router from 'page';
	import routes from './routes';

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

<h1>Apps</h1>
<main>
	<svelte:component this={page} params={params} />
</main>