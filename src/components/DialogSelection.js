import React, { useState, useEffect } from 'react'
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useSelector } from 'react-redux'
import axios from 'axios'

const DialogSelection = ({ openDialog, setOpenDialog }) => {

    const handleCloseDialog = () => {
        setOpenDialog(false);
    }
    const { title = '', description, programType, images = {}, releaseYear } = useSelector(state => state.currentItem) || {}
    const [funFact, setFunFact] = useState('')
    const [error, setError] = useState(undefined)
    useEffect(() => {
        if (releaseYear) {
            axios.get(`http://numbersapi.com/${releaseYear}/year`)
            .then(res => {
                console.log(res)
                setFunFact(res.data)
            })
            .catch( (error = {}) => {
                if (Object.keys(error).length) {
                    setError((error.toJSON() || {}).message)
                }
            })
        }
    }, [title])
    
    return (
        <Dialog onClose={handleCloseDialog} aria-labelledby="customized-dialog-title" open={openDialog}>
            <DialogTitle id="customized-dialog-title" onClose={handleCloseDialog}>
                {title} - {releaseYear}
            </DialogTitle>
            <DialogContent dividers>
            <Typography gutterBottom>
               {description}
            </Typography>
            <Typography gutterBottom>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
                lacus vel augue laoreet rutrum faucibus dolor auctor.
            </Typography>
            <Typography gutterBottom>
                Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
                scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
                auctor fringilla.
            </Typography>
            <Grid container spacing={2} style={{ marginTop: 16 }}>
                <Grid item >
                    <img style={{ width: '100%' }} src={(images['Poster Art'] || {}).url}/>
                </Grid>
               

            </Grid>
            <Grid item >
                    <h1>Fun Facts</h1>
                    <div>
                        {funFact}
                        {error}
                    </div>
                </Grid>
                
            </DialogContent>
            <DialogActions>
            <Button autoFocus onClick={handleCloseDialog} color="primary">
                Close
            </Button>
            </DialogActions>
        </Dialog>
    )
}
export default DialogSelection