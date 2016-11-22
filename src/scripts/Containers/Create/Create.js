import React, { Component } from 'react';
import { Location } from '../../Components/Location/Location';
import createStyles from './Create.styl';
import mockData from '../../mockData.js';
import { Link } from 'react-router';
import { addLocation } from '../../redux/actions.js';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        locations: state.locations
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onAddLocation: (location) => {
            dispatch(addLocation(location));
        }
    }
};

export class ContainerCreate extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="create center">
                <div className="content-container" role="main">
                    <h1 className="bottom-margin top-margin">Create a FindMe</h1>
                    <Location storeLocation={this.props.onAddLocation}/>
                    <Link to="find" style={{float: 'right'}}>View this FindMe</Link>
                </div>
            </div>
        )
    }
}


const Create = connect(
    mapStateToProps,
    mapDispatchToProps
)(ContainerCreate);

export default Create;
