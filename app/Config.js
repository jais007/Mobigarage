
// Config file
import * as firebase from "firebase";
const config = {
    apiKey: "AIzaSyAy89Ifs6IiHrGxWtKskDb01pA-D0X9hDg",
    authDomain: "fir-8c773.firebaseapp.com",
    databaseURL: "https://fir-8c773.firebaseio.com",
    projectId: "fir-8c773",
    storageBucket: "fir-8c773.appspot.com",
    messagingSenderId: "228755533633",
    appId: "1:228755533633:web:391958098648479a2a7bc0"
  };

export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();