import { Match } from '../models/Match'
import MatchListItem from './MatchListItem'

class MatchListProps {
    matchs: Array<Match>
}

function MatchList(props: MatchListProps) {

    return <ul className="matchsList">
        {props.matchs.map((item, index) => <MatchListItem key={index} match={item}/>)}
    </ul>
}

export default MatchList