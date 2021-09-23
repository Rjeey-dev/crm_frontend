import { IUser } from 'store/users/interfaces';
import {DARK_THEME, LIGHT_THEME} from "../../config";
import {IAuthState} from "./interfaces";
import * as selectors from './selectors';

test('getUser', () => {
    const user = {
        id: 'id',
        name: 'name'
    };

    expect(selectors.getUser(selectors.initialState)).toEqual({});
    // @ts-ignore
    expect(selectors.getUser({...selectors.initialState, auth: user})).toEqual(user);
});

test('getUserToken', () => {
    const user = {
        token: 'token'
    };

    expect(selectors.getUserToken(selectors.initialState)).toBeFalsy();
    // @ts-ignore
    expect(selectors.getUserToken({...selectors.initialState, auth: user})).toEqual(user.token);
});

test('setUser', () => {
    const user = {
        id: 'id',
        name: 'name'
    };
    const anotherUser = {
        id: 'id2',
        name: 'name2'
    };

    // @ts-ignore
    expectSetUser(Object.assign(selectors.initialState), user);

    const anotherState = Object.assign(selectors.initialState);
    anotherState.auth = anotherUser;
    // @ts-ignore
    expectSetUser(anotherState, anotherUser);
});

test('setUserTheme', () => {
    const user = {
        id: 'id',
        name: 'name',
        settings: {

        }
    };
    const anotherUser = {
        id: 'id2',
        settings: {
            theme: DARK_THEME
        }
    };
    const theme = LIGHT_THEME;

    const stateWithNoTheme = Object.assign(selectors.initialState);
    stateWithNoTheme.auth = user;
    expectSetUserTheme(stateWithNoTheme, theme);

    const stateWithAnotherTheme = Object.assign(selectors.initialState);
    stateWithAnotherTheme.auth = anotherUser;
    expectSetUserTheme(stateWithAnotherTheme, theme);
});

test('setUserLang', () => {
    const user = {
        id: 'id',
        name: 'name',
        settings: {

        }
    };
    const anotherUser = {
        id: 'id2',
        settings: {
            lang: 'en'
        }
    };
    const lang = 'de';

    const stateWithNoLang = Object.assign(selectors.initialState);
    stateWithNoLang.auth = user;
    expectSetUserLang(stateWithNoLang, lang);

    const stateWithAnotherLang = Object.assign(selectors.initialState);
    stateWithAnotherLang.auth = anotherUser;
    expectSetUserLang(stateWithAnotherLang, lang);
});

test('getUserTheme', () => {
    const user = {
        settings: {
            theme: DARK_THEME
        }
    };

    expect(selectors.getUserTheme({} as IAuthState)).toEqual(LIGHT_THEME);
    // @ts-ignore
    expect(selectors.getUserTheme({ auth: user})).toEqual(DARK_THEME);
});

test('getUserLang', () => {
    const user = {
        settings: {
            lang: 'de'
        }
    };

    expect(selectors.getUserLang({auth: {}} as IAuthState)).toEqual('en');
    // @ts-ignore
    expect(selectors.getUserLang({auth: user})).toEqual('de');
});

test('getUserRole', () => {
    const role = 'admin';
    const user = {
        role
    };

    expect(selectors.getUserRole({auth: {}} as IAuthState)).toEqual(selectors.ANONYMOUS);
    // @ts-ignore
    expect(selectors.getUserRole({auth: user})).toEqual(role);
});

const expectSetUser = (state: IAuthState, user: IUser) => {
    selectors.setUser(state, user);

    if (state === undefined) {
        expect(state).toBeUndefined();
    } else {
        expect(state).toEqual({auth: user});
    }
};

const expectSetUserTheme = (state: IAuthState, theme: string) => {
    selectors.setUserTheme(state, theme);

    if (state === undefined) {
        expect(state).toBeUndefined();
    } else {
        expect(state.auth.settings.theme).toEqual(theme);
    }
};

const expectSetUserLang = (state: IAuthState, lang: string) => {
    selectors.setUserLang(state, lang);

    if (state === undefined) {
        expect(state).toBeUndefined();
    } else {
        expect(state.auth.settings.lang).toEqual(lang);
    }
};