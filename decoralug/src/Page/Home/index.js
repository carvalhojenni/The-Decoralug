import React from 'react'
import Nav from '../../Component/Nav'
import Header from '../../Component/Header'
import Footer from '../../Component/Footer'
import Sobre from './components/Sobre'
// import Carousel1 from './components/Carousel1'

function Home(){
    return(
        <div>
            <Nav/>
            <Header/>
            <Sobre/>
            {/* <Carousel1/> */}
            <Footer/>
        </div>
    )
}
export default Home