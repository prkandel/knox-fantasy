<script>
    export let standings;
</script>

<div>
    <h3>
        FPL Points Standings
    </h3>

    <div>
        <table>
            <thead>
            <tr>
                <th>Rank</th>
                <th>Team & Manager</th>
                <th>Points</th>
            </tr>
            </thead>
            <tbody>
            {#each standings as standing, index}
                <tr>
                    <td>{index+1}</td>
                    <td class="team-manager">
                        <span>{standing.entry_name}</span>
                        <span>{standing.player_name}</span>
                    </td>
                    <td>{standing.points_for}</td>
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