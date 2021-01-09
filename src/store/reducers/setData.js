import * as ACTION_TYPES from './../actions/actionTypes';

const initialState = {
    data: null
}

const setDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.SET_DATA:
            return {
                ...state,
                data: action.data
            };
    
        default:
            return state;
    }
}

export default setDataReducer;