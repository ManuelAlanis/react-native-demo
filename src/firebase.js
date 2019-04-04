import firebase from 'firebase';

const config = {
    apiKey: 'AIzaSyABVaCF2l8XTtymRpFttfx6LBmqvMRPzLw',
    authDomain: 'authentication-a5265.firebaseapp.com',
    databaseURL: 'https://authentication-a5265.firebaseio.com',
    projectId: 'authentication-a5265',
    storageBucket: 'authentication-a5265.appspot.com',
    messagingSenderId: '903384301428'
};

const Firebase = firebase.initializeApp(config);

export default Firebase;
