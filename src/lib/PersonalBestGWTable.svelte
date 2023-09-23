<script>
    import BasicStanding from "./BasicStanding.svelte";

    export let players;
    players.sort((a, b) => b.personalBestWeekPoints - a.personalBestWeekPoints)
</script>

<BasicStanding players="{players}" headline="Personal Best Points Table" key="personalBestWeekPoints"/>