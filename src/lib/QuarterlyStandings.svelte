<script>
    import BasicStanding from "./BasicStanding.svelte";

    export let players;
    export let quarter;

    const quarterHeadlineKey = {
        1: ["Q1 (GW1 to GW9) Points Leader ($30)", "q1TotalPoints"],
        2: ["Q2 (GW10 to GW19) Points Leader ($30)", "q2TotalPoints"],
        3: ["Q3 (GW20 to GW28) Points Leader ($30)", "q3TotalPoints"],
        4: ["Q4 (GW29 to GW36) Points Leader ($30)", "q4TotalPoints"],
    }

    players.sort((a, b) => b[quarterHeadlineKey[quarter][1]] - a[quarterHeadlineKey[quarter][1]])
</script>



<BasicStanding players="{players}" headline="{quarterHeadlineKey[quarter][0]}" key="{quarterHeadlineKey[quarter][1]}"/>