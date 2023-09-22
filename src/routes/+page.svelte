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

<div class="container">
    <h1>KNOX FANTASY LEAGUE 2023/24</h1>
    <div class="gw">Current GW {data.fplData.event}</div>
    <div class="wrapper">
        <H2HStandingTable standings="{h2hStandings}"/>
        <FPLPointsStanding standings="{fplStandings}"/>
        <Players players="{players}"/>
    </div>
</div>

<style lang="less">
    h1 {
      color: red;
      text-align: center;
    }

    .gw {
      text-align: center;
    }

    .container {
      margin: 0 auto;
    }

    .wrapper {
      display: flex;
      gap: 80px;
      width: 1600px;
    }

    :global {
      table, th, td {
        border: 1px solid #000;
      }

      th {
        background-color: #f2f2f2;
        font-weight: bold;
      }
    }
</style>
