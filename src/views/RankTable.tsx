import { Match } from '../models/Match'
import { Rank } from '../models/Rank'
import { makeStyles } from '@material-ui/core/styles';
import { DataGrid, GridCellParams } from '@material-ui/data-grid';
import classes from '*.module.css';

class RankTableProps {
    matchs: Array<Match>
    
}
const useStyles = makeStyles({
    grid: {
        '& .MuiDataGrid-footer': {
            display: 'none'
        }
    },
  });

const columns = [
    { field: 'position', headerName: '#', type: 'number', width: 90 },
    { 
        field: 'logo_url', 
        headerName: '#', 
        sortable: false, 
        width: 150, 
        renderCell: (params: GridCellParams) => (<img alt="Logo club" src={params.value?.toString()} />)
    },
    { field: 'nom', headerName: 'Equipe', width: 150 },
    { field: 'points', headerName: 'Points', type: 'number', width: 100 },
    { field: 'bp', headerName: 'BP', type: 'number', width: 100 },
    { field: 'bc', headerName: 'BC', type: 'number', width: 100 }
  ];

function RankTable(props: RankTableProps) {
    const classes = useStyles();
    
    var convertMatchsToRanks = function(m: Array<Match>): Array<Rank> {
        var ranks = new Map<String, Rank>()
        for (var match of m) {
            if(ranks.get(match.domicile.nom) == null) {
                ranks.set(match.domicile.nom, new Rank())
                ranks.get(match.domicile.nom)!.nom = match.domicile.nom
                ranks.get(match.domicile.nom)!.logo_url = match.domicile.logo_url
            }
            if(ranks.get(match.exterieur.nom) == null) {
                ranks.set(match.exterieur.nom, new Rank())
                ranks.get(match.exterieur.nom)!.nom = match.exterieur.nom
                ranks.get(match.exterieur.nom)!.logo_url = match.exterieur.logo_url
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
        return Array.from(ranks.values()).sort((a, b) => b.points - a.points).map((item, index) => {
            item.position = index;
            item.id = index;
            return item;
        })
    }

    var ranks = convertMatchsToRanks(props.matchs)

    return <DataGrid className={classes.grid} autoHeight 
                rows={ranks} 
                columns={columns.map((column) => ({
                        ...column,
                        sortable: false,
                    }))}
                rowsPerPageOptions={[]} />
}

export default RankTable