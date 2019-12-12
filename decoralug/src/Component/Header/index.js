import React from 'react'
import Imagem1 from '../../imagens/verde.jpg'
import { Carousel } from 'react-bootstrap'
import './style.css'

function Header(){
    return (
        <div>
            <Carousel className="header">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Imagem1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Imagem1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Imagem1}
                        alt="First slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
export default Header