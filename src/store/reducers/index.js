import setDataReducer from './setData';
import setModeReducer from './setMode';
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    setDataReducer,
    setModeReducer
});

export default rootReducer;