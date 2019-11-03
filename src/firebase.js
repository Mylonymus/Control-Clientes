import firebase from 'firebase'

const config = { 
    apiKey: "AIzaSyAFjfIu_WEhzDtueEPCEHlXXgIT9TcxEDA",
  authDomain: "control-clientes-8ddc6.firebaseapp.com",
  databaseURL: "https://control-clientes-8ddc6.firebaseio.com",
  projectId: "control-clientes-8ddc6",
  storageBucket: "control-clientes-8ddc6.appspot.com",
  messagingSenderId: "948896464546",
  appId: "1:948896464546:web:235170774f40ca11a7e1fb",
  measurementId: "G-DTNCLW0EBJ"
};
 
firebase.initializeApp(config); 

export const db = firebase.database();  
