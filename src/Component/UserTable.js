import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Paper,
  Grid,
  Button,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import UpdateIcon from "@material-ui/icons/Update";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { firestoreConnect } from "react-redux-firebase";
import { connect, useSelector } from "react-redux";
import { compose } from "redux";
import { Link } from "react-router-dom";
import { useAction } from "../Hooks/useAction";
import { UserTableStyle } from "../utils/styles";

const useStyles = makeStyles((theme) => UserTableStyle(theme));

const UserTable = (props) => {
  const store = useSelector((state) => state);

  const { UserInfo } = store.firestore.ordered;
  const { DeleteUser, editParametersSend } = useAction();

  const classes = useStyles();
  return (
    <Grid
      container
      item
      justify="center"
      alignItems="center"
      xs={12}
      spacing={6}
      className={classes.headGrid}
    >
      <Grid item xs={10} className={classes.tableParent}>
        <Grid>
          {UserInfo && UserInfo.length === 0 ? (
            <Box component="div" display="flex" className={classes.isNotUser}>
              You Dont have a User. Please Enter some User.
            </Box>
          ) : (
            <Box component="div" display="flex">
              <TableContainer component={Paper}>
                <Table size="small" aria-label="a dense table">
                  <TableHead>
                    <TableRow>
                      <TableCell>FirstName</TableCell>
                      <TableCell align="right">Last Name</TableCell>
                      <TableCell align="right">Age</TableCell>
                      <TableCell align="right"></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {UserInfo &&
                      UserInfo.map((u) => (
                        <TableRow key={u.id}>
                          <TableCell component="th" scope="row">
                            {u.FirstName}
                          </TableCell>
                          <TableCell align="right">{u.LastName}</TableCell>
                          <TableCell align="right">{u.Age}</TableCell>
                          <TableCell align="right">
                            <Link
                              to={"/user/" + u.id}
                              key={u.id}
                              className={classes.linkView}
                            >
                              <Button
                                variant="outlined"
                                color="inherit"
                                className={classes.viewBtn}
                              >
                                <VisibilityIcon /> View
                              </Button>
                            </Link>
                            <Button
                              variant="outlined"
                              color="default"
                              className={classes.updBtn}
                              onClick={() => editParametersSend(u)}
                            >
                              <UpdateIcon /> Update
                            </Button>
                            <Button
                              variant="outlined"
                              color="inherit"
                              className={classes.delBtn}
                              onClick={() => DeleteUser(u.id)}
                            >
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
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (state) => {
  return {
    userDatass: state.firestore.ordered.UserInfo,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect((ownProps) => [
    {
      collection: "UserInfo",
    },
  ])
)(UserTable);
