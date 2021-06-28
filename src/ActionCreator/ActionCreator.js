import {
  ADD_NEW_USER,
  ADD_USER_ERROR,
  DELL_USER,
  DELL_USER_ERROR,
  EDIT_PARAMETERS_SEND,
  INPUT_TEXT_ADD,
  INPUT_UPDATE,
  UPDATE_USER,
  UPDATE_USER_ERROR,
} from "../ActionTypes/actionTypes";

export const AddNewUser = (user) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("UserInfo")
      .add({
        FirstName: user.FirstName,
        LastName: user.LastName,
        Age: user.Age,
      })
      .then(() => {
        dispatch({
          type: ADD_NEW_USER,
          FirstName: user.FirstName,
          LastName: user.LastName,
          Age: user.Age,
        });
      })
      .catch((err) => {
        dispatch({ type: ADD_USER_ERROR, err });
      });
  };
};

export const DeleteUser = (id) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("UserInfo")
      .doc(id)
      .delete()
      .then(() => {
        dispatch({
          type: DELL_USER,
        });
      })
      .catch((err) => {
        dispatch({ type: DELL_USER_ERROR, err });
      });
  };
};

export const UpdateUser = (user) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("UserInfo")
      .doc(user.id)
      .update({
        FirstName: user.FirstName,
        LastName: user.LastName,
        Age: user.Age,
      })
      .then(() => {
        dispatch({
          type: UPDATE_USER,
        });
      })
      .catch((err) => {
        dispatch({ type: UPDATE_USER_ERROR, err });
      });
  };
};

export const editParametersSend = (user) => {
  return {
    type: EDIT_PARAMETERS_SEND,
    FirstName: user.FirstName,
    LastName: user.LastName,
    Age: user.Age,
    id: user.id,
  };
};

export const inputUpdate = (user, type, newVal) => {
  if (type === "FirstName") {
    return {
      type: INPUT_UPDATE,
      FirstName: newVal,
      LastName: user.LastName,
      Age: user.Age,
      id: user.id,
    };
  } else if (type === "LastName") {
    return {
      type: INPUT_UPDATE,
      FirstName: user.FirstName,
      LastName: newVal,
      Age: user.Age,
      id: user.id,
    };
  } else if (type === "Age") {
    return {
      type: INPUT_UPDATE,
      FirstName: user.FirstName,
      LastName: user.LastName,
      Age: newVal,
      id: user.id,
    };
  }
};

export const inputTxtAdd = () => {
  return {
    type: INPUT_TEXT_ADD,
  };
};
