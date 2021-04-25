import React from 'react'
import { Card, CardColumns, Button } from 'react-bootstrap'

import './style.css'

function Cards(props) {
    return (
        <div>
            <CardColumns>
                <Card>
                    <Card.Img variant="top" src={props.card.img} />
                    <Card.Body>
                        <Card.Title className="titulo">{props.card.titulo}</Card.Title>
                    <hr/>
                        <Card.Text className="texto">
                            {props.card.texto}
                        </Card.Text>
                        <a href={props.card.link}>
                        <Button className="btn" variant="primary">Saiba mais</Button>
                        </a>
                    </Card.Body>
                </Card>
            </CardColumns>
        </div>
    )
}

export default Cards