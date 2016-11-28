// Firebase obtained from the global context

const config = {
  apiKey: 'AIzaSyD6Q-Kd49j33K_pKcuiVV_YxNgvxT1iZvQ',
  authDomain: 'avalon-16347.firebaseapp.com',
  databaseURL: 'https://avalon-16347.firebaseio.com',
  storageBucket: '',
  messagingSenderId: 'YOUR_MESSAGING_ID'
};
window.firebase.initializeApp(config);

export default window.firebase.database();

