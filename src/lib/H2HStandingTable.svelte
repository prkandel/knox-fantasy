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

<div class="h2h-standing-container">
    <h3>
        H2H Standings
    </h3>

    <div>
        <table>
            <thead>
            <tr>
                <th on:click={() => {sortByColumn('rank')}}>Rank</th>
                <th>Team</th>
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
                        <span>{standing.entry_name}</span>
                        <span>{standing.player_name}</span>
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
    .team-manager {
      display: flex;
      flex-direction: column;
    }
</style>