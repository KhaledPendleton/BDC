<script>
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();
    let background = undefined;

    function handleKeyup(event) {
        const { key } = event;

        if (key === 'Escape') {
            event.preventDefault();
            dispatch('escape', { originalEvent: event });
        }
    }

    function handleBackgroundClick(event) {
        const { target } = event;

        if (target === background) {
            event.preventDefault();
            dispatch('bg-click', { originalEvent: event });
        }
    }
</script>

<style>
    .background {
        width: 100vw;
        height: 100vh;
        position: fixed;
        top: 0; left: 0;
        background-color: rgba(0, 0, 0, 0.7);
    }

    .popup {
        width: 95%;
        max-width: 300px;
        padding: 0.7rem;
        background-color: var(--color-background);
        color: var(--color-text);
        border-radius: 2px;
        position: absolute;
        top: 50%; left: 50%;
        transform: translate(-50%, -50%);
    }
</style>

<svelte:window on:keyup={handleKeyup}/>

<div 
    class="background"
    bind:this={background}
    on:click={handleBackgroundClick}
>
    <div class="popup">
        <slot></slot>
    </div>
</div>