import React from 'react';

import { Header, Menu } from 'semantic-ui-react'

function HeaderBar({ user }){
    const [activeItem, setActiveItem] = React.useState('Home')

    function handleClick(e) {
        setActiveItem(e.target.name)
    }

    return (
        <div style={{ marginTop: '50px'}}>
            <Menu fixed='top' style={{ backgroundColor: '#40D1FF'}}>
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
        </div>
    )
}

export default HeaderBar;
