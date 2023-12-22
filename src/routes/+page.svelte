<script>
    import FPLPointsStanding from "../lib/FPLPointsStanding.svelte";
    import H2HStandingTable from "../lib/H2HStandingTable.svelte";
    import PersonalBestGWTable from "../lib/PersonalBestGWTable.svelte";
    import QuarterlyStandings from "../lib/QuarterlyStandings.svelte";
    import Players from "../lib/Players.svelte";
    import Header from "../lib/Header.svelte";
    import CurrentGwNegative from "../lib/CurrentGwNegative.svelte";
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
        <QuarterlyStandings players="{players}" quarter="{2}"/>
        <QuarterlyStandings players="{players}" quarter="{1}"/>
        <PersonalBestGWTable players="{players}"/>
        <CurrentGwNegative players="{players}"/>
        <Players players="{players}" />
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
        display: grid;
        grid-template-columns: 1fr 1fr;
        width: 1024px;
        margin: 0 auto;
      }
    }
</style>
