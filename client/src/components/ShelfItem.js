import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

function ShelfItem({ thumb, title }) {
    return (
        <Card style={{ width: '150px'}}>
        <Image src={thumb} wrapped ui={false} style={{ width: '100%'}}/>
        <Card.Content>
          <Card.Description>{title}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name='window close outline' />
            Remove from Shelf
          </a>
        </Card.Content>
      </Card>
    
    )
}

export default ShelfItem
