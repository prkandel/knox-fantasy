<script>
    import StandingTable from "../lib/StandingTable.svelte";

    export let data;

</script>

<h1>KNOX FANTASY LEAGUE 2023/24</h1>
<StandingTable standings="{data.fplData.standings}"/>

<style lang="less">
    h1 {
      color: red;
    }
</style>
