import { Actu } from '../models/Actu'
import { makeStyles } from '@material-ui/core/styles'
import ActuListItem from './ActuListItem';

class ActuListProps {
    actus: Array<Actu>
}


const useStyles = makeStyles({
    root: {
      display: "flex",
      "flex-wrap": "wrap"
    },
  });

function ActuList(props: ActuListProps) {
    const classes = useStyles();

    return <div className={classes.root}>
        {props.actus.map((item, index) => <ActuListItem actu={item}/>)}
    </div>
}

export default ActuList