import * as ACTION_TYPES from './../actions/actionTypes'

const initialState = {
    genderSelect: "",
    paymentSelect: ""
};

const filterSelectReducer = (state=initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.GENDER_SELECT:
            return {
                ...state,
                genderSelect: action.data
            };
        case ACTION_TYPES.PAYMENT_SELECT:
            return {
                ...state,
                paymentSelect: action.data
            }
        default:
            return state;
    }
}

export default filterSelectReducer