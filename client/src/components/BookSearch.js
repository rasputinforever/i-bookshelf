import React from 'react';

import { Button, Form } from 'semantic-ui-react'

import Book from './Book.js'

import API from '../utils/API.js'

function BookSearch({ userid, onNewBook }){
    // form states
    const [bookTitle, setBookTitle] = React.useState('')
    const [bookAuthor, setBookAuthor] = React.useState('')

    const [searchFail, setSearchFail] = React.useState(false)
    const [searchResults, setSearchResults] = React.useState([])

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
        
        const queryString = ((bookTitle) ? bookTitle : '') + ((bookTitle && bookAuthor) ? ' ' : '') + ((bookAuthor) ? bookAuthor : '')
        
        API.googleBook(queryString)
        
        .then((data) => {
            let newResults = []
            if (data.data.items) {
                
                setSearchFail(false)

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
            } else {
                setSearchFail(true)
            }
            
            // worry about dupes? 
            setSearchResults(newResults)
            
        });
    }

    function newBookRequest(newBook){
        // sends book object, with ID, to db
        API.addBook(userid, newBook)
        .then(() => {
            setSearchResults([])

            onNewBook(userid)
        })
    }

    // rendered search results
    const foundBooks = searchResults.map((book, i) => {
        return <Book key={i} id={book.id} title={book.title} authors={book.authors} description={book.description} thumb={book.thumb} onSubmit={newBookRequest} />
    })

    return (
        <>
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
            
            {searchFail ? <h2>Nothing Found!</h2> : foundBooks}

        </>
    )
}

export default BookSearch;
