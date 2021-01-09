import { call, put } from "redux-saga/effects";
import { setDataAction } from "../../store/actions/actions";
import { getDataRequest } from "../requests/getDataRequest";

export function* getdataHandler() {
    try {
        const response = yield call(getDataRequest);

        const {data:{records}} = response;
        if (records) {
            yield put(setDataAction(records));
        }
    } catch (error) {
        console.error(error);
    }
}