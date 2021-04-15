import React, { useEffect } from 'react';

import Shelf from './Shelf.js'
import Book from './Book.js'

import API from '../utils/API.js'

import BookSearch from './BookSearch.js'

function Home({ user, userid }){
    
    // bookshelf data
    const [shelfData, setShelfData] = React.useState([])

    useEffect(() => {
        searchBooks(userid)
    }, [userid])

    function searchBooks(userid) {
        API.getAllBooks(userid)
        .then((data) => {
            
            setShelfData(data.data.books)
        })
    }

    return (
        <>
            <h1>This will be a Title, {user}!</h1>
            <h1>This will be a button that kills the user!</h1>

            <Shelf userid={userid} data={shelfData} onDelete={searchBooks} /> 

            <BookSearch userid={userid} onNewBook={searchBooks} />

        </>
    )
}

export default Home;