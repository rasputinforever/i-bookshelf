import React from 'react';

import { Header, Menu } from 'semantic-ui-react'

function HeaderBar({ user }){
    const [activeItem, setActiveItem] = React.useState('Home')

    function handleClick(e) {
        setActiveItem(e.target.name)
    }

    return (
        <>
            <Header  as='h1'>{user}'s bookshelf!</Header>

            <Menu fixed='top'>
                <Menu.Item
                    name='Home'
                    href='#Home'
                    active={activeItem === 'Home'}
                    onClick={handleClick}
                    >
                    Home
                </Menu.Item>

                <Menu.Item
                    name='BookShelf'
                    href='#BookShelf'
                    active={activeItem === 'BookShelf'}
                    onClick={handleClick}
                    >
                    Book Shelf
                </Menu.Item>

                <Menu.Item
                    name='Search'
                    href='#Search'
                    active={activeItem === 'Search'}
                    onClick={handleClick}
                    >
                    Search
                </Menu.Item>
            </Menu>
        </>
    )
}

export default HeaderBar;
