import { Rank } from '../models/Rank'

class RankTableItemProps {
    rank: Rank
    index: number
}

function RankTableItem(props: RankTableItemProps) {
    
    return <li className="rankItem">
        <span>{props.index}</span><span className="rankTeamName">{props.rank.nom}</span><span>{props.rank.points}</span><span>{props.rank.bp}</span><span>{props.rank.bc}</span>
    </li>
}

export default RankTableItem