// Firebase obtained from the global context

const config = {
    apiKey: "AIzaSyCHW5zsxHBj9f_O5jq9NtP3mP9SrVoumXc",
    authDomain: "avalon2-aefa9.firebaseapp.com",
    databaseURL: "https://avalon2-aefa9.firebaseio.com",
    storageBucket: "avalon2-aefa9.appspot.com",
    messagingSenderId: "559346871867"
};

window.firebase.initializeApp(config);

export default window.firebase.database();

