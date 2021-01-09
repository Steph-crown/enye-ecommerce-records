import * as ACTION_TYPES from './../actions/actionTypes';

const initialState = {
    mode: "dark"
};

// Sets the mode to light or dark
const setModeReducer = (state=initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.SET_MODE:
            return {
                ...state, 
                mode: initialState.mode === "dark" ? "light" : "dark"
            }    
        default:
            return state
    }
}

export default setModeReducer;