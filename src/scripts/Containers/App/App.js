import React, { Component } from 'react';
import { Header } from '../../Components/Header/Header';
import { Footer } from '../../Components/Footer/Footer';
import appStyles from './App.styl';
import mockData from '../../mockData.js';

export class App extends Component {
    render() {
        return (
            <div className="app">
                <Header/>
                {this.props.children}
                <Footer/>
            </div>
        )
    }
}
