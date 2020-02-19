<script context="module">
    export const themes = Object.freeze({
        POSITIVE: 'positive',
        NEUTRAL: 'neutral',
        NEGATIVE: 'negative'
    });
</script>

<script>
    export let title;
    export let theme;

    function isValidTheme(theme) {
        if (!theme) {
            throw new Error('Theme is not defined');
        }

        switch (theme) {
            case themes.POSITIVE:
            case themes.NEUTRAL:
            case themes.NEGATIVE:
                return true;
            default:
                return false;
        }
    }

    function handleClick(event) {
        if (isValidTheme(theme)) {
            document.body.setAttribute('data-theme', theme);
        }
    }
</script>

<style>
    button {
        padding: 0;
        padding-top: 0.325rem;
        padding-bottom: 0.325rem;
        border: none;
        border-radius: 2px;
        background: none;
        text-transform: uppercase;
        display: inline-block;
        color: var(--color-text);
    }
</style>

<button on:click={handleClick}>{title}</button>