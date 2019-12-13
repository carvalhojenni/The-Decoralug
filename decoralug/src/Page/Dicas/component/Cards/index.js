import React from 'react'
import { Card, CardColumns } from 'react-bootstrap'


import './style.css'


function Cards(props) {
  return (
    <div className="cardizinho">
      <CardColumns>
        <Card>
          <Card.Img variant="top" src={props.card.img} />
          <Card.Body>
              <Card.Title className="titulo">{props.card.titulo}</Card.Title>
          <hr/>
            <Card.Text className="texto">
            {props.card.texto}
            </Card.Text>
          </Card.Body>
        </Card>
      </CardColumns>
    </div>
  )
}

export default Cards