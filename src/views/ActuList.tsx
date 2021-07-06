import { Actu } from '../models/Actu'
import ActuListItem from './ActuListItem';
import Grid from '@material-ui/core/Grid';

class ActuListProps {
    actus: Array<Actu>
}

function ActuList(props: ActuListProps) {
    return <Grid
        container
        spacing={3}
        direction="row"
        justify="center"
        alignItems="center">
        {props.actus.map((item, index) => <Grid item xs={12} sm={6} md={4} lg={3} ><ActuListItem actu={item}/></Grid>)}
    </Grid>
}

export default ActuList