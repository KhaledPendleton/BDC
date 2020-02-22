import Home from './pages/Home.svelte';

const routes = [
    { path: '/', component: Home },
    { path: '/home', component: Home }
];

export default Object.freeze(routes);