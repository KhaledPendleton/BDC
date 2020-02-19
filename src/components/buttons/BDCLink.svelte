<script>
    export let href;
    export let external = false;

    const target = external ? '_blank' : '_self';
</script>

<style>
    a {
        color: var(--color-text);
        text-transform: uppercase;
        display: inline;
    }
</style>

<a href={href} {target}>
    <slot></slot>
</a>