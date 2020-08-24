import React from 'react';
import logo from './logo.svg';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Movies from './components/Movies'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));


const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" className={classes.title}>
            DEMO Streaming
          </Typography>
          <Button color="inherit" style={{ marginRight: 8 }}>Login</Button>
          <Button style={{ backgroundColor: 'black', color: 'white'}} variant="contained">Start Your Free Trial</Button>
        </Toolbar>
        <Toolbar style={{ backgroundColor: '#5b5b5b'}}>
          <Typography variant="body1" className={classes.title}>
            Popular Titles
          </Typography>
        </Toolbar>
      </AppBar>
      <Movies />
    </div>
  );
}

export default App;
