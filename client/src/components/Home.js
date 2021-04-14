import React, { useEffect } from 'react';

import Book from './Book.js'

import API from '../utils/API.js'

import { Button, Form } from 'semantic-ui-react'

function Home({ user, userid }){
    // form states
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

    // API results state
    const [searchResults, setSearchResults] = React.useState([])
    
    // API call to google
    function handleSubmit(){
        API.googleBook(bookTitle + " " + bookAuthor)
        
        .then((data) => {
            let newResults = []
            data.data.items.forEach((book) => {
                newResults.push({
                    id: book.id,
                    title: book.volumeInfo.title,
                    authors: book.volumeInfo.authors,
                    description: book.volumeInfo.description,
                    thumb: book.volumeInfo.imageLinks.smallThumbnail,
                    img: book.volumeInfo.imageLinks.thumbnail,
                })
            })
            
            // worry about dupes? 
            setSearchResults(newResults)
        });
    }

    function newBookRequest(id){
        console.log("New Book Will Be Saved to User")
        // find the book in searchResults
        // send it to the DB under the userID

        API.addBook(userid, id)
    }

    // rendered search results
    const foundBooks = searchResults.map((book, i) => {
        return <Book key={i} id={book.id} title={book.title} authors={book.authors} description={book.description} thumb={book.thumb} onSubmit={newBookRequest} />
    })


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
            {searchResults.length > 0 ? foundBooks : <></>}
        </>
    )
}

export default Home;