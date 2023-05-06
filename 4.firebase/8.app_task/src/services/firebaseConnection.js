import firebase from "firebase/app";
import 'firebase/auth'
import 'firebase/database'

let firebaseConfig = {
  apiKey: "AIzaSyCXZKQFw36P37Nipn6sX5_mU19qiyl3t9I",
  authDomain: "tarefas-15b0d.firebaseapp.com",
  projectId: "tarefas-15b0d",
  storageBucket: "tarefas-15b0d.appspot.com",
  messagingSenderId: "711129022334",
  appId: "1:711129022334:web:5854c4c30cc6d18457bd2f"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export default firebase