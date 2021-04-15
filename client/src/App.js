import React, { useEffect } from "react";

// components
import Login from "./components/Login.js"
import Home from "./components/Home.js"

function App() {

  const [userID, setUserID] = React.useState('')
  const [userName, setUserName] = React.useState('')

  // gets local storage info, if exists, set these states. Will set nothing if not there, which renders the Login page below.
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('userID'))
    if (userData) {
      setUserID(userData.userID)
      setUserName(userData.user)
    }
  }, [userID])

  // returned from Login to set right away
  function handleNewUser(userID, userName) {
    setUserID(userID)
    setUserName(userName)
  }

  return (
    <>
      {userID === '' ? <Login onChange={handleNewUser}/> : <></>}
      {userID ? <Home user={userName} userid={userID} /> : <></>}
      
      <p style={{ margin: '30px', color: "white"}}>Created by <a href="https://github.com/rasputinforever">Erik Portillo</a>, 2021</p>
    </>
  );
}

export default App;
