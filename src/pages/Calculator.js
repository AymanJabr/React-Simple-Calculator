import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from '../components/App'
import Header from '../components/Header';

import '../components/Styles.css';


function Calculator() {

    return (
        <div>

            <Header />

            <App />            

        </div>
    )
}


export default Calculator

