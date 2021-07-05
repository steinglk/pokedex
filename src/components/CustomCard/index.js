import React from 'react';
import useStyles from './style'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

function CustomCard() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
  
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

  return (
    <Card className={classes.root}>
      <CardHeader title="Pikachu" className={classes.cardHeader}/>
      <CardMedia
        component="img"
        className={classes.media}
        image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/132.png"
        title="Pikachu"
      />
      <CardContent>
        <Typography variant="h6" >
          Habilidades
        </Typography>
      </CardContent>
    </Card>
  );
}

export default CustomCard;