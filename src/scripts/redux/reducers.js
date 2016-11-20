import { combineReducers } from 'redux';

const initialState = {
    locations: {}
};

const locations = (state = initialState, action) => {
    let locations = state.locations;
    let newState = state;
    switch (action.type) {
        case 'ADD_LOCATION':
            locations[action.id] = action.location;
            newState.locations = locations;
            return newState;
        default:
            return state
    }
};

const findMeApp = combineReducers({
    locations
});

export default findMeApp
