import { Provider } from "react-redux";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import FirebaseContainer from "./FirebaseContainer";
import Store from "./Store/Store";
import firebase from "./firebaseFunc";
import { createFirestoreInstance } from "redux-firestore";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import UserDetail from "./Component/UserDetail";
import AuthIsLoaded from "./Component/AuthIsLoaded";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavBar from "./Component/NavBar";

const store = Store;

const rrfProps = {
  firebase,
  config: {},
  dispatch: store.dispatch,
  createFirestoreInstance: createFirestoreInstance,
};

function App() {
  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <BrowserRouter>
          <ToastContainer />
          <AuthIsLoaded>
            <div className="App">
              <NavBar />
              <Switch>
                <Route exact path="/" component={FirebaseContainer} />
                <Route exact path="/user/:id" component={UserDetail} />
              </Switch>
            </div>
          </AuthIsLoaded>
        </BrowserRouter>
      </ReactReduxFirebaseProvider>
    </Provider>
  );
}

export default App;
