import React, { useEffect, useState } from 'react'
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import firebase from './firebaseFunc';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import DeleteIcon from '@material-ui/icons/Delete';
import UpdateIcon from '@material-ui/icons/Update';
import VisibilityIcon from '@material-ui/icons/Visibility';
import AddIcon from '@material-ui/icons/Add';
import AddUser from './Component/AddUser';
import UpdateUser from './Component/UpdateUser';
import UserTable from './Component/UserTable';
import { connect } from 'react-redux';
import { AddNewUser } from './Actions/Actions';
import { bindActionCreators } from 'redux';
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
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

function FirebaseContainer(props) {

    console.log(props,'cccccccccaaaaaaaaaa')

    const classes = useStyles();
    const [addFirstName, setAddFirstName] = useState('');
    const [addLastName, setAddLastName] = useState('');
    const [addAge, setAddAge] = useState('');
    const [updFirstName, setupdFirstName] = useState('');
    const [updLastName, setupdLastName] = useState('');
    const [updAge, setupdAge] = useState('');
    const [userData, setUserData] = useState([]);
    const [userId, setUserId] = useState([]);

    useEffect(()=>{
        const fireStore = firebase.database().ref('/UserInfo')
        fireStore.on('value',(response)=>{
            const data = response.val();
            let userInfo = [];
            for(let id in data){
                userInfo.push({
                    id:id,
                    FirstName: data[id].FirstName,
                    LastName: data[id].LastName,
                    Age: data[id].Age,
                });
            }
            setUserData(userInfo)
        })
    }, [])

    const handleAddUser = () => {
        const fireStore = firebase.database().ref('/UserInfo')
        let data = {
            FirstName:addFirstName,
            LastName:addLastName,
            Age:addAge
        }
        fireStore.push(data);
        setAddFirstName('');
        setAddLastName('');
        setAddAge('');
        console.log(fireStore)
    }

    const handleUpdateUser = () => {
        const fireStore = firebase.database().ref('/UserInfo').child(userId);
        fireStore.update({
            FirstName: updFirstName,
            LastName: updLastName,
            Age: updAge,
        });
        setupdFirstName('');
        setupdLastName('');
        setupdAge('');
    }

    const handleUpdate = (user) => {
        setupdFirstName(user.FirstName);
        setupdLastName(user.LastName);
        setupdAge(user.Age);
        setUserId(user.id);
    }

    const handleDelete = (id) => {
    
        const fireStore = firebase.database().ref('/UserInfo').child(id);
        fireStore.remove();
    
    }


    return (
    <>
      <Grid container spacing={3}>
        <AddUser setAddFirstName={setAddFirstName} 
        setAddLastName={setAddLastName} setAddAge={setAddAge}
        handleAddUser={handleAddUser} addFirstName={addFirstName}
        addLastName={addLastName} addAge={addAge} />
        <UpdateUser setupdFirstName={setupdFirstName} 
        setupdLastName={setupdLastName} setupdAge={setupdAge}
        handleUpdateUser={handleUpdateUser} updFirstName={updFirstName}
        updLastName={updLastName} updAge={updAge} />
      </Grid>
      <UserTable handleUpdate={handleUpdate} handleDelete={handleDelete} userData={userData} />
        </>
    )
}


const mapStateToProps = (state) => {
    console.log(state,'MMMMMMMm')
    return {
        users: state.firebaseReducer,
    }
}

const mapDispatchToProps =  (dispatch) => {
    return {
        addNewUser: bindActionCreators(AddNewUser, dispatch)
    }
}

// export default connect(mapStateToProps, mapDispatchToProps)(Chat) ;

export default connect(mapStateToProps,mapDispatchToProps)(FirebaseContainer); 
