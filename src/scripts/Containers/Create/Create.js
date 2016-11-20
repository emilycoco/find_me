import React, { Component } from 'react';
import { Location } from '../../Components/Location/Location';
import createStyles from './Create.styl';
import mockData from '../../mockData.js';
import { Link } from 'react-router';

export class Create extends Component {
    constructor(props) {
        super(props);
        this.state = {
            locationGoal: mockData.locations[0],
            initialLocation: mockData.locations[1],
            marker: mockData.locations[1]
        }
    }
    resetMarker(value) {
        this.setState({marker: value});
    }
    render() {
        return (
            <div className="create">
                <div className="content-container" role="main">
                    <h1 className="bottom-margin top-margin">Create a FindMe</h1>
                    <Location useLocation={(value) => this.resetMarker(value)}/>
                    <Link to="find" style={{float: 'right'}}>View this FindMe</Link>
                </div>
            </div>
        )
    }
}
