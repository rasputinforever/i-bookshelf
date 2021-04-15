import React from 'react';

import { Header, Menu, Dropdown } from 'semantic-ui-react'

function HeaderBar({ user }){
    const [activeItem, setActiveItem] = React.useState('Home')

    function handleClick(e) {
        setActiveItem(e.target.name)
    }

    return (
        <div>
            <Menu fixed='top' borderless style={{ width: '100%', backgroundColor: '#40D1FF'}}>
                
                <Menu.Item>                    
                <Header as='h2'>iBookshelf</Header>
                <Header>{user}</Header>
                </Menu.Item>
                <Dropdown item icon="angle double down" text='Menu' >
                    <Dropdown.Menu>
                        <Dropdown.Item name='Home' href='#Home' active={activeItem === 'Home'} onClick={handleClick} icon='home' text='Home' />
                        <Dropdown.Item name='BookShelf'  href='#BookShelf' active={activeItem === 'BookShelf'} onClick={handleClick} icon='book' text='Book Shelf' />
                        <Dropdown.Item name='Search'  href='#Search' active={activeItem === 'Search'} onClick={handleClick} icon='search' text='Search' />
                    </Dropdown.Menu>
                </Dropdown>



            </Menu>
        </div>
    )
}

export default HeaderBar;
