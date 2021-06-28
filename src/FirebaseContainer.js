import React from "react";
import Grid from "@material-ui/core/Grid";
import AddUser from "./Component/AddUser";
import UpdateUser from "./Component/UpdateUser";
import UserTable from "./Component/UserTable";
import { firebaseContainerStyle } from "./utils/styles";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => firebaseContainerStyle(theme));

function FirebaseContainer(props) {
  const classes = useStyles();
  return (
    <>
      <Grid container className={classes.parentContainer}>
        <AddUser />
        <UpdateUser />
      </Grid>
      <UserTable />
    </>
  );
}

export default FirebaseContainer;
