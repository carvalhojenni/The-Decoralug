import React from 'react'
import { getCardDoModal } from '../../../../service/base2'
import Cards from '../Cards'

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
                <div>
                {this.state.card.length > 0 ?
                    this.state.card.map(card => {
                        return <Cards card={card} key={card.id} />
                    }) : <span>Carregando Conteudo</span>
                }
                </div>
        )
    }
}
export default CardDoModal