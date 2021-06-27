import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid,Button, FormControl, TextField } from '@material-ui/core';
import UpdateIcon from '@material-ui/icons/Update';

const useStyles = makeStyles((theme) => ({
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '25ch',
      },
      formControl: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      },
  }));

const UpdateUser = (props) => {
    const classes = useStyles();
    return (
        <Grid item xs={6}>
        <Grid container 
           direction="column"
           justify="center"
           alignItems="center">
           <form>
           <FormControl className={classes.formControl}>
           <TextField
            label=""
            required
            id="margin-normal"
            value={props.updFirstName}
            className={classes.textField}
            helperText="Edit FirstName"
            margin="normal"
            onChange={(e)=>{props.setupdFirstName(e.target.value)}}
          />
          <TextField
            label=""
            required
            id="margin-normal"
            value={props.updLastName}
            className={classes.textField}
            helperText="Edit LastName"
            margin="normal"
            onChange={(e)=>{props.setupdLastName(e.target.value)}}
          />
          <TextField
            label=""
            required
            id="margin-normal"
            type="number"
            value={props.updAge}
            className={classes.textField}
            helperText="Edit Age"
            margin="normal"
            onChange={(e)=>{props.setupdAge(e.target.value)}}
          />
          <Button variant="outlined" color="primary"  onClick={()=>{ props.handleUpdateUser() }} >
          <UpdateIcon/>Update User
          </Button>
          </FormControl>
          </form>
        </Grid>
      </Grid>
    )
}

export default UpdateUser
