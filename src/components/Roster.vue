<template>
    <div>
        <h2>Roster</h2>
        <select name="teams" id="teams" v-model="teams">
            <option value="Hello">Hello</option>
        </select>
    </div>
</template>

<script>
import rosterService from '@/services/RosterService.js';
export default {
    name: 'Roster',
    data() {
        return {
            teams: [],
        }
    },
    created() {
        rosterService.getTeams().then((response) => {
            response.data.team_all_season.queryResults.row.forEach(element => {
                this.teams.push(element)
            });
        })
    }
}
</script>

<style scoped>

</style>