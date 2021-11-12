import firebase from 'firebase'
require('@firebase/firestore')
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGnZ3zBlpuTdF1qvLZZdqU1kfuzJs9P9E",
  authDomain: "e-library-e66a9.firebaseapp.com",
  projectId: "e-library-e66a9",
  storageBucket: "e-library-e66a9.appspot.com",
  messagingSenderId: "798296365078",
  appId: "1:798296365078:web:772fb4bcc4dac514217d37"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
export default firebase.firestore()