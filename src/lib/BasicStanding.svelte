<script>
    export let players;
    export let headline;
    export let key;
</script>


<div class="standing-container">
    <h3>
        {headline}
    </h3>

    <div class="standing-table">
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
                        <span class="team-name">{player.entryName}</span>
                        <span class="player-name">{player.playerName}</span>
                    </td>
                    <td>{player[key]}</td>
                </tr>
            {/each}
            </tbody>
        </table>
    </div>
</div>