import React from 'react'
import { getCardDoModal } from '../../../../service/base2'
import Cards from '../Cards'
import { Row, Col } from 'react-bootstrap'

import './style.css'

class CardDoModal extends React.Component {
    constructor(props){
        super(props)
        this.state={
            card: [{}]
        }
    }

    componentDidMount() {
        getCardDoModal()
        .then(response => {
            this.setState({
                card:response.data
            })
        })
        .catch(error => {
            console.error(error)
        })
    }
    render(){
        return (
                <Row>
                {this.state.card.length > 0 ?
                    this.state.card.map(card => {
                        return (
                        <Col  sm={12} md={6} className="p-0">
                        <Cards card={card} key={card.id} />
                        </Col>
                            )
                    }) : <span>Carregando Conteudo</span>
                }
                </Row>
        )
    }
}
export default CardDoModal