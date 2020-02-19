<script>
    const now = new Date();
    const currentYear = now.getFullYear();
</script>

<style>
    .copyright {
        text-transform: uppercase;
    }

    .med-screen,
    .large-screen {
        display: none;
    }

    /* 400px at 16px font-size */
    @media screen and (min-width: 25em) {
        .med-screen {
            display: initial;
        }
    }

    /* 1050px at 16px font-size */
    @media screen and (min-width: 65.625em) {
        .med-screen {
            display: none;
        }

        .large-screen {
            display: initial;
        }
    }
</style>

<span class="copyright">
    &copy; { currentYear }
    <span class="med-screen">BDC</span>
    <span class="large-screen">Binghamton Design Collective</span>
</span>