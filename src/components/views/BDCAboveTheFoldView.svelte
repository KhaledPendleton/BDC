<script context="module">
    export const key = { name: 'bdc-atf' };
</script>

<script>
    import { getContext } from 'svelte';
    import { leftviewAlertable } from '../../actions/leftview-alertable.js';
    export let isOpen;

    const { closeAtf } = getContext(key);

    function handleLeftview(event) {
        console.log('ATF has left the view.');
        closeAtf();
    }
</script>

{#if isOpen}
    <div
        use:leftviewAlertable
        on:leftview={handleLeftview}
    >
        <slot></slot>
    </div>
{/if}