import React from 'react'

import API from '../utils/API.js'

import { Button, Form } from 'semantic-ui-react'

function Login() {
    
    const [userName, setUserName] = React.useState('')

    function handleSubmit(){
        console.log("You clicked it!", userName)
        API.postUser(userName)
        .then((data) => {
            console.log(data)
        }) 
    }

    function handleInputChange(e){
        setUserName(e.target.value)
    }

    return (
        <Form>
            <Form.Field>
            <label>First Name</label>
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
