<script>
    import { onMount, getContext } from 'svelte';
    import { key } from '../components/views/BDCAboveTheFoldView.svelte';

    const { openAtf } = getContext(key);

    onMount(() => {
        openAtf();
    });
</script>

<main class="main-content wrapper">
    <p>Home page here!</p>
</main>