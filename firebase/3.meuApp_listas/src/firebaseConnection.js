import firebase from 'firebase/app';
import 'firebase/database';

let firebaseConfig = {
  apiKey: "AIzaSyDlPOPHosB0hv-ms-iPHvQFuCZR1ljRwU0",
  authDomain: "meuappreactnative-25f8f.firebaseapp.com",
  databaseURL: "https://meuappreactnative-25f8f-default-rtdb.firebaseio.com",
  projectId: "meuappreactnative-25f8f",
  storageBucket: "meuappreactnative-25f8f.appspot.com",
  messagingSenderId: "651668342847",
  appId: "1:651668342847:web:8fa813bccd419ce654908a",
  measurementId: "G-X4YWQJ2GEX"
};

if(!firebase.apps.length){
  //Abrir minha conexao
  firebase.initializeApp(firebaseConfig);
}

export default firebase;