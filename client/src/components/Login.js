import React from 'react'

import API from '../utils/API.js'

import { Button, Form, Header, Icon } from 'semantic-ui-react'

function Login({ onChange }) {
    
    const [userName, setUserName] = React.useState('')

    function handleSubmit(){
        console.log("You clicked it!", userName)
        API.postUser(userName)
        .then((data) => {
            const newUser = JSON.stringify({
                user: userName,
                userID: data.data
            })
            localStorage.setItem('userID', newUser);
            onChange(data.data, userName)
        }) 
    }

    function handleInputChange(e){
        setUserName(e.target.value)
    }

    return (
        <>
        <Form style={{ margin: "30px", padding: '20px', backgroundColor:"#ffc16b"}}>
            <Form.Field>
            <Header as="h3">Welcome to i-Bookshelf!</Header>
            <Header as="h3"><Icon name="book"/><Icon name="book"/><Icon name="book"/><Icon name="book"/><Icon name="book"/><Icon name="book"/></Header>
            <Header as="h2">What is your name?</Header>

            <input 
                value={userName}
                style={{ width: '80%'}}
                onChange={handleInputChange}
                placeholder='User Name' />
            </Form.Field>
            <Button type='submit' onClick={handleSubmit}><Icon name="sign-in" />Submit</Button>
        </Form>
        </>
    )
}

export default Login
