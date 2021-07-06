import useStyles from './style'
import Alert from '@material-ui/lab/Alert';


function SimpleAlerts() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Alert severity="error">Pokémon não encontrado</Alert>
    </div>
  );
}

export default SimpleAlerts