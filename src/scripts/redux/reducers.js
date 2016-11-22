import { combineReducers } from 'redux';

const initialState = {
    locations: {}
};

const locations = (locations = {}, action) => {
    switch (action.type) {
        case 'ADD_LOCATION':
            locations[action.id] = action.location;
            return locations;
        default:
            return locations
    }
};

const findMeApp = combineReducers({
    locations
});

export default findMeApp
