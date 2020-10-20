import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCyDHGruN8xp9eVLQMLnZvRfebsz0Xf0PI",
    authDomain: "school-chat-app-b3b2e.firebaseapp.com",
    databaseURL: "https://school-chat-app-b3b2e.firebaseio.com",
    projectId: "school-chat-app-b3b2e",
    storageBucket: "school-chat-app-b3b2e.appspot.com",
    messagingSenderId: "1015167689558",
    appId: "1:1015167689558:web:38f0fe084e2aa585c0acf7",
    measurementId: "G-2W8824YD6F"
});

const firestore = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth,provider};
export default firestore;