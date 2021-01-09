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