import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Header } from '../../Components/Header/Header';
import { Footer } from '../../Components/Footer/Footer';
import addLocation from '../../redux/actions.js';
import appStyles from './App.styl';
import mockData from '../../mockData.js';

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

class FindMeApp extends Component {
    render() {
        return (
            <div className="app">
                {this.props.children}
            </div>
        )
    }
}

const App = connect(
    mapStateToProps,
    mapDispatchToProps
)(FindMeApp);

export default App;
