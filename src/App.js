import React from 'react'
import './App.css'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import SelectionType from './components/SelectionType'
import Selection from './components/Selection'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

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
  link: {
    color: '#FFF',
    textDecoration: 'none'
  }
}))


const App = () => {
  const classes = useStyles()
  return (    
    <Router>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              DEMO Streaming
            </Typography>
            <Link to="/" className={classes.link} activeStyle={{color: 'red'}}>
              <Button color="inherit" style={{ marginRight: 8 }}>Home</Button>
            </Link>
            <Link to="/series" className={classes.link}  activeStyle={{color: 'red'}}>
              <Button color="inherit" style={{ marginRight: 8 }}>Series</Button>
            </Link>
            <Link to="/movies" className={classes.link}  activeStyle={{color: 'red'}}>
              <Button color="inherit" style={{ marginRight: 8 }}>Movies</Button>
            </Link>
          </Toolbar>
        </AppBar>
      </div>
      <Switch>
          <Route path="/series">
            <SelectionType type="series" />
          </Route>
          <Route path="/movies">
            <SelectionType type="movie" />
          </Route>
          <Route path="/">
            <Selection />
          </Route>
        </Switch>
    </Router>
  )
}


export default App
