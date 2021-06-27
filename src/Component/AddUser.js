import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid,Button, FormControl, TextField } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { AddNewUser } from '../Actions/Actions';
import { connect } from 'react-redux';
import firebase from '../firebaseFunc';

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

  

const AddUser = (props) => {

  const [addFirstName, setAddFirstName] = useState('');
  const [addLastName, setAddLastName] = useState('');
  const [addAge, setAddAge] = useState('');

  const handleAddUser = () => {
    
    if(!addFirstName.replace(/\s/g, '') || !addLastName.replace(/\s/g, '') || !addAge.replace(/\s/g, '')){
      return;
    }
    const fireStore = firebase.database().ref('/UserInfo')
    let data = {
        FirstName:addFirstName,
        LastName:addLastName,
        Age:addAge
    }
    fireStore.push(data);
    props.AddNewUser(data);
    setAddFirstName('');
    setAddLastName('');
    setAddAge('');
    console.log(fireStore,'HHHHHHHHHHHHHHHHH',props)
}

  
console.log(props,'ccccccccaaaaaaasssssssssddddddd')
    const classes = useStyles();
    return (
        <Grid item  xs={6}>
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
              value={addFirstName}
              className={classes.textField}
              helperText="Please Add FirstName"
              margin="normal"
              onChange={(e)=>{setAddFirstName(e.target.value)}}
            />
            <TextField
              label=""
              required
              id="margin-normal"
              value={addLastName}
              className={classes.textField}
              helperText="Please Add LastName"
              margin="normal"
              onChange={(e)=>{setAddLastName(e.target.value)}}
            />
            <TextField
              label=""
              required
              id="margin-normal"
              type="number"
              value={addAge}
              className={classes.textField}
              helperText="Please Add Age"
              margin="normal"
              onChange={(e)=>{setAddAge(e.target.value)}}
            />
            <Button variant="outlined" type="submit" color="primary"  onClick={()=>{ handleAddUser() }} >
                <AddIcon/> Add User
            </Button>
            </FormControl>
            </form>
          </Grid>
        </Grid>
    )
}

const mapStateToProps = (state) => {
  console.log(state,'MMMMMMMm')
  return {
      users: state.firebaseReducer,
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    AddNewUser: (user) => dispatch(AddNewUser(user))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(AddUser) 
