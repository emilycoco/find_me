import React, { Component } from 'react';
import { Location } from '../../Components/Location/Location';
import { LocationMap } from '../../Components/LocationMap/LocationMap';
import createStyles from './Create.styl';
import mockData from '../../mockData.js';

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
                    <LocationMap locationGoal={this.state.locationGoal} initialLocation={this.state.initialLocation} marker={this.state.marker}/>
                </div>
            </div>
        )
    }
}
