// import React from 'react'
// import { InputGroup, Button, FormControl, Card } from 'react-bootstrap'
// import Buscar from '../../../../imagens/buscar.png'
// import Cards from '../Cards'
// class Input extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             valor: ''
//         }
//     }

//     handleChange = (e) => {
//         this.setState({
//             valor: e.target.value
//         })
//         this.props.onChange(e.target.value)
//     }

//     handleClick() {
//         console.log('Clicado');
//     }
//     render() {
//         return (
//             <div>
//                 <InputGroup className="mb-3 container">
//                     <FormControl
//                         value={this.state.valor}
//                         onChange={this.handleChange}
//                         placeholder="Digite aqui"
//                         aria-label="Recipient's username"
//                         aria-describedby="basic-addon2"
//                     />
//                     <InputGroup.Append>
//                         <Button onClick={this.state.card.filter((card) => {
//                             return card.type === valor;
//                         })} variant="outline-secondary">
//                             <img src={Buscar}></img>
//                         </Button>
//                     </InputGroup.Append>
//                 </InputGroup>
//             </div>
//         )
//     }
// }


// export default Input

// this.state.valor === Card.titulo