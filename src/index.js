import App from './App.svelte';

const appRoot = document.getElementById('app-root');

const app = new App({
	target: appRoot,
	props: {}
});

export default app;