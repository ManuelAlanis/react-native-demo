import * as firebase from 'firebase';
import 'firebase/firestore';

const config = {
    apiKey: 'AIzaSyABVaCF2l8XTtymRpFttfx6LBmqvMRPzLw',
    authDomain: 'authentication-a5265.firebaseapp.com',
    databaseURL: 'https://authentication-a5265.firebaseio.com',
    projectId: 'authentication-a5265',
    appId: 'bdda3018bb58ca0a',
    storageBucket: 'authentication-a5265.appspot.com',
    messagingSenderId: '903384301428'
};

const Firebase = firebase.initializeApp(config);

const db = firebase.firestore();

db.collection("products").add({
    first: "Ada",
    last: "Lovelace",
    born: 1815
})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});
// const settings = { timestampInSnapshot: true };
// firestore.settings(settings);

export default Firebase;
