import { combineReducers } from 'redux';

const initialState = {
    locations: {}
};

const locations = (state = initialState, action) => {
    let newState = state;
    switch (action.type) {
        case 'ADD_LOCATION':
            newState.locations[action.id] = action.location;
            return newState;
        default:
            return state
    }
};

const findMeApp = combineReducers({
    locations
});

export default findMeApp
