import React from 'react'
import Logo from '../../imagens/logocerto.png'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'

import './style.css'


function Navegacao() {
    return (
        <div>
            <Navbar className='nav-tamanho'  collapseOnSelect expand="lg" variant="light">
            <img src={Logo} className='nav-img' alt='Logo decoralug'/>
                {/* <Navbar.Brand></Navbar.Brand> */}
                <Navbar.Toggle aria-controls="responsive-navbar-nav" class="navbar-toggler"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">   
                        <Nav.Link href="Home">Sobre</Nav.Link>
                        <Nav.Link href="Dicas">Dicas</Nav.Link>
                        <Nav.Link href="PorOndeAlugar">Por onde alugar</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
export default Navegacao