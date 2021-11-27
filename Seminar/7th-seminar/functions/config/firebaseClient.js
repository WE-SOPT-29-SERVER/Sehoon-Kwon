const { initializeApp } = require('firebase/app');
const { getAuth } = require('firebase/auth');

const firebaseConfig = {
  apiKey: 'AIzaSyD15eespE_wxVixjsmn7ZUn-TDcUaLAqDw',
  authDomain: 'wesopt29-6377c.firebaseapp.com',
  projectId: 'wesopt29-6377c',
  storageBucket: 'wesopt29-6377c.appspot.com',
  messagingSenderId: '592511953235',
  appId: '1:592511953235:web:d41213994e343bac3719a6',
  measurementId: 'G-R5DNTSVRXY',
};

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);

module.exports = { firebaseApp, firebaseAuth, firebaseConfig };
