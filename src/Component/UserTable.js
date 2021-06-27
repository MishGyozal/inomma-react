import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Paper,Grid,Button, Box, Table, TableBody, TableCell, TableContainer,TableHead,TableRow } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import UpdateIcon from '@material-ui/icons/Update';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { firestoreConnect } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { compose } from 'redux';


const useStyles = makeStyles((theme) => ({
   
      isNotUser: {
          justifyContent: 'center',
          alignItems: 'center',
          height: '80px',
          fontFamily: 'Roboto',
          fontStyle: 'normal',
          fontWeight: 'bold' ,
          fontSize: '18px',
          lineHeight: '20px',
          color: '#0D3127',
          boxShadow: '0px 4px 20px rgb(187 185 185 / 21%)'
      }
  }));

const UserTable = (props) => {
    const classes = useStyles();
    return (
        <Grid container item
  justify="center"
  alignItems="center"  xs={12}  spacing={6} >
      <Grid item xs={10}>
        <Grid>
            {
                props.userData.length === 0 ? <Box component="div" display="flex" className={classes.isNotUser}>You Dont have a User. Please Enter some User.</Box> 
                : <Box component="div" display="flex">
                <TableContainer component={Paper}>
      <Table  size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>FirstName</TableCell>
            <TableCell align="right">Last Name</TableCell>
            <TableCell align="right">Age</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.userData.map((u) => (
            <TableRow key={u.id}>
              <TableCell component="th" scope="row">
                {u.FirstName}
              </TableCell>
              <TableCell align="right">{u.LastName}</TableCell>
              <TableCell align="right">{u.Age}</TableCell>
              <TableCell align="right">
              <Button variant="outlined" color="inherit"  onClick={()=>{ console.log('Update') }} >
               <VisibilityIcon/> View
            </Button>
              <Button variant="outlined" color="default"  onClick={()=>{ props.handleUpdate(u) }} >
                <UpdateIcon/> Update
            </Button>
            <Button variant="outlined" color="inherit"  onClick={()=>{ props.handleDelete(u.id) }} >
            <DeleteIcon /> 
            Delete
            </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
                </Box>
            }
        </Grid>
        </Grid>
      </Grid>
    )
}

const mapStateToProps = (state) => {
  console.log('xxxxxxxxxxxx',state)
  return {
    userDatas:state.firebaseReducer
  }
}


export default  compose(
  connect(mapStateToProps),
  firestoreConnect(() => ['UserInfo'])
)(UserTable);
