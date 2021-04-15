import React, { useEffect } from 'react';

import Shelf from './Shelf.js'
import BookSearch from './BookSearch.js'
import HeaderBar from './HeaderBar.js'

import API from '../utils/API.js'

import { Grid, Segment } from 'semantic-ui-react'

import './App.css'

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
            <HeaderBar user={user} />
            <div id='Home' style={{ marginBottom: '100px'}}></div>
            <Grid stackable columns={2}>
                <Grid.Column>
                <Segment id='BookShelf' >

                    <Shelf userid={userid} data={shelfData} onDelete={searchBooks} /> 
                </Segment>
                </Grid.Column>
                <Grid.Column>
                <Segment id='Search'>

                    <BookSearch  userid={userid} onNewBook={searchBooks} />
                </Segment>
                </Grid.Column>
            </Grid>
        </>
    )
}

export default Home;