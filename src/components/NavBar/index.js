import React from 'react';
import useStyles from './style'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.toolbar}>
        <Toolbar>
          <Typography variant="h6" noWrap className={classes.title}>
            Pokédex
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default NavBar;