import React from 'react'
import Imagem from '../../../../imagens/logocerto.png'
import Image from 'react-bootstrap/Image'

import './style.css'

function Sobre() {
    return (
        <div className="container text-center ">
            <div className="div-titulo">
            <h1 className="texto"> Sobre nos</h1>
            </div>
            <div className="container-flex">
            <Image src={Imagem} fluid miniatura />
            <div className="tamanho-texto">
                <p>t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
            </div>
            </div>
        </div>
    )
}
export default Sobre