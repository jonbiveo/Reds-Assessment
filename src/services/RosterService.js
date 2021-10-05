import axios from 'axios';

export default {

    getTeams() {
        return axios.get("http://lookup-service-prod.mlb.com/json/named.team_all_season.bam?sport_code='mlb'&all_star_sw='N'&sort_order=name_asc&season='2021'")
    },
    getTeam(teamID) {
        return axios.get(`http://lookup-service-prod.mlb.com/json/named.roster_40.bam?team_id='${teamID}'`)
    }

}