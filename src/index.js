import React from 'react';
import ReactDOM from 'react-dom/client';
import './CSS/index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'
import ProviderLayer from './ProviderLayer';
import { FirebaseAppProvider } from 'reactfire';

const firebaseConfig = {
  apiKey: "AIzaSyCPGxSJ7CnJc8bhXWELy9hqIWYXW_lwy-w",
  authDomain: "marvel-ous-shopping.firebaseapp.com",
  projectId: "marvel-ous-shopping",
  storageBucket: "marvel-ous-shopping.appspot.com",
  messagingSenderId: "637839660293",
  appId: "1:637839660293:web:141506202b81dffdf8136c"
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig = {firebaseConfig}>
      <BrowserRouter>
        <ProviderLayer />
      </BrowserRouter>
    </FirebaseAppProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
