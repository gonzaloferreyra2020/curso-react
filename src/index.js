import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwF5YmSugZCpCmkwzX5eY4JYatLN0tbUc",
  authDomain: "curso-react-7d751.firebaseapp.com",
  projectId: "curso-react-7d751",
  storageBucket: "curso-react-7d751.appspot.com",
  messagingSenderId: "1049389621903",
  appId: "1:1049389621903:web:5967d816a2442fcb3486fa"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
