import { TextField, Button } from "@material-ui/core";
import useStyles from './style';

function SearchItem({searchPokemon, setSearchPokemon, handleFindPokemon}) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <TextField 
                label="Pergunta pro pai aqui"
                value={searchPokemon}
                onChange={e => setSearchPokemon(e.target.value)}
                variant="outlined"
            />
            <Button 
                className={classes.button}
                variant="contained"
                color="secondary"
                onClick={handleFindPokemon}>
                Só dalhe
            </Button>
        </div>
    )
}

export default SearchItem;