import { initialState } from './selectors';
import * as actions from "./actions";
import reducer from './reducer';
import { ON_THEME_SELECT_SUCCESSFUL, ON_LANG_SELECT_SUCCESSFUL } from "store/settings/actions";
import {DARK_THEME, LIGHT_THEME} from "../../config";

it('returns the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState)
});

it('handles actions on successful logout', () => {
    const createAction = () => ({
        type: actions.ON_SUCCESSFUL_LOGOUT
    });

    expect(reducer(initialState, createAction())).toEqual(initialState);
});

it('handles actions on successful theme and lang select', () => {
    const createAction = (type, payload) => ({
        type,
        payload
    });

    let state = {
        auth: {
            settings: {
                theme: LIGHT_THEME,
                lang: 'en',
            }
        }
    };

    let theme = DARK_THEME;
    let lang = 'de';

    expect(reducer(state, createAction(ON_THEME_SELECT_SUCCESSFUL, {theme}))).toEqual({...state,
        auth: {
            settings: {
                theme: theme,
                lang: 'en'
            }
        },
    });

    expect(reducer(state, createAction(ON_LANG_SELECT_SUCCESSFUL, {lang}))).toEqual({...state,
        auth: {
            settings: {
                theme: theme,
                lang: lang
            }
        },
    });
});