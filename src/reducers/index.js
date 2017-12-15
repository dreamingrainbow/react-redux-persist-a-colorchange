import { combineReducers } from 'redux';
import { CURRENT_BACKGROUND, CHANGE_CURRENT_BACKGROUND, CURRENT_MODAL_BACKGROUND } from '../actions';


const backgroundColorReducer = ( color = '#fff', action) => {
    switch(action.type) {
        case CURRENT_BACKGROUND:
            return action.payload;
        default:
            return color;
    }
};

const modalBackgroundColorReducer = ( color = '#fff', action) => {
    switch(action.type) {
        case CURRENT_MODAL_BACKGROUND:
            return action.payload;
        default:
            return color;
    }
};

const updateBackgroundColorReducer = ( color = '#fff', action) => {
    switch(action.type) {
        case CHANGE_CURRENT_BACKGROUND:
            return action.payload;
        default:
            return color;
    }
};

const rootReducer = combineReducers({ 
        backgroundColor: backgroundColorReducer,
        modalBackgroundColor: modalBackgroundColorReducer,
        updateBackgroundColor: updateBackgroundColorReducer
    });

export default rootReducer;