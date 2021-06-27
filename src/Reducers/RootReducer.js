import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import firebaseReducer from "./FirebaseReduser";

const rootReducer = combineReducers({
    firebaseReducer: firebaseReducer,
    firestore: firestoreReducer
});

export default rootReducer;