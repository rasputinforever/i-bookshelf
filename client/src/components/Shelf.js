import React, { useEffect } from 'react';

import API from '../utils/API.js'

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
    }, [isSearching])

    useEffect(() => {
        console.log("Updating Rendered Items")
        setRenderShelfItems(shelfItems.map((item, i) => {
            return <img key={i} src={item.thumb} />
        }))
    }, [shelfItems])

    return (
        <>
        <h2>Your Bookshelf</h2>
        {renderShelfItems}  
        </>
    )
}

export default Shelf;
