import React, { useEffect } from "react";

// components
import Login from "./components/Login.js"
import Home from "./components/Home.js"


function App() {
  const [userID, setUserID] = React.useState('')
  const [userName, setUserName] = React.useState('')

  useEffect(() => {
    setUserID(localStorage.getItem('userID'))
  }, [userID])

  function handleNewUser(userID, userName) {
    setUserID(userID)
    setUserName(userName)
  }

  return (
    <>
      {!userID ? <Login onChange={handleNewUser}/> : <></>}
      {userID ? <Home user={userName} userid={userID} /> : <></>}
    </>
  );
}

export default App;
