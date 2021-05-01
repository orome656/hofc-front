import { Match } from '../models/Match'
import { Rank } from '../models/Rank'
import RankTableItem from './RankTableItem'

class RankTableProps {
    matchs: Array<Match>
    
}

function RankTable(props: RankTableProps) {
    
    var convertMatchsToRanks = function(m: Array<Match>): Array<Rank> {
        var ranks = new Map<String, Rank>()
        for (var match of m) {
            if(ranks.get(match.domicile.nom) == null) {
                ranks.set(match.domicile.nom, new Rank())
                ranks.get(match.domicile.nom)!.nom = match.domicile.nom
            }
            if(ranks.get(match.exterieur.nom) == null) {
                ranks.set(match.exterieur.nom, new Rank())
                ranks.get(match.exterieur.nom)!.nom = match.exterieur.nom
            }

            if(match.score_domicile == null || match.score_exterieur == null)
                continue

            if (match.score_domicile < match.score_exterieur) {
                ranks.get(match.domicile.nom)!.points += 3
            } else if (match.score_domicile < match.score_exterieur) {
                ranks.get(match.exterieur.nom)!.points += 3
            } else {
                ranks.get(match.domicile.nom)!.points += 1
                ranks.get(match.exterieur.nom)!.points += 1
            }
            ranks.get(match.domicile.nom)!.bp += match.score_domicile
            ranks.get(match.exterieur.nom)!.bc += match.score_exterieur
            ranks.get(match.domicile.nom)!.bp += match.score_exterieur
            ranks.get(match.exterieur.nom)!.bc += match.score_domicile
        }
        return Array.from(ranks.values())
    }

    var ranks = convertMatchsToRanks(props.matchs)

    return <ul className="ranksList">
        <li className="rankItem"><span>#</span><span className="rankTeamName">Nom</span><span>Pts</span><span>Bc</span><span>Bc</span></li>
        {ranks.sort((a, b) => b.points - a.points).map((item, index) => <RankTableItem key={index} index={index} rank={item}/>)}
    </ul>
}

export default RankTable