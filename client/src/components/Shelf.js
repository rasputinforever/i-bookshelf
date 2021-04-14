import React, { useEffect } from 'react';

import API from '../utils/API.js'

function Shelf({ userid }) {

    const [shelfItems, setShelfItems] = React.useState([])

    useEffect(() => {
        API.getAllBooks(userid)
        .then((data) => {
            console.log("User's data", data.data.books)
            setShelfItems(data.data.books)
        })
    }, [])

    const renderedShelfItems = shelfItems.map((item) => {
        return <img src={item.thumb} />
    })

    return (
        <>
        <h2>Your Bookshelf</h2>
        {renderedShelfItems}  
        </>
    )
}

export default Shelf;
