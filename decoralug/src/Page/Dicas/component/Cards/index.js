import React from 'react'
import { Card, CardColumns } from 'react-bootstrap'


import './style.css'


function Cards(props) {
  return (
    <div>
      <CardColumns>
        <Card>
          <Card.Img variant="top" src={props.card.img} />
          <Card.Body>
              <Card.Title>{props.card.titulo}</Card.Title>
            <Card.Text>
            {props.card.texto}
            </Card.Text>
          </Card.Body>
        </Card>
      </CardColumns>
    </div>
  )
}

export default Cards