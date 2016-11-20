import React, { Component } from 'react';
import { Header } from '../../Components/Header/Header';
import { Footer } from '../../Components/Footer/Footer';


export class Chrome extends Component {
    render() {
        return (
            <div className="chrome">
                <Header/>
                    {this.props.children}
                <Footer/>
            </div>
        )
    }
}
