<script>
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    function onClick(event) {
        dispatch('click', {
            originalEvent: event
        });
    }
</script>

<button on:click={onClick}>
    <slot>Default Text</slot>
</button>

<style>
    button {
        min-width: 100px;
        padding: 0.375rem 0.75rem;
        text-transform: uppercase;
        vertical-align: center;
        display: inline-block;
        background-color: transparent;
        border: 1px solid transparent;
        border-radius: 2px;
    }

    button:hover {
        cursor: pointer;
        text-decoration: underline;
    }
</style>