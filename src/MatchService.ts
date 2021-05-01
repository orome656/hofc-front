import { Match } from "./models/Match";
import axios from 'axios'

class MatchService {
    constructor(){}

    async getMatch(): Promise<Array<Match>> {
        var matchs: Array<Match> = (await axios.get("http://localhost:5000/api/matchs")).data
        console.log(matchs)
        return matchs
    }
}

export default new MatchService()