<script>
    export let players;
    export let headline;
    export let key;
</script>


<div>
    <h3>
        {headline}
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
                    <td>{index + 1}</td>
                    <td class="team-manager">
                        <span>{player.entryName}</span>
                        <span>{player.playerName}</span>
                    </td>
                    <td>{player[key]}</td>
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