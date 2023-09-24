<script>
    export let players;
</script>

<div>
    <table>
        <thead>
        <tr>
            <th>SN</th>
            <th>Player</th>
            <th>Team Name</th>
            <th>Points</th>
            <th>Chips Used</th>
        </tr>
        </thead>
        <tbody>
        {#each players as player, index}
            <tr>
                <td>{index + 1}</td>
                <td>{player.playerName}</td>
                <td>{player.entryName}</td>
                <td>{player.totalPoints}</td>
                <td>{player.chips}</td>
            </tr>
        {/each}
        </tbody>
    </table>
</div>