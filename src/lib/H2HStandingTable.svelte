<script>
    export let standings;

    let sortBy = null;
    let sortDirection = 1;

    function sortByColumn(column) {
        if (sortBy === column) {
            sortDirection *= -1;
        } else {
            sortDirection = 1;
            sortBy = column;
        }
        standings = standings.sort((a,b) => { return (a[column] < b[column] ? -1 : 1) * sortDirection});
    }

</script>

<div class="standing-container">
    <h3>
        H2H Standings
    </h3>

    <div class="standing-table">
        <table>
            <thead>
            <tr>
                <th on:click={() => {sortByColumn('rank')}}>Rank</th>
                <th class="team">Team</th>
                <th on:click={() => {sortByColumn('matches_won')}}>W</th>
                <th on:click={() => {sortByColumn('matches_drawn')}}>D</th>
                <th on:click={() => {sortByColumn('matches_lost')}}>L</th>
                <th on:click={() => {sortByColumn('points_for')}}>Score</th>
                <th on:click={() => {sortByColumn('total')}}>Pts</th>
            </tr>
            </thead>
            <tbody>
            {#each standings as standing}
                <tr>
                    <td>{standing.rank}</td>
                    <td class="team-manager">
                        <span class="team-name">{standing.entry_name}</span>
                        <span class="player-name">{standing.player_name}</span>
                    </td>
                    <td>{standing.matches_won}</td>
                    <td>{standing.matches_drawn}</td>
                    <td>{standing.matches_lost}</td>
                    <td>{standing.points_for}</td>
                    <td>{standing.total}</td>
                </tr>
            {/each}
            </tbody>
        </table>
    </div>
</div>

<style lang="less">
    th:not(.team) {
      cursor: pointer;
    }
    :global {
      .standing-container {
        @media (min-width: 768px) {
          margin: 0 auto;
        }
        h3 {
          text-align: center;
          margin-bottom: 10px;
        }
        padding: 14px 0 24px;
        background: #fafafa;
      }
      h1,h2,h3 {
        margin: 0;
      }
      table {
        background: #fff;
      }
      .standing-table {
        display: flex;
        justify-content: center;
        padding: 0 14px;
      }
      thead {
        position: sticky;
        top: 0;
        left: 0;
      }
      th {
        background: #eee;
      }
      table, th, td {
        border-collapse: collapse;
        padding: 7px;
      }
      tbody tr:nth-child(even) {
        background-color: rgba(0,0,0,0.1);
      }
      @media (min-width: 768px) {
        table, th, td {
          padding: 10px;
        }
      }
      .team-manager {
        display: flex;
        flex-direction: column;
        .team-name {
          font-size: 14px;
        }
        .player-name {
          font-size: 12px;
        }
      }
    }
</style>