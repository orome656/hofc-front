import { Rank } from '../models/Rank'

class RankTableItemProps {
    rank: Rank
    index: number
}

function RankTableItem(props: RankTableItemProps) {
    
    var convertNameToDisplay = function(name: string) {
        return name.replace(/\w+/g, function(w: string){return w[0].toUpperCase() + w.slice(1).toLowerCase()});
    }

    return <li className="rankItem">
        <span>{props.index}</span><span><img alt="Logo equipe" src={props.rank.logo_url.toString()} /></span><span className="rankTeamName">{convertNameToDisplay(props.rank.nom)}</span><span>{props.rank.points}</span><span>{props.rank.bp}</span><span>{props.rank.bc}</span>
    </li>
}

export default RankTableItem