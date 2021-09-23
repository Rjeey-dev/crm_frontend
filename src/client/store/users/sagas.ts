import {push} from 'connected-react-router';
import {setActiveLanguage} from "react-localize-redux";
import {SagaIterator} from "redux-saga";
import {put, select, takeLatest} from 'redux-saga/effects';

import {
    composeLocalizedUrl,
    URL_AUTH_GOOGLE_REDIRECT, URL_DASHBOARD,
    URL_FAILED_LOGIN,
    URL_HOME_LOCALIZED
} from "common/routes/paths";
import {IUsers} from 'services/api/users/interfaces';
import {makeHttpCall} from "store/sagas";
import {
    ISuccessfulGoogleLoginEvent,
    IUnUserLoggedInEvent,
} from "store/users/interfaces";
import {
    getUserLang,
} from "store/users/selectors";
import {
    ON_SUCCESSFUL_GOOGLE_LOGIN,
    ON_USER_LOGGED_IN,
    ON_USER_LOGOUT,
    onSuccessfulUserLoggedIn,
    onSuccessfulUserLogOut,
    onUnSuccessfulGoogleLogin,
    onUserLoggedIn,
} from './actions';

export function* watchSuccessfulGoogleLogin(users: IUsers, event: ISuccessfulGoogleLoginEvent): SagaIterator {
    try {
        const lang = yield select(getUserLang);
        // @ts-ignore
        yield put(push(composeLocalizedUrl(URL_AUTH_GOOGLE_REDIRECT, lang)));

        const payload = {
            lang,
            user_id: event.payload.userId,
            email: event.payload.email,
            image: event.payload.image,
            first_name: event.payload.firstName,
            last_name: event.payload.lastName,
            token: event.payload.token
        };

        const response = Object(yield makeHttpCall([users, users.loginGoogle], payload));

        yield put(onUserLoggedIn(response.user, response.subscription_token, event.payload.token));
    } catch (e) {
        const lang = yield select(getUserLang);
        yield put(onUnSuccessfulGoogleLogin(e.response.error));
        // @ts-ignore
        yield put(push(composeLocalizedUrl(URL_FAILED_LOGIN, lang)));
    }
}

export function* watchUserLogin(event: IUnUserLoggedInEvent): SagaIterator {
    const lang = yield select(getUserLang);
    // @ts-ignore
    const url = composeLocalizedUrl(URL_DASHBOARD, lang);

    yield put(push(url));
    // @ts-ignore
    yield put(setActiveLanguage(lang));
    yield put(onSuccessfulUserLoggedIn());
}

export function* watchUserLogout(users: IUsers): SagaIterator {
    try {
        const lang = yield select(getUserLang);

        yield makeHttpCall([users, users.logout]);
        // @ts-ignore
        yield put(push(composeLocalizedUrl(URL_HOME_LOCALIZED, lang)));

        yield put(onSuccessfulUserLogOut());
    } catch (e) {
        // suppress exceptions
    }
}

export default function* ({ users }: {users: IUsers}): SagaIterator {
    yield takeLatest(ON_USER_LOGGED_IN, watchUserLogin);
    yield takeLatest(ON_USER_LOGOUT, watchUserLogout, users);
    yield takeLatest(ON_SUCCESSFUL_GOOGLE_LOGIN, watchSuccessfulGoogleLogin, users);
}
