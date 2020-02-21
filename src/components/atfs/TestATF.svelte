<script context="module">
    const ComponentEvents = {};
    ComponentEvents.SHOULD_CLOSE = 'shouldclose';
</script>

<script>
	import { createEventDispatcher } from 'svelte';
	
	const dispatch = createEventDispatcher();
	
	function handleCloseButtonClick(event) {
		dispatch(ComponentEvents.SHOULD_CLOSE, { originalEvent: event });
	}
</script>

<style>
	.container {
		width: 100%;
		height: 100vh;
		position: relative;
        background-color: lightblue;
	}
	
	.image-box {
		min-width: 200px;
		max-width: 98%;
		height: auto;
		margin: 0;
		position: absolute;
		top: 50%; left: 50%;
		transform: translate(-50%, -50%);
	}
	
	.image-box__image {
		vertical-align: middle;
		width: 100%;
		height: auto;
	}
	
	.btn--close {
		margin: auto;
		display: block;
	}
</style>

<div class="container">
	<figure class="image-box">
		<img 
            class="image-box__image"
            src="https://picsum.photos/300/200" 
            alt="Placeholder image"
		>
	</figure>
	<button class="btn--close" on:click={handleCloseButtonClick}>
		Close that ish!
	</button>
</div>