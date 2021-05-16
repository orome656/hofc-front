import { Match } from '../models/Match'
import MatchListItem from './MatchListItem'

class MatchListProps {
    matchs: Array<Match>
}

function MatchList(props: MatchListProps) {

    return <div className="matchsList">
        {props.matchs.map((item, index) => <MatchListItem key={index} match={item}/>)}
    </div>
}

export default MatchList