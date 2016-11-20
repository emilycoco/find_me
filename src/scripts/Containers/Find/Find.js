import React, { Component } from 'react';
import { LocationMap } from '../../Components/LocationMap/LocationMap';
import findStyles from './Find.styl';
import mockData from '../../mockData.js';

export class Find extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="find">
                <div className="content-container" role="main">
                    <h1 className="bottom-margin top-margin">Find Me!</h1>
                    {/*<LocationMap locationGoal={mockData[0]}/>*/}
                </div>
            </div>
        )
    }
}
