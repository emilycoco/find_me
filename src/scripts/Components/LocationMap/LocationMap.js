import React, { Component } from 'react';
import d3 from 'd3';
import { Dot } from '..//Dot/Dot';
import locationMapStyles from './LocationMap.styl';

export class LocationMap extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentLocation: null,
            distance: null
        }
    }

    componentDidMount() {
        this.getCurrentPosition()
            .then(currentLocation => {
                this.setState({currentLocation});
                return currentLocation;
            })
            .then(currentLocation => {
                const distance = Math.ceil(this.getDistanceBetween(
                    currentLocation.lon,
                    currentLocation.lat,
                    this.props.locationGoal.lon,
                    this.props.locationGoal.lat
                ));

                this.setState({distance});
            })
    }

    render() {
        return (
            <div className="location-map">
                {this.state.distance ?
                    <p>You are {this.state.distance} ft from your goal.</p> :
                    <p>Getting your location...</p>}
            </div>
        )
    }

    getCurrentPosition() {
        return new Promise(function(resolve, reject) {
            navigator.geolocation.getCurrentPosition(
                (pos) => {
                    resolve({
                        lat: pos.coords.latitude,
                        lon: pos.coords.longitude
                    })
                },
                (err) => {
                    reject(err);
                },
                {enableHighAccuracy: true}
            )
        });
    }

    getDistanceBetween(lon1, lat1, lon2, lat2) {
        const toRad = function(num) {
            return num * Math.PI / 180;
        };
        var R = 6371; // Radius of the earth in km
        var dLat = toRad(lat2-lat1);  // Javascript functions in radians
        var dLon = toRad(lon2-lon1);
        var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
            Math.sin(dLon/2) * Math.sin(dLon/2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
        var d = R * c; // Distance in km
        return d * 3280.83989501;
    }
}
