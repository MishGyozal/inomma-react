import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import firebaseRed from "./FirebaseReduser";
import { firebaseReducer } from "react-redux-firebase";

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  firebaseReducer: firebaseRed,
});

export default rootReducer;
