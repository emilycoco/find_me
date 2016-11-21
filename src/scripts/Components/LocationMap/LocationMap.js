import React, { Component } from 'react';
import d3 from 'd3';
import { Dot } from '..//Dot/Dot';
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
                {
                    this.props.dots.map((dot, idx) => (
                        <Dot key={idx} color="red" style={markerStyle}/>
                    ))
                }
            </div>
        )
    }
}
