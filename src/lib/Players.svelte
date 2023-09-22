<script>
    export let players;
</script>

<div>
    <h3>
        Personal Best Standings
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
            {#each players as player, index}
                <tr>
                    <td>{index+1}</td>
                    <td class="team-manager">
                        <span>{player.entryName}</span>
                        <span>{player.playerName}</span>
                    </td>
                    <td>{player.personalBestWeekPoints}</td>
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