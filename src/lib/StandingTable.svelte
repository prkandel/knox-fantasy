<script>
    export let standings;
</script>

<div>
    <h3>
        Standings
    </h3>

    <div>
        <table>
            <thead>
            <tr>
                <th>Rank</th>
                <th>Team & Manager</th>
                <th>Win</th>
                <th>Draw</th>
                <th>Loss</th>
                <th>Score</th>
                <th>Points</th>
            </tr>
            </thead>
            <tbody>
            {#each standings as standing}
                <tr>
                    <td>{standing.rank}</td>
                    <td>
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