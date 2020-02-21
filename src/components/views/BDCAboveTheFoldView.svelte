<script context="module">
    const ComponentEvents = {};
    ComponentEvents.CLOSE = 'close';
</script>

<script>
    import { createEventDispatcher } from 'svelte';
    import { leftviewAlertable } from '../../actions/leftview-alertable.js';

    const dispatch = createEventDispatcher();

    function handleLeftview(event) {
        dispatch(ComponentEvents.CLOSE, {});
    }
</script>

<div
    use:leftviewAlertable
    on:leftview={handleLeftview}
>
    <slot></slot>
</div>