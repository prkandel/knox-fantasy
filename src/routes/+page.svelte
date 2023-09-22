<script>
    import FPLPointsStanding from "../lib/FPLPointsStanding.svelte";
    import H2HStandingTable from "../lib/H2HStandingTable.svelte";
    import Players from "../lib/Players.svelte";

    export let data;
    const h2hStandings = data.fplData.standings;
    const fplStandings = [...h2hStandings];
    fplStandings.sort((a,b) => b.points_for - a.points_for);

    const players = data.fplData.players;

</script>

<h1>KNOX FANTASY LEAGUE 2023/24</h1>
<div>Current GW {data.fplData.event}</div>
<H2HStandingTable standings="{h2hStandings}"/>
<FPLPointsStanding standings="{fplStandings}"/>
<Players players="{players}"/>

<style lang="less">
    h1 {
      color: red;
    }
</style>
