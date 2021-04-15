import React from 'react'
import { Card, Icon, Image, Button } from 'semantic-ui-react'

function ShelfItem({ thumb, title, index, onDelete }) {
    function handleDelete(){
        onDelete(index)
    }
    return (
        <Card centered={true} style={{ width: '150px'}}>
        <Image src={thumb} wrapped ui={false} style={{ width: '100%'}}/>
        <Card.Content>
          <Card.Description>{title}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Button href='' onClick={handleDelete}>
            <Icon name='window close outline' />
            Remove from Shelf
          </Button>
        </Card.Content>
      </Card>
    
    )
}

export default ShelfItem
