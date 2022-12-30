import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { initializeApp } from "firebase/app";
import "bootstrap/dist/css/bootstrap.min.css";

const firebaseConfig = {
  apiKey: "AIzaSyAtk5ksUZedC-L8svQfsGWW5ckteUCuHhA",
  authDomain: "coderhouse-proyectomangas.firebaseapp.com",
  projectId: "coderhouse-proyectomangas",
  storageBucket: "coderhouse-proyectomangas.appspot.com",
  messagingSenderId: "384688981171",
  appId: "1:384688981171:web:7142e5d54833ebc4c89cc6",
  measurementId: "G-MQ4797ZBFT"
};


initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
