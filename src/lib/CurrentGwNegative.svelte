<script>
    import BasicStanding from "./BasicStanding.svelte";

    export let players;
    players.sort((a, b) => a.currentGwNegative - b.currentGwNegative)
</script>

<BasicStanding players="{players}" headline="Current GW Negative" key="currentGwNegative"/>