import firebase from "firebase"

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyAKVT_iFW8uyGlmjxeY5nXj6HXpdTJlVGk",
        authDomain: "messenger-clone-d9e91.firebaseapp.com",
        databaseURL: "https://messenger-clone-d9e91.firebaseio.com",
        projectId: "messenger-clone-d9e91",
        storageBucket: "messenger-clone-d9e91.appspot.com",
        messagingSenderId: "594630385085",
        appId: "1:594630385085:web:9887ed39361afec6bf46d4",
        measurementId: "G-1CSMR0GNT9"
});

const db = firebaseApp.firestore();
export default db;