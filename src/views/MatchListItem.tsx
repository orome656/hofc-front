import { Match } from "../models/Match";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

class MatchListItemProps {
    match: Match
}

const useStyles = makeStyles({
    root: {
        'flex-shrink': 1,
        'display': 'flex',
        'flex-direction': 'column',
        width: '20em',
        margin: '1em'
    },
    image: {
        'border-radius': '50%',
        height: '3em',
        margin: '1em'
    }, 
    team: {
        display: "flex",
        "flex-direction": "row",
        "align-items": "center"
    },
    winner: {

    },
    looser: {
        color: "lightgray"
    },
    score: {
        "margin-left": "1em",
        "margin-right": "1em"
    },
    teamName: {
        "flex-grow": 1,
        "text-align": "left"

    }

});

function MatchListItem(props: MatchListItemProps) {
    const classes = useStyles();
    var item = props.match

    var computeTeamClassName = function(scoreTeam1?: number, scoreTeam2?: number, additionnalClass?: string) {
        var result = additionnalClass == null ? "" : additionnalClass
        
        if(scoreTeam1 == null || scoreTeam2 == null) {
            result += ` ${classes.winner}`
        } else if(scoreTeam1 < scoreTeam2) {
            result += ` ${classes.looser}`
        } else {
            result += ` ${classes.winner}`
        }

        return result
    }

    return <Card className={classes.root}>
      <CardContent>
          <div>
                <div className={classes.team}>
                    <img className={classes.image} alt="Logo domicile" src={item.domicile.logo_url.toString()} />
                    <span className={computeTeamClassName(item.score_domicile, item.score_exterieur, classes.teamName)}>{item.domicile.nom}</span>
                    <span className={computeTeamClassName(item.score_domicile, item.score_exterieur, classes.score)}>{item.score_domicile}</span>
                </div>
                <div className={classes.team}>
                    <img className={classes.image} alt="Logo exterieur" src={item.exterieur.logo_url.toString()} />
                    <span className={computeTeamClassName(item.score_exterieur, item.score_domicile, classes.teamName)}>{item.exterieur.nom}</span>
                    <span className={computeTeamClassName(item.score_exterieur, item.score_domicile, classes.score)}>{item.score_exterieur}</span> 
                </div>
            </div>
        </CardContent>
    </Card>
}

export default MatchListItem