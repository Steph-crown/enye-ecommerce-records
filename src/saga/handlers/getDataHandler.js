import { call, put } from "redux-saga/effects";
import { setDataAction } from "../../store/actions/actions";
import { getDataRequest } from "../requests/getDataRequest";

export function* getdataHandler() {
    try {
        const response = yield call(getDataRequest);

        const {data} = response;
        if (data) {
            yield put(setDataAction(data));
        }
    } catch (error) {
        console.error(error);
        
    }
}