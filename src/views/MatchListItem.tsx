import { Match } from "../models/Match";

class MatchListItemProps {
    match: Match
}

function MatchListItem(props: MatchListItemProps) {
    var item = props.match

    var computeTeamClassName = function(scoreTeam1?: number, scoreTeam2?: number, additionnalClass?: string) {
        var result = additionnalClass == null ? "" : additionnalClass
        
        if(scoreTeam1 == null || scoreTeam2 == null) {
            result += " winner"
        } else if(scoreTeam1 < scoreTeam2) {
            result += " looser"
        } else {
            result += " winner"
        }

        return result
    }
    return <li className="matchItem">
                <div className="team">
                    <img src={item.domicile.logo_url.toString()} />
                    <span className={computeTeamClassName(item.score_domicile, item.score_exterieur, "name")}>{item.domicile.nom}</span>
                    <span className={computeTeamClassName(item.score_domicile, item.score_exterieur, "score")}>{item.score_domicile}</span>
                </div>
                <div className="team">
                    <img src={item.exterieur.logo_url.toString()} />
                    <span className={computeTeamClassName(item.score_exterieur, item.score_domicile, "name")}>{item.exterieur.nom}</span>
                    <span className={computeTeamClassName(item.score_exterieur, item.score_domicile, "score")}>{item.score_exterieur}</span> 
                </div>
            </li>
}

export default MatchListItem