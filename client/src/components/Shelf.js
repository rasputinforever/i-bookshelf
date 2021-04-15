import React, { useEffect } from 'react';

import ShelfItem from './ShelfItem.js'

import API from '../utils/API.js'

import { Card, Header, Icon } from 'semantic-ui-react'

function Shelf({ userid, data, onDelete }) {

    const [shelfItems, setShelfItems] = React.useState([])

    useEffect(() => {
        setShelfItems(data)
    }, [data])

    function handleDeleteItem(index) {
        API.deleteBook(userid, index)
        .then(() => {

            onDelete(userid)
        })
    }

    const shelfItemsBody = shelfItems.map((item, i) => {
                return <ShelfItem key={i} onDelete={handleDeleteItem} index={i} thumb={item.thumb} title={item.title} />
            })

    return (
        <>
            <Header as='h2'><Icon name="book" />Bookshelf</Header>
            <Card.Group>
                {shelfItemsBody}
            </Card.Group>
        </>
    )
}

export default Shelf;
