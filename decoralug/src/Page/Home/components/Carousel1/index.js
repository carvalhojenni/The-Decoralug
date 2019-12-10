import React from 'react'
import img from '../../../../imagens/logocerto.png'
import img1 from '../../../../imagens/header.jpg'
import img2 from '../../../../imagens/logoj.png'
import Carousel from 'react-bootstrap/Carousel'

function Carousel1(){

  return(
<Carousel
 centered
 infinite
 arrows
  slidesPerPage={2} 
>
  <img src={img} />
  <img src={img1} />
  <img src={img2} />
</Carousel> 
  )
}

export default Carousel1