import React, { Component } from 'react';
import d3 from 'd3';
import locationMapStyles from './LocationMap.styl';

export class LocationMap extends Component {
    constructor(props) {
        super(props);
        const latDiff = Math.abs(this.props.locationGoal.lat - this.props.initialLocation.lat);
        const lonDiff = Math.abs(this.props.locationGoal.lon - this.props.initialLocation.lon);
        const pixelMultiplier = 380/lonDiff;

        this.state = {
            pixelMultiplier: pixelMultiplier,
            lonDiff: lonDiff
        }
    }
    calibrateDistance() {
        const latDiff = this.props.locationGoal.lat - this.props.marker.lat;
        const lonDiff = this.props.locationGoal.lon - this.props.marker.lon;
    }
    render() {
        let newmarkerDiff = Math.abs(this.props.locationGoal.lon - this.props.marker.lon);
        let markerOffset =  newmarkerDiff * this.state.pixelMultiplier;
        let mapStyle = {};
        let markerStyle = {};
        console.log('here', markerOffset, newmarkerDiff, this.state.lonDiff)
        if (newmarkerDiff > this.state.lonDiff) {
            mapStyle = {
                borderBottom: '1px solid red'
            };
        } else {
            markerStyle = {
                'top': markerOffset + 'px'
            };
        }
        return (
            <div className="location-map" style={mapStyle}>
                <span>{Math.abs(this.props.locationGoal.lon - this.props.marker.lon)}</span>
                <div className="dot"></div>
                <div className="dot marker"
                     style={markerStyle}></div>
            </div>
        )
    }
}
