export const firebaseContainerStyle = (theme) => {
  return {
    parentContainer: {
      margin: "30px 0",

      ["@media (max-width:780px)"]: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      },
    },
  };
};

export const AddUserStyle = (theme) => {
  return {
    containerGrid: {
      ["@media (max-width:780px)"]: {
        maxWidth: "100%",
      },
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: "25ch",
    },
    formControl: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "286px",
      boxShadow: "0px 4px 20px rgb(187 185 185 / 21%)",
      padding: "25px",
      ["@media (max-width:780px)"]: {
        marginBottom: "30px",
      },
    },
    myBtn: {
      color: "green",
      borderColor: "green",
      marginTop: "15px",

      "&:hover, &:focus": {
        color: "green",
        borderColor: "green",
      },
    },
  };
};

export const UpdateUserStyle = (theme) => {
  return {
    containerGrid: {
      ["@media (max-width:780px)"]: {
        maxWidth: "100%",
      },
    },

    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: "25ch",
    },
    formControl: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0px 4px 20px rgb(187 185 185 / 21%)",
      minHeight: "286px",
      padding: "25px",
      ["@media (max-width:780px)"]: {
        marginBottom: "30px",
      },
    },
    myBtn: {
      color: "#910dd4",
      borderColor: "#910dd4",
      marginTop: "15px",

      "&:hover, &:focus": {
        color: "#910dd4",
        borderColor: "#910dd4",
      },
    },
  };
};

export const UserDetailStyle = (theme) => {
  return {
    centDiv: {
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "100vh",
      fontFamily: "Roboto",
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: "18px",
      lineHeight: "20px",
      color: "#0D3127",
    },
    centPart: {
      justifyContent: "center",
      flexDirection: "column",
      paddingLeft: "30px",
      width: "50%",
      height: "50%",
      minWidth: "fit-content",
      boxShadow: "0px 4px 20px rgb(187 185 185 / 21%)",
    },
    ConBtn: {
      display: "flex",
      justifyContent: "center",
      paddingRight: "30px",
    },
    myBtn: {
      marginTop: "30px",
      textDecoration: "none",
      color: "#0D3127",
    },
    icon: {
      marginRight: "15px",
    },
  };
};

export const UserTableStyle = (theme) => {
  return {
    headGrid: {
      ["@media (max-width:780px)"]: {
        width: "100%",
        margin: "0 auto",
      },
    },
    tableParent: {
      ["@media (max-width:780px)"]: {
        width: "95%",
      },
    },
    isNotUser: {
      justifyContent: "center",
      alignItems: "center",
      height: "80px",
      fontFamily: "Roboto",
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: "18px",
      lineHeight: "20px",
      color: "#0D3127",
      boxShadow: "0px 4px 20px rgb(187 185 185 / 21%)",
    },
    delBtn: {
      color: "red",
    },
    updBtn: {
      color: "#910dd4",
      margin: "0 10px",
    },
    viewBtn: {
      color: "green",
    },
    linkView: {
      textDecoration: "none",
      borderColor: "green",
    },
  };
};

export const NavBarStyle = (theme) => {
  return {
    title: {
      marginRight: "20px",
    },
    link: {
      color: "white",
      textDecoration: "none",
    },
  };
};
