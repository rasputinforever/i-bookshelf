import React from 'react';

function Home({ user }){

    return (
        <>
            <h1>This will be a Title, {user}!</h1>
            <h1>This will be a button that kills the user!</h1>
            <div>This will be the book list!</div>
            <div>This will be the book search!</div>
        </>
    )
}

export default Home;