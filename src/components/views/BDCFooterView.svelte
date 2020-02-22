<script>
    import BDCCopyrightLabel from '../labels/BDCCopyrightLabel.svelte';
    import BDCLinkEmail from '../buttons/BDCLinkEmail.svelte';
    import BDCButton from '../buttons/BDCButton.svelte';
    import BDCLink from '../buttons/BDCLink.svelte';

    export let socialMediaAccounts = [];
    export let themes = [];
    export let email = '';
</script>

<style>
    footer {
        padding-bottom: 1rem;
        display: grid;
        grid-template-rows: auto;
        row-gap: 1rem;
    }

    .socials,
    .theme-controls {
        margin: 0;
        padding: 0;
        list-style: none;
        display: flex;
        justify-content: space-between;
    }

    .socials li,
    .theme-controls li {
        display: inline-block;
    }

    .socials { grid-area: socials;}
    .email-container {grid-area: email;}
    .copyright-container {
        grid-area: copyright;
        justify-self: end;
    }

    .metadata {
        display: grid;
        row-gap: 1rem;
        grid-template-rows: auto;
        grid-template-columns: repeat(2, 1fr);
        grid-template-areas: 
            "socials socials"
            "email copyright";
    }

    /* 775px at 16px font-size */
    @media screen and (min-width: 48.4375em) {
        .metadata {
            grid-template-rows: auto;
            grid-template-columns: repeat(3, 1fr);
            grid-template-areas: 
                "email copyright socials";
        }

        .copyright-container {justify-self: center;}
        .socials {justify-content: flex-end;}
        .socials li:not(:last-child) {
            margin-right: 1rem;
        }
    }
</style>

<footer>
    <section class="wrapper">
        <ul class="theme-controls">
            {#each themes as theme}
                <li>
                    <BDCButton handleClick={theme.updateTheme}>
                        {theme.name}
                    </BDCButton>
                </li>
            {/each}
        </ul>
    </section>
    <section class="wrapper">
        <div class="metadata">
            <div class="email-container">
                <BDCLinkEmail {email} />
            </div>
            <div class="copyright-container">
                <BDCCopyrightLabel />
            </div>
            <ul class="socials">
                {#each socialMediaAccounts as account}
                    <li><BDCLink external={true} href={account.url}>{account.title}</BDCLink></li>
                {/each}
            </ul>
        </div>
    </section>
</footer>