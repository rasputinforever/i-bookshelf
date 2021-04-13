import React, { useEffect } from "react";
import Login from "./components/landingpage/login";
import { useAuthState } from "react-firebase-hooks/auth";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "./utils/fireUtil";
import postUser from "./utils/userApiPost.js";


const auth = firebase.auth();

function App() {
  const [user] = useAuthState(auth);
  console.log(user);
  if (user) {
    postUser(user);
  }
  useEffect(() => {}, []);

  return (
    <div>
      <h2>Hello</h2>
    </div>
  );
}

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };
  return (
    <>
      <Login login={signInWithGoogle} />
    </>
  );
}

export default App;
