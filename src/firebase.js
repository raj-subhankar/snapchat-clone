import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDUj-hnk1ZZ2F89G0OYH9fun83dYz9Sa-8",
    authDomain: "snapchat-clone-94df1.firebaseapp.com",
    projectId: "snapchat-clone-94df1",
    storageBucket: "snapchat-clone-94df1.appspot.com",
    messagingSenderId: "1048559591390",
    appId: "1:1048559591390:web:760a9229988599ee4d074f"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebaseApp.auth()
  const storage = firebase.storage()
  const provider = new firebase.auth.GoogleAuthProvider()

  export { db, auth, storage, provider }