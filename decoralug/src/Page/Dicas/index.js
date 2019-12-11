import React from 'react'
import Nav from '../../Component/Nav'
import Header from '../../Component/Header'
import Footer from '../../Component/Footer'
import Cards from './component/Cards'
import { getCard } from '../../service/base'
import { InputGroup, Button, FormControl, Card } from 'react-bootstrap'
import Buscar from '../../imagens/buscar.png'
import Container from 'react-bootstrap/Container'

import './style.css'


import Input from './component/Input'

class Dicas extends React.Component {
    constructor(props){
        super(props)
        this.state={
            card: [{}],
            filteredCard: [],
            valor: ''
        }
    }

    componentDidMount() {
        getCard()
        .then(response => {
            this.setState({
                card:response.data,
                filteredCard: response.data
            })
        })
        .catch(error => {
            console.error(error)
        })
    }

    handleChange = (e) => {
        this.setState({
            valor : e.target.value
        })
    }

    handleClick = () => {
        const { card } = this.state;
        this.setState({
            filteredCard: card.filter(obj => obj.titulo.toLowerCase().includes(this.state.valor.toLowerCase())
                || obj.texto.toLowerCase().includes(this.state.valor.toLowerCase())
            )
        })
    }

    render(){
        return (
            <div>
                <Nav />
                <Header />
                <h1 className="container text-center"> Procure a dica certa para voce:</h1>
                
                <InputGroup className="mb-3 container">
                    <FormControl
                        value={this.state.valor}
                        onChange={this.handleChange}
                        placeholder="Digite aqui"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                    />
                    <InputGroup.Append>
                        <Button onClick={() => this.handleClick()} variant="outline-secondary">
                            <img src={Buscar}></img>
                        </Button>
                    </InputGroup.Append>
                </InputGroup>
                <Container className="cards">
                {this.state.card.length > 0 ?
                    this.state.filteredCard.map(card => {
                        return <Cards card={card} key={card.id} />
                    }) : <span>Carregando Conteudo</span>
                }
                </Container>
                <Footer />
            </div>
        )
    }
}
export default Dicas