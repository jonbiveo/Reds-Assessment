<template>
    <div id="roster">
        <div>
        <img class="img" src="@/assets/cin.png" alt="">
        <h2>Roster</h2>
        </div>
        <select class="team-select" name="teams" id="teams" v-model="selectedTeam" v-on:change="setPlayerstoEmpty(), getRoster(selectedTeam)">
            <option v-for="team in teams" :key="team.id" :value="team.team_id">{{ team.name_display_full }}</option>
        </select>
        <ul class="player-list">
            <li class="players" v-for="player in players" :key="player.id">{{ player.name_first }}  {{ player.name_last }} </li>
        </ul>
    </div>
</template>

<script>
import rosterService from '@/services/RosterService.js';
export default {
    name: 'Roster',
    data() {
        return {
            teams: [],
            selectedTeam: "",
            players: [],
        }
    },
    created() {
        rosterService.getTeams().then((response) => {
            response.data.team_all_season.queryResults.row.forEach(element => {
            this.teams.push(element)
            });
        }).catch(error => {
            console.log(error)
        })
    },
    methods: {
        getRoster(selectedTeam) {
            rosterService.getTeam(selectedTeam).then((response) => {
                response.data.roster_40.queryResults.row.forEach(element => {
                this.players.push(element)
                })
            }).catch (error => {
                console.log(error)
            })
        },
        setPlayerstoEmpty() {
            this.players = []
        }
    }
}
</script>

<style scoped>

* {
    background-color: white;
}

#roster {
    height: 96vh;
    margin-left: 60px;
    margin-right: 60px;
}

.img {
    display: inline-block;
    max-width: 200px;
}

.player-list {
    list-style-type: none;
    text-align: left;
}


</style>