import React from 'react'
import Logo from '../../imagens/logocerto.png'
import Face from '../../imagens/icons8-facebook-64.png'
import Insta from '../../imagens/icons8-instagram-64.png'
import Pin from '../../imagens/icons8-pinterest-64.png'


import './style.css'

function Footer(){
    return(
        <footer className='footer'>
            <img src={Logo} alt="logo do Decoralug" className="footer-tamanho "></img>
            <div className="contato">
            <p className="text-center">Contatos</p>
                <img src={Face} alt="Logo do Facebook"/>
                <img src={Insta} alt="Logo do Instagram"/>
                <img src={Pin} alt="Logo do Pinterest"/>
            </div>
        </footer>
    )
}

export default Footer