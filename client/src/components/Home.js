import React, { useEffect } from 'react';

import Shelf from './Shelf.js'
import Book from './Book.js'

import API from '../utils/API.js'

import BookSearch from './BookSearch.js'

function Home({ user, userid }){
    
    // API results state
    const [isSearching, setIsSearching] = React.useState(false)
    const [searchResults, setSearchResults] = React.useState([])
    const [searchFail, setSearchFail] = React.useState(false)
    const [shelfData, setShelfData] = React.useState([])

    useEffect(() => {
        API.getAllBooks(userid)
        .then((data) => {

            setShelfData(data.data.books)
        })
    }, [userid])

    // search button
    function handleNewSearch() {
        setIsSearching(true)
    }

    // API call to google
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
            setIsSearching(false)

            API.getAllBooks(userid)
            .then((data) => {
    
                setShelfData(data.data.books)
            })
        })
    }

    function handleDeleteBook(userid, index) {
        console.log("Deleting book")
        API.deleteBook(userid, index)
        .then(() => {
            console.log("Getting all books")

            API.getAllBooks(userid)
            .then((data) => {
                
                setShelfData(data.data.books)
            })
        })
    }

    // rendered search results
    const foundBooks = searchResults.map((book, i) => {
        return <Book key={i} id={book.id} title={book.title} authors={book.authors} description={book.description} thumb={book.thumb} onSubmit={newBookRequest} />
    })



    const bookShelf = <Shelf userid={userid} data={shelfData} onDelete={handleDeleteBook} /> 

    return (
        <>
            <h1>This will be a Title, {user}!</h1>
            <h1>This will be a button that kills the user!</h1>

            {bookShelf}

            {isSearching ? <BookSearch onSearch={handleSubmit} /> : <button onClick={handleNewSearch}>New Search</button> }

            {searchFail ? <h2>Nothing Found!</h2> : <></>}
            {isSearching ? foundBooks : <></>}
        </>
    )
}

export default Home;