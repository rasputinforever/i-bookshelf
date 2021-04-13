import React, { useEffect } from 'react';

import Book from './Book.js'

import API from '../utils/API.js'

import { Button, Form } from 'semantic-ui-react'

function Home({ user }){
    // form states
    const [bookTitle, setBookTitle] = React.useState('')
    const [bookAuthor, setBookAuthor] = React.useState('')

    // API results state
    const [searchResults, setSearchResults] = React.useState([])

    const foundBooks = searchResults.map((book, i) => {
        return <Book key={i} title={book.title} authors={book.authors} />
    })

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

    // API call to google
    function handleSubmit(){
        console.log(bookTitle)
        console.log(bookAuthor)
        API.googleBook()
        
        .then((data) => {
            let newResults = []
            data.data.items.forEach((book) => {
                newResults.push({
                    title: book.volumeInfo.title,
                    authors: book.volumeInfo.authors,
                })
            })
            
            // worry about dupes? 
            setSearchResults(newResults)
        });
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
            <div>
                {searchResults.length > 0 ? foundBooks : <></>}
            </div>
        </>
    )
}

export default Home;