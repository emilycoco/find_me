import React, { Component } from 'react';
import { LocationMap } from '../../Components/LocationMap/LocationMap';
import findStyles from './Find.styl';
import mockData from '../../mockData.js';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        locations: state.locations
    }
};

const mapDispatchToProps = (dispatch) => {
    return {}
};

export class ContainerFind extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="find center">
                <div className="content-container" role="main">
                    <h1 className="bottom-margin top-margin">Find Me!</h1>
                    <LocationMap locationGoal={{lat: 37.7831827, lon: -122.39577969999998}}/>
                </div>
            </div>
        )
    }
}

const Find = connect(
    mapStateToProps,
    mapDispatchToProps
)(ContainerFind);

export default Find;