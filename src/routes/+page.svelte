<script>
    import FPLPointsStanding from "../lib/FPLPointsStanding.svelte";
    import H2HStandingTable from "../lib/H2HStandingTable.svelte";
    import PersonalBestGWTable from "../lib/PersonalBestGWTable.svelte";
    import QuarterlyStandings from "../lib/QuarterlyStandings.svelte";
    import Players from "../lib/Players.svelte";
    import Header from "../lib/Header.svelte";
    export let data;
    const h2hStandings = data.fplData.standings;
    const fplStandings = [...h2hStandings];
    fplStandings.sort((a,b) => b.points_for - a.points_for);

    const players = data.fplData.players;

</script>

<div class="container">
    <Header />
<!--    <div class="gw">Current GW {data.fplData.event}</div>-->
    <div class="wrapper">
        <H2HStandingTable standings="{h2hStandings}"/>
<!--        <FPLPointsStanding standings="{fplStandings}"/>-->
        <PersonalBestGWTable players="{players}"/>
        <Players players="{players}" />
<!--        <QuarterlyStandings players="{players}" quarter="{1}"/>-->
    </div>
<!--    <Players players="{players}" />-->
</div>

<style lang="less">
    :global body {
      margin: 0;
    }
    @media (max-width: 768px) {
      .wrapper {
        display: flex;
        flex-direction: column;
        gap: 30px;
      }
    }
    @media (min-width: 1024px) {
      .wrapper {
        display: flex;
        justify-content: space-around;
        width: 1024px;
        margin: 0 auto;
      }
    }
</style>
