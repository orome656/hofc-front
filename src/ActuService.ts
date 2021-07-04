import { Actu } from "./models/Actu";
import axios from 'axios'

class ActuService {
    async getActus(): Promise<Array<Actu>> {
        var actus: Array<Actu> = (await axios.get("https://hofc-official-system.hofc.maladot-developer.ovh:8443/actualites")).data
        return actus
    }
}

export default new ActuService()