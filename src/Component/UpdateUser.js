import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Button, FormControl, TextField } from "@material-ui/core";
import UpdateIcon from "@material-ui/icons/Update";
import { useSelector } from "react-redux";
import { useAction } from "../Hooks/useAction";
import { UpdateUserStyle } from "../utils/styles";

const useStyles = makeStyles((theme) => UpdateUserStyle(theme));

const UpdateUser = () => {
  const classes = useStyles();
  const store = useSelector((state) => state);
  let activeEditUser = store.firebaseReducer.editUser;
  let { id, FirstName, LastName, Age } = store.firebaseReducer;

  const user = {
    FirstName,
    LastName,
    Age,
    id,
  };

  const { UpdateUser, inputUpdate, inputTxtAdd } = useAction();

  const handleUpdateUser = () => {
    if (
      !user.FirstName.replace(/\s/g, "") ||
      !user.LastName.replace(/\s/g, "") ||
      !user.Age.replace(/\s/g, "")
    ) {
      inputTxtAdd();
      return;
    }

    UpdateUser(user);
    inputUpdate(user, "FirstName", "");
    inputUpdate(user, "LastName", "");
    inputUpdate(user, "Age", "");
  };

  return (
    <Grid item xs={6} className={classes.containerGrid}>
      <Grid container direction="column" justify="center" alignItems="center">
        <form>
          {activeEditUser ? (
            <FormControl className={classes.formControl}>
              <TextField
                label=""
                required
                id="margin-normal"
                value={user.FirstName}
                className={classes.textField}
                helperText="Edit FirstName"
                margin="normal"
                onChange={(e) => {
                  inputUpdate(user, "FirstName", e.target.value);
                }}
              />
              <TextField
                label=""
                required
                id="margin-normal"
                value={user.LastName}
                className={classes.textField}
                helperText="Edit LastName"
                margin="normal"
                onChange={(e) => {
                  inputUpdate(user, "LastName", e.target.value);
                }}
              />
              <TextField
                label=""
                required
                id="margin-normal"
                type="number"
                value={user.Age}
                className={classes.textField}
                helperText="Edit Age"
                margin="normal"
                onChange={(e) => {
                  inputUpdate(user, "Age", e.target.value);
                }}
              />
              <Button
                className={classes.myBtn}
                variant="outlined"
                color="primary"
                onClick={() => {
                  handleUpdateUser();
                }}
              >
                <UpdateIcon />
                Update User
              </Button>
            </FormControl>
          ) : (
            <FormControl className={classes.formControl}>
              <TextField
                label=""
                required
                id="margin-normal"
                disabled
                value=""
                className={classes.textField}
                helperText="Edit FirstName"
                margin="normal"
              />
              <TextField
                label=""
                required
                id="margin-normal"
                disabled
                value=""
                className={classes.textField}
                helperText="Edit LastName"
                margin="normal"
              />
              <TextField
                label=""
                required
                id="margin-normal"
                type="number"
                disabled
                value=""
                className={classes.textField}
                helperText="Edit Age"
                margin="normal"
              />
              <Button
                variant="outlined"
                color="primary"
                disabled
                onClick={() => {
                  handleUpdateUser();
                }}
              >
                <UpdateIcon />
                Update User
              </Button>
            </FormControl>
          )}
        </form>
      </Grid>
    </Grid>
  );
};

export default UpdateUser;
