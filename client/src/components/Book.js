import React from 'react';

import { Header, Grid, Button, Image } from 'semantic-ui-react'


function Book({ id, title, authors, description, thumb, onSubmit }) {
    // here put in buttons to SAVE the book
    // SAVE makes the book goto DB, use userID (drill it down if you must)
    function handleSaveBook() {
        onSubmit({
            bookid: id,
            title: title,
            author: authors,
            description: description,
            thumb: thumb,
        })
    }

    return (
            
            <Grid  id='Home'  columns='equal' stackable>

                <Grid.Column width={4}>
                    <Image src={thumb} alt={title}/>
                    <Button onClick={handleSaveBook}>Add to Shelf</Button>
                </Grid.Column>

                <Grid.Column>
                    
                <Header as='h2'>{title}{authors ? <span> by {authors}</span> : <></>}</Header>
                        <p>{description}</p>
                </Grid.Column>

            </Grid>

    )
}

export default Book
