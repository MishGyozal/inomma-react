import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Button, FormControl, TextField } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { useAction } from "../Hooks/useAction";
import { AddUserStyle } from "../utils/styles";

const useStyles = makeStyles((theme) => AddUserStyle(theme));

const AddUser = (props) => {
  const [addFirstName, setAddFirstName] = useState("");
  const [addLastName, setAddLastName] = useState("");
  const [addAge, setAddAge] = useState("");

  const { AddNewUser, inputTxtAdd } = useAction();

  const handleAddUser = () => {
    if (
      !addFirstName.replace(/\s/g, "") ||
      !addLastName.replace(/\s/g, "") ||
      !addAge.replace(/\s/g, "")
    ) {
      inputTxtAdd();
      return;
    }
    let data = {
      FirstName: addFirstName,
      LastName: addLastName,
      Age: addAge,
    };
    AddNewUser(data);
    setAddFirstName("");
    setAddLastName("");
    setAddAge("");
  };

  const classes = useStyles();
  return (
    <Grid item xs={6} className={classes.containerGrid}>
      <Grid container direction="column" justify="center" alignItems="center">
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
              onChange={(e) => {
                setAddFirstName(e.target.value);
              }}
            />
            <TextField
              label=""
              required
              id="margin-normal"
              value={addLastName}
              className={classes.textField}
              helperText="Please Add LastName"
              margin="normal"
              onChange={(e) => {
                setAddLastName(e.target.value);
              }}
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
              onChange={(e) => {
                setAddAge(e.target.value);
              }}
            />
            <Button
              variant="outlined"
              type="submit"
              color="primary"
              className={classes.myBtn}
              onClick={() => {
                handleAddUser();
              }}
            >
              <AddIcon /> Add User
            </Button>
          </FormControl>
        </form>
      </Grid>
    </Grid>
  );
};

export default AddUser;
