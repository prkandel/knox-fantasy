<script>
    export let players;
</script>

<div class="standing-container">
    <h3>
        Players
    </h3>
    <div class="standing-table">
        <table>
            <thead>
            <tr>
                <th>SN</th>
                <th>Team</th>
                <th>Points</th>
                <th>Chips Used</th>
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
                    <td>{player.totalPoints}</td>
                    <td>{player.chips}</td>
                </tr>
            {/each}
            </tbody>
        </table>
    </div>
</div>