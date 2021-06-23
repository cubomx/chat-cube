import React from 'react';
import { TextField, Grid } from '@material-ui/core';
// styles 
import './styles/Form.css';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    input: {
        margin: '10px 0px',
    },
    
});


const Form = ( ) => {
    const classes = useStyles();
    return (
        <Grid container direction="column" spacing={6}>
            <TextField className={classes.input} label="nickname" variant="outlined"/>
            <TextField className={classes.input} label="password" variant="outlined" type="password"/>
        </Grid>
    )
}

export default Form;