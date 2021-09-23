import {channel, SagaIterator} from "redux-saga";
import {call, put, select, take, takeLatest} from "redux-saga/effects";
// @ts-ignore
import { EventSourcePolyfill } from 'event-source-polyfill';

import {webSocketName, webSocketUrl} from "client/config";
import {ON_APP_IS_INITIALIZING, onWSConnected, onWSMessage} from "store/common/actions";
import {
    ON_USER_SUCCESSFULLY_LOGGED_IN,
} from "store/users/actions";
import {getSubscriptionUserToken, getUser, isAnonymous} from "store/users/selectors";

export function* watchInitBaseAppSettings(): SagaIterator {
    yield call(initSubscriber);
}

export function* initSubscriber(): SagaIterator {
    const user = yield select(getUser);
    const token = yield select(getSubscriptionUserToken);

    if (!user || !token) {
        return;
    }

    // @ts-ignore
    if (isAnonymous(user)) {
        return;
    }

    const connectionStatusChannel = channel();
    const connectionStatus = connectionStatusWrapper(connectionStatusChannel);

    // @ts-ignore
    const es = new EventSourcePolyfill(webSocketUrl + encodeURIComponent([webSocketName, user.id].join('-')), {
        headers: {
            Authorization: 'Bearer ' + token
        }
    });

    es.onopen = () => connectionStatus('connected');
    es.onmessage = (message: any) => connectionStatus(message);

    while (true) {
        const action = yield take(connectionStatusChannel);
        // @ts-ignore
        yield put(action);
    }
}

function connectionStatusWrapper(channel: any) {
    function connectionStatus(result: any) {
        if (result === 'connected') {
            channel.put(onWSConnected);
        }
        else {
            channel.put(onWSMessage(JSON.parse(result.data)));
        }
    }

    return connectionStatus;
}

export default function* (): SagaIterator {
    yield takeLatest(ON_APP_IS_INITIALIZING, watchInitBaseAppSettings);
    yield takeLatest(ON_USER_SUCCESSFULLY_LOGGED_IN, watchInitBaseAppSettings);
}