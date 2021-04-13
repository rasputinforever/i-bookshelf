import React from 'react';

function Book({ title, authors }) {
    // here put in buttons to SAVE the book
    // SAVE makes the book goto DB, use userID (drill it down if you must)
    return <div>Title: {title}, Author(s): {authors}</div>
}

export default Book
