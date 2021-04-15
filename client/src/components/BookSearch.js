import React from 'react';

import Book from './Book.js'
import SearchForm from './SearchForm.js'

import API from '../utils/API.js'

function BookSearch({ userid, onNewBook }){

    const [searchFail, setSearchFail] = React.useState(false)
    const [searchResults, setSearchResults] = React.useState([])

    function handleSubmit(bookTitle, bookAuthor){
        
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
        <div style={{marginBottom: '30px'}}>
            <SearchForm onSubmit={handleSubmit} />
            </div>
            <div>
            {searchFail ? <h2>Nothing Found!</h2> : foundBooks}
            </div>
        </>
    )
}

export default BookSearch;
