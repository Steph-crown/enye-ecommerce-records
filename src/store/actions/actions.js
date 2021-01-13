import * as ACTION_TYPES from './actionTypes';

export const getDataAction = () => {
    return {
        type: ACTION_TYPES.GET_DATA
    }
};

export const setDataAction = (data) => {
    return {
        type: ACTION_TYPES.SET_DATA,
        data
    }
}

export const genderSelectAction = (data) => {
    return {
        type: ACTION_TYPES.GENDER_SELECT,
        data
    }
}

export const paymentSelectAction = (data) => {
    return {
        type: ACTION_TYPES.PAYMENT_SELECT,
        data
    }
}