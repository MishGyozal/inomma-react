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
import { toast } from "react-toastify";

const initialState = {
  editUser: false,
};

const firebaseRed = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_USER:
      toast.success("User successfully added");
      return state;
    case ADD_USER_ERROR:
      toast.error("Error in user adding");
      return state;
    case DELL_USER:
      toast.success("User successfully delete");
      return state;
    case DELL_USER_ERROR:
      toast.error("Error in user deleting");
      return state;
    case UPDATE_USER:
      toast.success("User successfully update");
      return {
        ...state,
        editUser: false,
      };
    case UPDATE_USER_ERROR:
      toast.error("Error in user updating");
      return state;
    case EDIT_PARAMETERS_SEND:
      return {
        ...state,
        id: action.id,
        FirstName: action.FirstName,
        LastName: action.LastName,
        Age: action.Age,
        editUser: true,
      };
    case INPUT_UPDATE:
      return {
        ...state,
        id: action.id,
        FirstName: action.FirstName,
        LastName: action.LastName,
        Age: action.Age,
        editUser: true,
      };
    case INPUT_TEXT_ADD:
      toast.warn("Please fill in all shoulder lines");
      return state;
    default:
      return state;
  }
};

export default firebaseRed;
