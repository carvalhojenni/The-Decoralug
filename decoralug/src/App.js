import React from 'react';
import { Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

import Navegacao from './Component/Nav'
import Header from './Component/Header'
import Footer from './Component/Footer'


import './App.css';

function App() {
  return (
    <div>
      <Navegacao/>
      <Header/>
      <Footer/>
    </div>
  );
}

export default App;
