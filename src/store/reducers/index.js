import setDataReducer from './setData';
import { combineReducers } from "redux";
import filterSelectReducer from './filterSelect'

const rootReducer = combineReducers({
    setDataReducer,
    filterSelectReducer
});

export default rootReducer;