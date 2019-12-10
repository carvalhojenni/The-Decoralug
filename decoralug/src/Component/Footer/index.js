import React from 'react'
import Logo from '../../imagens/logocerto.png'


import './style.css'

function Footer(){
    return(
        <footer className='footer'>
            <p className="text-center">Contatos</p>
            <img src={Logo} alt="logo do Decoralug" className="footer-tamanho "></img>
        </footer>
    )
}

export default Footer