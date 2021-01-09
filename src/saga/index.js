import { takeLatest } from "redux-saga/effects";
import { GET_DATA } from "../store/actions/actionTypes";
import { getdataHandler } from "./handlers/getDataHandler";

export function* watcherSaga() {
    yield takeLatest(GET_DATA, getdataHandler);
}