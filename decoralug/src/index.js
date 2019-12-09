import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'
// import './index.css';
import App from './App';
import Home from './Page/Home'
import Dicas from './Page/Dicas'
import PorOndeAlugar from './Page/PorOndeAlugar';


ReactDOM.render(
    <Router>
        <Route exact path='/' component={App} / >
        <Route path='/Home' component={Home} />
        <Route path='/Dicas' component={Dicas} />
        <Route path='/PorOndeAndar' component={PorOndeAlugar} />
    </Router>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
