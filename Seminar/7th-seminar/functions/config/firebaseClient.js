const { initializeApp } = require('firebase/app');
const { getAuth } = require('firebase/auth');

const firebaseConfig = {
  apiKey: 'AIzaSyD15eespE_wxVixjsmn7ZUn-TDcUaLAqDw',
  authDomain: 'wesopt29-6377c.firebaseapp.com',
  projectId: 'wesopt29-6377c',
  storageBucket: 'wesopt29-6377c.appspot.com',
  messagingSenderId: '592511953235',
  appId: '1:592511953235:web:cb41cc0c723420463719a6',
  measurementId: 'G-6SMLZ9HN0J',
};

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);

module.exports = { firebaseApp, firebaseAuth, firebaseConfig };
