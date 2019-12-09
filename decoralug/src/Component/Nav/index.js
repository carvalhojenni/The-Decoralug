import React from 'react'
import Logo from '../../imagens/logoj.png'
import { Navbar, Nav } from 'react-bootstrap'

import './style.css'


function Navegacao() {
    return (
        <div >
            <Navbar className='nav-tamanho' collapseOnSelect expand="lg" variant="dark">
            <img src={Logo} className='nav-img'/>
                {/* <Navbar.Brand src={Logo}></Navbar.Brand> */}
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="Home">Home</Nav.Link>
                        <Nav.Link href="Dicas">Dicas</Nav.Link>
                        <Nav.Link href="PorOndeAlugar">Por onde alugar</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
export default Navegacao