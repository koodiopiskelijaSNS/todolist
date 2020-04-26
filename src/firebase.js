  import * as firebase from 'firebase/app';
  import "firebase/firestore";
  
var firebaseConfig = {
    apiKey: "AIzaSyCIzGKe_Gk8OL7Bd4baP-1wB5smWlqf3rI",
    authDomain: "todolist-ec691.firebaseapp.com",
    databaseURL: "https://todolist-ec691.firebaseio.com",
    projectId: "todolist-ec691",
    storageBucket: "todolist-ec691.appspot.com",
    messagingSenderId: "255836783807",
    appId: "1:255836783807:web:3adb3683262f4ce082f20a"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
