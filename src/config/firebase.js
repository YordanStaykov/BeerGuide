import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

var firebaseConfig = {
    apiKey: "AIzaSyB6B9i5L85WxIpPZGourCygxxKnugzKq8g",
    authDomain: "beer-receipt-builder.firebaseapp.com",
    projectId: "beer-receipt-builder",
    storageBucket: "beer-receipt-builder.appspot.com",
    messagingSenderId: "366501364826",
    appId: "1:366501364826:web:bc45a161103ad051c78463"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const database = firebase.database();

export { auth, database };