import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import firebaseRed from "./FirebaseReduser";

const rootReducer = combineReducers({
    firebaseReducer: firebaseRed,
    firestore: firestoreReducer
});

export default rootReducer;