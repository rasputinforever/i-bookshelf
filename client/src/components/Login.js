import React from 'react'

import API from '../utils/API.js'

import { Button, Form } from 'semantic-ui-react'

function Login({ onChange }) {
    
    const [userName, setUserName] = React.useState('')

    function handleSubmit(){
        console.log("You clicked it!", userName)
        API.postUser(userName)
        .then((data) => {
            console.log(data.data)
            localStorage.setItem('userID', data.data);
            onChange(data.data, userName)
        }) 
    }

    function handleInputChange(e){
        setUserName(e.target.value)
    }

    return (
        <Form>
            <Form.Field>
            <label>Choose your Username</label>
            <input 
                value={userName}
                onChange={handleInputChange}
                placeholder='User Name' />
            </Form.Field>
            <Button type='submit' onClick={handleSubmit}>Submit</Button>
        </Form>
    )
}

export default Login
