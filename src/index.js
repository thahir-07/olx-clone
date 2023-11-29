import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import firebaseContext from './Store/firebaseContext'
import {firebase} from './Firebase/config'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <firebaseContext.Provider value={{firebase}}>
  <App />
  </firebaseContext.Provider>
    
  </React.StrictMode>

);

