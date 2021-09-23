import {put, call, takeEvery, takeLatest} from 'redux-saga/effects'
import * as settingsActions  from 'store/settings/actions';
import saga, * as sagas from './sagas';

import Users from 'services/api/users';
import ApiException from 'services/api/exceptions';
import * as actions from "./actions";
import * as formsActions from "../forms/actions";
import {stopSubmit} from "redux-form";
import {DARK_THEME, LIGHT_THEME} from "../../config";

const api = {
    post: () => {},
    get: () => {},
    put: () => {},
    delete: () => {},
};

const users = new Users(api);

const exception = new ApiException('some exception');
const error = {};

const formName = 'formName';

const dataPayload = {
    payload: {
        data: 'data'
    },
    formName
};

describe('Users sagas theme', () => {
    const user = {
        id: 'userId',
        settings: {
            theme: DARK_THEME
        }
    };

    const payload = {
        theme: LIGHT_THEME,
        user
    };

    it('selected', () => {
        const response = {
            settings: {
                theme: LIGHT_THEME
            }
        };

        const generator = sagas.themeSelected(users, payload);

        expect(JSON.stringify(generator.next().value))
            .toEqual(JSON.stringify(call([users, users.update], user, { settings: {theme: payload.theme }})));
        expect(generator.next(response).value)
            .toEqual(put(settingsActions.onThemeSelectSuccessful(payload.theme)))
    });

    it('selected with exception', () => {
        const generator = sagas.themeSelected(users, payload);

        exception.response = new Promise(function(resolve) {
            resolve(error);
        });

        expect(JSON.stringify(generator.next().value))
            .toEqual(JSON.stringify(call([users, users.update], user, { settings: {theme: payload.theme }})));
        expect(generator.throw(exception).value)
            .toEqual(put(settingsActions.onThemeSelectUnSuccessful(payload.theme)));
    });
});

describe('Forms sagas login form submitted', () => {
    const payload = {
        login: 'login',
        password: 'pass',
        lang: 'en'
    };

    const response = {
        data: {},
        formName
    };

    it('form is valid', () => {
        // @ts-ignore
        const generator = sagas.loginFormSubmitted(users, payload, formName);

        expect(JSON.stringify(generator.next().value))
            .toEqual(JSON.stringify(call([users, users.login], payload.login, payload.password, payload.lang)));
        // @ts-ignore
        expect(generator.next(response).value).toEqual(put(formsActions.onFormSubmitResult('ON_SUCCESSFUL_FORMNAME_SUBMIT_RESULT', response)))
    });

    it('form is invalid', () => {
        // @ts-ignore
        const generator = sagas.loginFormSubmitted(users, payload, formName);

        exception.response = new Promise(resolve => {
            resolve(error);
        });

        expect(JSON.stringify(generator.next().value))
            .toEqual(JSON.stringify(call([users, users.login], payload.login, payload.password, payload.lang)));

        // @ts-ignore
        expect(generator.throw(exception).value).toEqual(call([exception.response, exception.response.then]));
        // @ts-ignore
        expect(generator.next(error).value).toEqual(put(stopSubmit(formName, error.error)));
    });
});

describe('Forms sagas signup form submitted', () => {
    const payload = {
        login: 'login',
        password: 'pass',
        passwordRepeat: 'pass',
        email: 'email',
        lang: 'en'
    };

    const response = {
        data: {},
        formName
    };

    it('form is valid', () => {
        // @ts-ignore
        const generator = sagas.signUpFormSubmitted(users, payload, formName);

        expect(JSON.stringify(generator.next().value))
            .toEqual(JSON.stringify(call([users, users.register], payload.login, payload.email, payload.password, payload.lang)));
        // @ts-ignore
        expect(generator.next(response).value).toEqual(put(formsActions.onFormSubmitResult('ON_SUCCESSFUL_FORMNAME_SUBMIT_RESULT', response)));
    });

    it('form is invalid', () => {
        // @ts-ignore
        const generator = sagas.signUpFormSubmitted(users, payload, formName);

        exception.response = new Promise(resolve => {
            resolve(error);
        });

        expect(JSON.stringify(generator.next().value))
            .toEqual(JSON.stringify(call([users, users.register], payload.login, payload.email, payload.password, payload.lang)));

        // @ts-ignore
        expect(generator.throw(exception).value).toEqual(call([exception.response, exception.response.then]));
        // @ts-ignore
        expect(generator.next(error).value).toEqual(put(stopSubmit(formName, error.error)));
    });
});

describe('Forms sagas remind form submitted', () => {
    const payload = {
        email: 'email',
    };

    const response = {
        data: {},
        formName
    };

    it('form is valid', () => {
        // @ts-ignore
        const generator = sagas.remindFormSubmitted(users, payload, formName);

        expect(JSON.stringify(generator.next().value))
            .toEqual(JSON.stringify(call([users, users.remind], payload.email)));
        // @ts-ignore
        expect(generator.next(response).value).toEqual(put(formsActions.onFormSubmitResult('ON_SUCCESSFUL_FORMNAME_SUBMIT_RESULT', response)));
    });

    it('form is invalid', () => {
        // @ts-ignore
        const generator = sagas.remindFormSubmitted(users, payload, formName);

        exception.response = new Promise(resolve => {
            resolve(error);
        });

        expect(JSON.stringify(generator.next().value))
            .toEqual(JSON.stringify(call([users, users.remind], payload.email)));

        // @ts-ignore
        expect(generator.throw(exception).value).toEqual(call([exception.response, exception.response.then]));
        // @ts-ignore
        expect(generator.next(error).value).toEqual(put(stopSubmit(formName, error.error)));
    });
});

describe('Users sagas lang', () => {
    const user = {
        id: 'userId',
        settings: {
            lang: 'en'
        }
    };

    const payload = {
        lang: 'de',
        user
    };

    it('selected', () => {
        const response = {
            settings: {
                lang: 'de'
            }
        };

        const generator = sagas.langSelected(users, payload);

        expect(JSON.stringify(generator.next().value))
            .toEqual(JSON.stringify(call([users, users.update], user, { settings: {lang: payload.lang }})));
        expect(generator.next(response).value)
            .toEqual(put(settingsActions.onLangSelectSuccessful(payload.lang)))
    });

    it('selected with exception', () => {
        const generator = sagas.langSelected(users, payload);

        exception.response = new Promise(function(resolve) {
            resolve(error);
        });

        expect(JSON.stringify(generator.next().value))
            .toEqual(JSON.stringify(call([users, users.update], user, { settings: {lang: payload.lang }})));
        expect(generator.throw(exception).value)
            .toEqual(put(settingsActions.onLangSelectUnSuccessful(payload.lang)));
    });
});

test('watchLoginFormSubmitted', () => {
    // @ts-ignore
    const generator = sagas.watchLoginFormSubmitted(users, dataPayload);
    // @ts-ignore
    expect(generator.next().value).toEqual(call(sagas.loginFormSubmitted, users, dataPayload.payload, dataPayload.formName));
});

test('watchSignUpFormSubmitted', () => {
    // @ts-ignore
    const generator = sagas.watchSignUpFormSubmitted(users, dataPayload);
    // @ts-ignore
    expect(generator.next().value).toEqual(call(sagas.signUpFormSubmitted, users, dataPayload.payload, dataPayload.formName));
});

test('watchRemindFormSubmitted', () => {
    // @ts-ignore
    const generator = sagas.watchRemindFormSubmitted(users, dataPayload);
    // @ts-ignore
    expect(generator.next().value).toEqual(call(sagas.remindFormSubmitted, users, dataPayload.payload, dataPayload.formName));
});

test('watchThemeSelect', () => {
    const generator = sagas.watchThemeSelect(users, dataPayload);
    expect(generator.next().value)
        .toEqual(call(sagas.themeSelected, users, dataPayload.payload))
});

test('watchLangSelect', () => {
    const generator = sagas.watchLangSelect(users, dataPayload);
    expect(generator.next().value)
        .toEqual(call(sagas.langSelected, users, dataPayload.payload))
});

test('saga', () => {
    const generator = saga({ users });
    // @ts-ignore
    expect(generator.next().value).toEqual(takeLatest(formsActions.ON_LOGIN_FORM_SUBMITTED, sagas.watchLoginFormSubmitted, users));
    // @ts-ignore
    expect(generator.next().value).toEqual(takeLatest(formsActions.ON_SIGNUP_FORM_SUBMITTED, sagas.watchSignUpFormSubmitted, users));
    // @ts-ignore
    expect(generator.next().value).toEqual(takeLatest(formsActions.ON_REMIND_FORM_SUBMITTED, sagas.watchRemindFormSubmitted, users));

    expect(generator.next().value).toEqual(takeEvery(settingsActions.ON_THEME_SELECT, sagas.watchThemeSelect, users));
    expect(generator.next().value).toEqual(takeEvery(settingsActions.ON_LANG_SELECT, sagas.watchLangSelect, users));
    expect(generator.next().value).toEqual(takeLatest(formsActions.ON_SUCCESSFUL_LOGIN_SUBMIT_RESULT, sagas.watchSuccessfulLogin));
    expect(generator.next().value).toEqual(takeLatest(formsActions.ON_SUCCESSFUL_SIGNUP_SUBMIT_RESULT, sagas.watchSuccessfulSignUp));
    expect(generator.next().value).toEqual(takeLatest(formsActions.ON_SUCCESSFUL_REMIND_SUBMIT_RESULT, sagas.watchSuccessfulRemind));
    expect(generator.next().value).toEqual(takeLatest(actions.ON_SUCCESSFUL_LOGOUT, sagas.watchSuccessfulLogout));
    expect(generator.next().value).toEqual(takeLatest(formsActions.ON_PROFILE_EDIT_FORM_SUBMITTED, sagas.watchProfileEditFormSubmitted, users));
});