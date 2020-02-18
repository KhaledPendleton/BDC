<script>
    export let title = 'Ok';
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

<button on:click>{title}</button>