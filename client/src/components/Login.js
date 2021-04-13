import React from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'

function Login() {
    
    const [userName, setUserName] = React.useState('')

    function handleSubmit(e){
        console.log("You clicked it!", userName)
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
