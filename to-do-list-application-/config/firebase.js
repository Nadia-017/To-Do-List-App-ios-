import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAp9XaUqS0_6wqRMF02D2a6yaMPJLblmi0",
  authDomain: "fir-test-74dc5.firebaseapp.com",
  projectId: "fir-test-74dc5",
  storageBucket: "fir-test-74dc5.appspot.com",
  messagingSenderId: "510604272103",
  appId: "1:510604272103:web:f6ebaa93e0b998e472dd42",
  measurementId: "G-VYVP9N5ZX0"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
