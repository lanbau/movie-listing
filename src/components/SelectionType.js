import React, { useEffect } from 'react'
import movies from '../assets/sample.json'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Collapse from '@material-ui/core/Collapse'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import { red } from '@material-ui/core/colors'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ShareIcon from '@material-ui/icons/Share'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import Toolbar from '@material-ui/core/Toolbar'
import Backdrop from '@material-ui/core/Backdrop'
import CircularProgress from '@material-ui/core/CircularProgress'
import DialogSelection from './DialogSelection'
import { useDispatch } from 'react-redux'
import { setCurrent } from '../store/actions'
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      padding: theme.spacing(4)
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9,
        cursor: 'pointer'
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
}))
const SelectionType = ({ type }) => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const { entries, total } = movies || {}
    const [loading, setLoading] = React.useState(false)
    const [openDialog, setOpenDialog] = React.useState(false)

    const handleOpenDialog = (item) => {
        setOpenDialog(true)
        dispatch(setCurrent({ ...item }))
    }

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1000)
        
    }, [type])

    const count = entries.filter(({ programType }) => programType == type).length
    
    return (<>
        <Toolbar style={{ backgroundColor: '#5b5b5b', color: 'white'}}>
          <Typography variant="body1" className={classes.title}>
            Popular Titles: { type } ( { count }/{total} ) 
          </Typography>
        </Toolbar>
        <Grid container className={classes.root} spacing={2}>
            { (entries || [])
                .filter(({ programType }) => programType == type )
                .map(item => {
                    const { title = '', description, images, releaseYear } = item
                    return (
                        <Grid item key={title} sm={4}>
                            <Card className={classes.root}>
                                <CardHeader
                                    avatar={
                                    <Avatar className={classes.avatar}>
                                        {title[0]}
                                    </Avatar>
                                    }
                                    {...{ title }}
                                    subheader={`Release Year: ${releaseYear}`}
                                />
                                <CardMedia
                                    className={classes.media}
                                    image={(images['Poster Art'] || {}).url}
                                    title="Paella dish"
                                    onClick={() => handleOpenDialog(item)}
                                />
                                <CardContent>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    )
            })}
        </Grid>
        <Backdrop className={classes.backdrop} open={loading} >
            <CircularProgress color="inherit" />
        </Backdrop>
        <DialogSelection openDialog={openDialog} setOpenDialog={setOpenDialog}/>
    </>
    )
}
export default SelectionType

