import {all, call, CallEffect, CallEffectFn, fork, Func6Rest, put} from 'redux-saga/effects'
import {HTTP_ERR_CONNECTION_REFUSED} from "services/api";
import {ON_SERVER_IS_NOT_RESPONDING} from "store/common/actions";

const req = require.context('.', true, /\.\/.+\/sagas\.ts$/);

const sagas = req.keys().map(key => req(key).default);

export default function* (services = {}) {
    yield all(sagas.map(saga => fork(saga, services)))
}

// @ts-ignore
export function* makeHttpCall(fn: CallEffectFn<Func6Rest<any, any, any, any, any, any>>, arg1?: any, arg2?: any, arg3?: any, arg4?: any, arg5?: any, arg6?: any, arg7?: any): CallEffect {
    try {
        const response = yield call(fn, arg1, arg2, arg3, arg4, arg5, arg6, arg7);

        if (!response) {
            return;
        }

        if ('details' in response) {
            return response.details;
        }

        if ('items' in response) {
            return {
                items: response.items,
                total: response.total,
            };
        }
    } catch (e) {
        if (e.status === HTTP_ERR_CONNECTION_REFUSED) {
            yield put({
                type: ON_SERVER_IS_NOT_RESPONDING
            });

            e.response = {
                error: 'server_failed'
            };
        } else {
            e.response = yield call([e.response, e.response.then]);
        }

        throw e;
    }
}