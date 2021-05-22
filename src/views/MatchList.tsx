import { Match } from '../models/Match'
import { makeStyles } from '@material-ui/core/styles';
import MatchListItem from './MatchListItem'

class MatchListProps {
    matchs: Array<Match>
}


const useStyles = makeStyles({
    root: {
      display: "flex",
      "flex-wrap": "wrap"
    },
  });

function MatchList(props: MatchListProps) {
    const classes = useStyles();

    return <div className={classes.root}>
        {props.matchs.map((item, index) => <MatchListItem key={index} match={item}/>)}
    </div>
}

export default MatchList