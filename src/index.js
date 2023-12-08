import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Context, {firebaseContext} from './Store/Context'
import {firebase} from './Firebase/config'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Context>
  <firebaseContext.Provider value={{firebase}}>
  <App />

  </firebaseContext.Provider>
 
 </Context>
  </React.StrictMode>

);

