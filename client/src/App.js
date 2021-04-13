import React, { useEffect } from "react";

import Login from "./components/Login.js"

function App() {
  const [userID, setUserID] = React.useState('')

  useEffect(() => {
    setUserID(localStorage.getItem('userID'))
  }, [userID])

  function handleNewUser(user) {
    setUserID(user)
  }

  return (
    <>
      {!userID ? <Login onChange={handleNewUser}/> : <></>}
      {userID ? <h1>You're Logged In!</h1> : <></>}
    </>
  );
}

export default App;
