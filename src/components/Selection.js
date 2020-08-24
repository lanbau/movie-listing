import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import Avatar from '@material-ui/core/Avatar'
import MovieFilter from '@material-ui/icons/MovieFilter'
import Theaters from '@material-ui/icons/Theaters'
import movies from '../assets/sample.json'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom"
  
const useStyles = makeStyles((theme) => {
    return {
        media: {
        height: 0,
        paddingTop: '56.25%',
        link: {
          color: '#FFF',
          textDecoration: 'none'
        }
      },
    }
})

const Selection = () => {
    const classes = useStyles()
    const { entries = [], total } = movies || {}
    const seriesCount = entries.filter(({ programType }) => programType == 'series').length
    const moviesCount = entries.filter(({ programType }) => programType == 'movie').length
    return <>
        <Grid container spacing={2} style={{ display: 'flex', flexDirection: 'row', padding: 32 }}>
            <Grid item sm={4} style={{ textDecoration: 'none' }}>
                <Link to="/series" className={classes.link}>
                    <Card >
                        <CardHeader
                            avatar={
                            <Avatar>
                                <MovieFilter />
                            </Avatar>
                            }
                            title="Series"
                            subheader={`Total: ${seriesCount}`}
                        />
                        <CardMedia 
                            className={classes.media}
                            image="https://streamcoimg-a.akamaihd.net/000/167/0/1670-PosterArt-9b61ff8d9260436f911665f1312742bd.jpg" 
                        />
                    </Card>
                </Link>
            </Grid>
            <Grid item sm={4}>
                <Link to="/movies" className={classes.link}>
                    <Card>
                        <CardHeader
                            avatar={
                            <Avatar  >
                                <Theaters />
                            </Avatar>
                            }
                            title="Movies"
                            subheader={`Total: ${moviesCount}`}
                        />
                        <CardMedia 
                            className={classes.media}
                            image="https://streamcoimg-a.akamaihd.net/000/958/725/958725-PosterArt-96c5bbb6e15269f5b5cd9bc7801de1d9.jpg" 
                        />
                    </Card>
                </Link>
            </Grid>
        </Grid>
    </>
}

export default Selection