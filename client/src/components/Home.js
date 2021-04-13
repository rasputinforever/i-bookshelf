import React from 'react';

import { Button, Form } from 'semantic-ui-react'

function Home({ user }){
    
    const [bookTitle, setBookTitle] = React.useState('')
    const [bookAuthor, setBookAuthor] = React.useState('')
    const [bookDescription, setBookDescription] = React.useState('')

    function handleInputChange(e) {
        switch(e.target.name) {
            case 'title':
              setBookTitle(e.target.value)
              break;
            case 'author':
                setBookAuthor(e.target.value)
              break;
            default:
              // code block
          }     
    }

    function handleSubmit(){
        console.log(bookTitle)
        console.log(bookAuthor)
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
                <Form.Field>
                <label>Book Author</label>
                <input 
                    value={bookAuthor}
                    name='author'
                    onChange={handleInputChange}
                    placeholder='Author' />
                </Form.Field>
                <Button type='submit' onClick={handleSubmit}>Submit</Button>
            </Form>
            <div></div>
        </>
    )
}

export default Home;