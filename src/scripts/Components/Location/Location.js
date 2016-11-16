import React, { Component } from 'react';
import { ActionButton } from '../ActionButton/ActionButton';
import locationStyles from './Location.styl';

export class Location extends Component {
    constructor(props) {
        super(props);
    }
    recordLocation() {
        navigator.geolocation.getCurrentPosition(
            (pos) => {
                this.props.useLocation({
                    id: 678,
                    lat: pos.coords.latitude,
                    lon: pos.coords.longitude
                });
            },
            (err) => {
                console.log('Error', err);
            },
            {enableHighAccuracy: true}
        )
    }
    render() {
        return (
            <div className="location">
                <ActionButton text="Record My Location" action={() => this.recordLocation()}/>
            </div>
        )
    }
}
