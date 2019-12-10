import React from 'react'
import Imagem1 from '../../imagens/verde.jpg'
import { Carousel } from 'react-bootstrap'

function Header(){
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block h-50 w-100"
                        src={Imagem1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block h-50 w-100"
                        src={Imagem1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block h-50 w-100"
                        src={Imagem1}
                        alt="First slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
export default Header