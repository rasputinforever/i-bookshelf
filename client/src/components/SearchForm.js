import React from 'react';

import { Button, Form, Header } from 'semantic-ui-react'


function SearchForm({ onSubmit }) {
    
    const [bookTitle, setBookTitle] = React.useState('')
    const [bookAuthor, setBookAuthor] = React.useState('')

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

    function handleSubmit() {
        onSubmit(bookTitle, bookAuthor)
    }

    return (
        <Form>
                <Header as='h2'>Book Search</Header>
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
    )
}

export default SearchForm;
