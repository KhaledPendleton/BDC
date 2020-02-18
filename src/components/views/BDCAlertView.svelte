<script>
    import { createEventDispatcher } from 'svelte';
    import BDCModalView from './BDCModalView.svelte';

    export let visible = false;
    export let title = 'Something Went Wrong';
    export let message = '';
    export let buttonTitle = 'Ok';

    const dispatch = createEventDispatcher();
    let actionButton = undefined;

    function handleActionButtonClick(event) {
        dispatch('action-btn-click', { originalEvent: event });
    }
</script>

<style>
    .alert {
        text-align: center;
    }

    .title {
        /* 1. Should equal .alert-container padding */
        margin-bottom: 0.7rem; /* 1. */
        display: inline-block;
        font-size: 1.25rem;
        line-height: 1.25rem;
        font-weight: var(--fontweight-bold);
    }

    .message {
        /* 1. Visual requirement. Must be larger than .title bottom margin to offest smaller font-size */
        margin-bottom: 0.9rem; /* 1. */
        font-size: 1rem;
        font-weight: var(--fontweight-regular);
    }

    button {
        width: 100%;
        padding-top: 0.325rem;
        padding-bottom: 0.325rem;
        border: none;
        border-radius: 2px;
    }
</style>

{#if visible}
    <BDCModalView on:escape on:bg-click>
        <div class="alert">
            <span class="title">{title}</span>
            <p class="message">{message}</p>
            <button
                bind:this={actionButton}
                on:click={handleActionButtonClick}
            >{buttonTitle}</button>
        </div>
    </BDCModalView>
{/if}