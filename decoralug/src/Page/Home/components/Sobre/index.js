import React from 'react'
import Imagem from '../../../../imagens/logocerto.png'
import Image from 'react-bootstrap/Image'

import './style.css'

function Sobre() {
    return (
        <div className="container text-center ">
            <div className="div-titulo">
            <h1 className="texto text-center"> Sobre The Decoralug</h1>
            </div>
            <div className="container-flex">
            <Image src={Imagem} fluid miniatura />
            <div className="tamanho-texto">
            <hr/>
                <p>O Decoralug foi criado para ajudar e dar dicas para você que esta pensado ou já alugou um apartamento. Sabemos que a nossa casa interfere muito no nosso humor, e quando nos dedicamos a deixa-la um pouco mais confortavel, percebemos como o humor muda! Sua casa pode ser confortavel e a sua casa sem obras enormes! 
                </p>
            <hr/>
                <strong><h3>Conforto não é questao de luxo!</h3></strong>
            </div>
            </div>
        </div>
    )
}
export default Sobre