import React, { useEffect } from 'react';

import ShelfItem from './ShelfItem.js'

import API from '../utils/API.js'

import { Card } from 'semantic-ui-react'

function Shelf({ userid, isSearching }) {
    const [shelfItems, setShelfItems] = React.useState([])
    const [renderShelfItems, setRenderShelfItems] = React.useState([])

    useEffect(() => {
        console.log("Searching User books")
        API.getAllBooks(userid)
        .then((data) => {
            // console.log("User's data", data.data.books)
            setShelfItems(data.data.books)
        })
    }, [userid, isSearching])

    function handleDeleteItem(index) {
        console.log("Will delete this book: ", shelfItems[index])
    }

    useEffect(() => {
        console.log("Updating Rendered Items")
        // convert this to a card
        // add a "DELETE option to that card"
        setRenderShelfItems(shelfItems.map((item, i) => {
            return <ShelfItem key={i} onDelete={handleDeleteItem} index={i} thumb={item.thumb} title={item.title} />
        }))
    }, [shelfItems])

    return (
        <>
        <h2>Your Bookshelf</h2>
        <Card.Group>
            {renderShelfItems}
        </Card.Group>

        
        </>
    )
}

export default Shelf;
