import React, { Component } from 'react';
import locationStyles from './Dot.styl';

export class Dot extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="dot" style={this.props.markerStyle}></div>
        )
    }
}
