<script>
    import BDCThemeButton, { themes } from '../buttons/BDCThemeButton.svelte';
    import BDCCopyrightLabel from '../labels/BDCCopyrightLabel.svelte';
    import BDCLink from '../buttons/BDCLink.svelte';

    const themeButtons = [
        { title: 'Positive', theme: themes.POSITIVE },
        { title: 'Neutral', theme: themes.NEUTRAL },
        { title: 'Negative', theme: themes.NEGATIVE }
    ];

    const socialMedia = [
        { title: 'Twitter', url: 'https://twitter.com' },
        { title: 'Instagram', url: 'https://instagram.com' },
        { title: 'YouTube', url: 'https://youtube.com' }
    ];

    const email = 'hello@binghamton.design';
</script>

<style>
    footer {
        padding-bottom: 1rem;
        display: grid;
        row-gap: 1rem;
        grid-template-rows: auto;
        grid-template-columns: repeat(2, 1fr);
        grid-template-areas:
            "theme theme"
            "social social"
            "email copyright";
    }

    .theme-controls { grid-area: theme; }
    .copyright { grid-area: copyright; }
    .social-media { grid-area: social; }
    .email { grid-area: email; }

    .copyright {
        justify-self: end;
    }

    .theme-controls,
    .social-media {
        display: flex;
        justify-content: space-between;
    }

    /* 625px at 16px font-size */
    @media screen and (min-width: 39.0625em) {
        footer {
            grid-template-columns: repeat(3, 1fr);
            grid-template-areas:
                "theme theme theme"
                "email copyright social";
        }

        .copyright {
            justify-self: center;
        }
        .email { justify-self: initial }
        .social-media { justify-content: flex-end; }

        .social-media > span:not(:last-child) {
            margin-right: 1rem;
        }
    }
</style>

<footer>
    <section class="theme-controls">
        {#each themeButtons as themeButton}
            <BDCThemeButton
                title={themeButton.title}
                theme={themeButton.theme}
            />
        {/each}
    </section>
    <section class="email">
        <BDCLink href={'mailto:' + email} external={true}>{email}</BDCLink>
    </section>
    <section class="copyright">
        <BDCCopyrightLabel class="copyright" />
    </section>
    <section class="social-media">
        {#each socialMedia as sm}
            <span>
                <BDCLink href={sm.url} external={true}>{sm.title}</BDCLink>
            </span>
        {/each}
    </section>
</footer>