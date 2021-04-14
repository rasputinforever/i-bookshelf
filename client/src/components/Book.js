import React from 'react';

import { Container, Header } from 'semantic-ui-react'

function Book({ title, authors, description, thumb }) {
    // here put in buttons to SAVE the book
    // SAVE makes the book goto DB, use userID (drill it down if you must)
    return (
        <Container text>
            <Header as='h2'>{title}{authors ? <span> by {authors}</span> : <></>}</Header>
            <img src={thumb}/>
            <p>
            {description}
            </p>
            <button>Add to Shelf</button>
        </Container>
    )
}

export default Book
