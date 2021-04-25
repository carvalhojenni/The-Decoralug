import React from 'react'
import Nav from '../../Component/Nav'
import Header from '../../Component/Header'
import CardDoModal from './components/CardDoModal'
import Footer from '../../Component/Footer'

import './style.css'

function PorOndeAlugar(){
    return(
        <div>
            <Nav/>
            <Header/>
            <div className="container text-center">
            <h1 className="titulo" >Por onde alugar?</h1>
            <div className="texto-div">
            </div>
            <p className="p">Você ainda não sabem por onde alugar? <br/>
            Aqui você vai achar os melhores sites! <br/>
            Use as nossas dicas para encontrar o seu futuro apartamento!</p>
            <CardDoModal/>
            </div>
            {/* <CardDoModal/> */}
            <Footer/>
        </div>
    )
}
export default PorOndeAlugar