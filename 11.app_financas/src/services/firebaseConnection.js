import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

let firebaseConfig = {
  apiKey: "AIzaSyCvsBWM8b_2lBLM-3HaySyo_Tmr0ZwGxrE",
  authDomain: "app-financas-41969.firebaseapp.com",
  projectId: "app-financas-41969",
  storageBucket: "app-financas-41969.appspot.com",
  messagingSenderId: "671900787820",
  appId: "1:671900787820:web:3e57e96d0df66f32f86449"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export default firebase