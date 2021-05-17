import { Match } from "./models/Match";
import axios from 'axios'

class MatchService {
    async getMatch(): Promise<Array<Match>> {
        var matchs: Array<Match> = (await axios.get("https://fff-system.hofc.maladot-developer.ovh:8443/api/matchs", {
            auth: {
                username: 'antho',
                password: 'fff_password'
            }
        })).data
        return matchs
    }
}

export default new MatchService()