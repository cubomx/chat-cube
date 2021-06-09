import React from 'react';
import { TextField, Grid } from '@material-ui/core';
// styles 
import './styles/Form.css';

const Form = ( ) => {
    return (
        <Grid container direction="column" spacing={6}>
            <TextField label="nickname" variant="outlined"/>
            <TextField label="nickname" variant="outlined" type="password"/>
        </Grid>
    )
}

export default Form;