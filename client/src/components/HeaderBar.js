import React from 'react';

import { Header, Menu, Icon } from 'semantic-ui-react'

function HeaderBar({ user }){
    const [activeItem, setActiveItem] = React.useState('Home')

    function handleClick(e) {
        setActiveItem(e.target.name)
    }

    return (
        <div>
            <Menu fixed='top' style={{  backgroundColor: '#40D1FF'}}>

                <Menu.Item
                    name='Home'
                    href='#Home'
                    active={activeItem === 'Home'}
                    onClick={handleClick}>                    
                <Header as='h2'><Icon name="book" />iBookshelf</Header>
                </Menu.Item>

                <Menu.Item>                    
                <Header as='h3'>Welcome, {user}</Header>
                </Menu.Item>


                <Menu.Item
                    name='BookShelf'
                    href='#BookShelf'
                    active={activeItem === 'BookShelf'}
                    onClick={handleClick}
                    >
                    <Header as='h4'><Icon name="book" /></Header>
                </Menu.Item>

                <Menu.Item
                    name='Search'
                    href='#Search'
                    active={activeItem === 'Search'}
                    onClick={handleClick}
                    >
                    <Header as='h4'><Icon name="book" /></Header>
                </Menu.Item>
            </Menu>
        </div>
    )
}

export default HeaderBar;
