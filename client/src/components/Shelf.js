import React, { useEffect } from 'react';

import API from '../utils/API.js'

function Shelf({ userid, isSearching }) {

    const [shelfItems, setShelfItems] = React.useState([])

    useEffect(() => {
        API.getAllBooks(userid)
        .then((data) => {
            console.log("User's data", data.data.books)
            setShelfItems(data.data.books)
        })
    }, [userid, isSearching])

    const renderedShelfItems = shelfItems.map((item, i) => {
        return <img key={i} src={item.thumb} />
    })

    return (
        <>
        <h2>Your Bookshelf</h2>
        {renderedShelfItems}  
        </>
    )
}

export default Shelf;
