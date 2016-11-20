import React, { Component } from 'react';
import { ActionButton } from '../ActionButton/ActionButton';
import headerStyles from './Header.styl';
import { Link } from 'react-router';

export class Header extends Component {
    logout() {

        // Fake logout method
        alert('You are now logged out.')
    }
    render() {
        return (
            <header className="header content-container" role="banner">
                <span>Find Me</span>
                <Link to="create" style={{float: 'right'}}>Create FindMe</Link>
            </header>
        )
    }
}
