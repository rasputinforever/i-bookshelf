import React, { useEffect } from 'react';

import ShelfItem from './ShelfItem.js'

import API from '../utils/API.js'

import { Card } from 'semantic-ui-react'

function Shelf({ userid, data, onDelete }) {

    const [shelfItems, setShelfItems] = React.useState([])

    useEffect(() => {
        setShelfItems(data)
    }, [data])

    function handleDeleteItem(index) {
        console.log("Will delete this book: ", shelfItems[index])
        onDelete(userid, index)
    }

    const shelfItemsBody = shelfItems.map((item, i) => {
                return <ShelfItem key={i} onDelete={handleDeleteItem} index={i} thumb={item.thumb} title={item.title} />
            })

    return (
        <>
            <h2>Your Bookshelf</h2>
            <Card.Group>
                {shelfItemsBody}
            </Card.Group>
        </>
    )
}

export default Shelf;
