import React from "react";
import { connect, useSelector } from "react-redux";
import { Box, Button, Grid, makeStyles } from "@material-ui/core";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import { UserDetailStyle } from "../utils/styles";
import { Link } from "react-router-dom";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import DateRangeIcon from "@material-ui/icons/DateRange";
import BackspaceIcon from "@material-ui/icons/Backspace";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import HourglassEmptyIcon from "@material-ui/icons/HourglassEmpty";

const useStyles = makeStyles((theme) => UserDetailStyle(theme));

function UserDetail() {
  const classes = useStyles();
  const store = useSelector((state) => state);
  const regex = /(?<=user([\s\S]+?)).{0,}/gm;
  const str = window.location.href;
  let uId = regex.exec(str)[0];
  const allUser = store.firestore.data.UserInfo;
  let myUser = allUser ? allUser[uId] : null;

  if (myUser) {
    return (
      <Grid className={classes.centDiv} container spacing={3}>
        <Box className={classes.centPart} component="div" display="flex">
          <Box component="span" display="flex" alignItems="center">
            <AccountCircleIcon className={classes.icon} /> User Name:{" "}
            {myUser.FirstName}
          </Box>
          <Box component="span" display="flex" alignItems="center">
            <PersonOutlineIcon className={classes.icon} /> User LastName:
            {myUser.LastName}
          </Box>
          <Box component="span" display="flex" alignItems="center">
            <DateRangeIcon className={classes.icon} /> User Age:{myUser.Age}
          </Box>
          <Box
            component="div"
            display="flex"
            alignItems="center"
            className={classes.ConBtn}
          >
            <Link to="/" className={classes.myBtn}>
              <Button variant="outlined" color="inherit">
                <BackspaceIcon className={classes.icon} /> Back
              </Button>
            </Link>
          </Box>
        </Box>
      </Grid>
    );
  } else {
    return (
      <Grid className={classes.centDiv} container spacing={3}>
        <Box className={classes.centPart} component="div" display="flex">
          <Box component="p" display="flex" alignItems="center">
            <HourglassEmptyIcon className={classes.icon} /> Loading Project...
          </Box>
          <Box
            component="div"
            display="flex"
            alignItems="center"
            className={classes.ConBtn}
          >
            <Link to="/" className={classes.myBtn}>
              <Button variant="outlined" color="inherit">
                <BackspaceIcon className={classes.icon} /> Back
              </Button>
            </Link>
          </Box>
        </Box>
      </Grid>
    );
  }
}

export default compose(
  connect(null, null),
  firestoreConnect(() => [
    {
      collection: "UserInfo",
    },
  ])
)(UserDetail);
