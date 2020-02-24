<script>
    import { onMount, getContext } from 'svelte';
    import { key } from '../components/views/BDCAboveTheFoldView.svelte';
    import BDCButton from '../components/buttons/BDCButton.svelte';
    import BDCLink from '../components/buttons/BDCLink.svelte';

    const { openAtf } = getContext(key);

    function handleATFOpenButtonClick(event) {
        openAtf();
    }

    onMount(() => {
        openAtf();
    });
</script>

<style>
    .container {
        padding-top: 1rem;
        padding-bottom: 2rem;
        border-bottom: 1px solid var(--color-primary);
    }

    .container__header {
        margin-bottom: 1rem;
        text-transform: uppercase;
        text-align: center;
        font-size: 2.5em;
        letter-spacing: 1px;
    }

    .container__header p:last-child {
        margin-bottom: 0;
    }

    .container__footer {
        text-align: center;
    }

    .atf-controls {
        padding-top: 1rem;
        padding-bottom: 1rem;
        text-align: center;
    }
</style>

<main class="main-content">
    <section class="atf-controls">
        <BDCButton handleClick={handleATFOpenButtonClick}>Above the Fold</BDCButton>
    </section>
    <section class="container">
        <header class="wrapper container__header">
            <p>
                All Design.
            </p>
            <p>
                Binghamton Design Collective™ is committed to making the city of Binghamton a vibrant design capital that values, celebrates and supports the broader creative community.
            </p>
            <p>
                We are a cooperative of designers with a range of professional experiences and a variety of personalities. It’s for anyone who calls themselves a designer. From graphic to industrial, fashion to architecture.
            </p>
        </header>
        <footer class="container__footer">
            <BDCLink href="/about">Learn More</BDCLink>
        </footer>
    </section>
</main>