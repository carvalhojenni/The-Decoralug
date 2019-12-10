import React from 'react'
import { Card, Button} from 'react-bootstrap'
import Imagem from '../../imagens/header.jpg'
import Button1 from '../../Component/Button1'

// class CardDoModal extends React.Component {
//     constructor(){
//         super()
//         this.state={
//             botao: card
//         }
//     }

//     MudaConteudo =(proximaPagina) =>{
//         this.setState({
//             botao: proximaPagina
//         })
//     }
//     render(){
//         return (
//             <div>
                
//                 {this.state.botao === 'Card'&& <Button1
//                 mudaConteudo ={this.MudaConteudo}/>
//                 <Card style={{ width: '18rem' }}>
//                     <Card.Img variant="top" src={Imagem} />
//                     <Card.Body>
//                         <Card.Title>Card Title</Card.Title>
//                         <Card.Text>
//                             Some quick example text to build on the card title and make up the bulk of
//                             the card's content.
//         </Card.Text>
//                         <Button onClick={this.state.MudaConteudo} variant="primary">Saiba mais</Button>
//                     </Card.Body>
//                 </Card>
//             </div>
//         )
//         }
// }

// export default CardDoModal