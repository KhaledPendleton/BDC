<script>
    import BDCLink from './BDCLink.svelte';
    export let email = '';
    const address = 'mailto:' + email;
</script>

<BDCLink href={address}>{email}</BDCLink>