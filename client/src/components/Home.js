import React from 'react';

import { Button, Form } from 'semantic-ui-react'

function Home({ user }){
    
    const [bookTitle, setBookTitle] = React.useState('')

    function handleInputChange(e) {
        switch(e.target.name) {
            case 'title':
              setBookTitle(e.target.value)
              break;
            default:
              // code block
          }     
    }

    function handleSubmit(){
        console.log("nothing yet")
    }

    return (
        <>
            <h1>This will be a Title, {user}!</h1>
            <h1>This will be a button that kills the user!</h1>
            <div>This will be the book list!</div>
            <Form>
                <Form.Field>
                <label>Book Title</label>
                <input 
                    value={bookTitle}
                    name='title'
                    onChange={handleInputChange}
                    placeholder='Title' />
                </Form.Field>
                <Button type='submit' onClick={handleSubmit}>Submit</Button>
            </Form>
        </>
    )
}

export default Home;