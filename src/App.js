import { Provider } from 'react-redux';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import './App.css';
import FirebaseContainer from './FirebaseContainer';
import Store from './Store/Store';
import firebase from 'firebase';
import firebaseConf from './firebaseFunc'

const store = Store;
window.store = store;

const rrfProps = {
  firebase,
  config: firebaseConf,
  dispatch: store.dispatch
  }

function App() {
  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <div className="App">
          <FirebaseContainer/>
        </div>
     </ReactReduxFirebaseProvider>
    </Provider>

  );
}

export default App;
