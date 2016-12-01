// Firebase obtained from the global context

const config = {
  apiKey: 'AIzaSyD6Q-Kd49j33K_pKcuiVV_YxNgvxT1iZvQ',
  authDomain: 'avalon-16347.firebaseapp.com',
  databaseURL: 'https://avalon-16347.firebaseio.com',
  storageBucket: 'avalon-16347.appspot.com',
  messagingSenderId: '861296590128'
};
window.firebase.initializeApp(config);

export default window.firebase.database();

