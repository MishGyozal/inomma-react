import { getFirebase } from "react-redux-firebase";
import { applyMiddleware, compose, createStore } from "redux";
import { getFirestore, reduxFirestore } from "redux-firestore";
import thunk from "redux-thunk";
import rootReducer from "../Reducers/RootReducer";
import firebaseConf from '../firebaseFunc'



const Store = createStore(rootReducer, 
    compose(
        applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})),
        reduxFirestore(firebaseConf),
        )
    );

export default Store;