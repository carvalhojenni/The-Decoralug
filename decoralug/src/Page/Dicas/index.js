import React from 'react'
import Nav from '../../Component/Nav'
import Header from '../../Component/Header'
import Footer from '../../Component/Footer'
import Cards from  './component/Cards'
import Input from './component/Input'


function Dicas(){
    return(
        <div>
            <Nav/>
            <Header/>
            <p className="container text-center"> Procure a dica certa para voce:</p>
            <Input/>
            <Cards/>
            <Footer/>
        </div>
    )
}
export default Dicas