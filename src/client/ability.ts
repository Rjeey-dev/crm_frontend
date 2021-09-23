import { AbilityBuilder } from '@casl/ability';
import {
    URL_DENIED,
    URL_HOME,
    URL_FAILED_LOGIN,
    URL_AUTH_GOOGLE_REDIRECT,
    URL_HOME_LOCALIZED,
    URL_DASHBOARD,
} from "common/routes/paths";
import {ENTITIES_SHOULD_BE_CLEANED} from "store/entities/actions";
import {ON_APP_IS_INITIALIZING, WS_CONNECTED, WS_DISCONNECTED, WS_MESSAGE, WS_SEND_MESSAGE} from "store/common/actions";
import {ON_PRELOADER_IS_ACTIVATED, ON_PRELOADER_IS_DEACTIVATED} from "store/settings/actions";
import {
    ON_SUCCESSFUL_GOOGLE_LOGIN, ON_SUCCESSFUL_USER_LOGOUT,
    ON_UNSUCCESSFUL_GOOGLE_LOGIN,
    ON_USER_LOGGED_IN,
    ON_USER_LOGOUT
} from "store/users/actions";
import {
    ON_TASK_CHANGE_STATUS,
    ON_TASKS_BOARD_INITIALIZED,
    ON_TASKS_BOARD_INITIALIZED_FAIL,
    ON_TASKS_BOARD_INITIALIZED_SUCCESS
} from "store/tasks/actions";

export const ABILITY_VISIT = 'visit';
export const ABILITY_USE = 'use';
export const ABILITY_DO = 'do';
export const ABILITY_SEE = 'see';

export const ABILITY_LOGOUT_LINK = 'ABILITY_LOGOUT_LINK';
export const ABILITY_GOOGLE_LOGIN_LINK = 'ABILITY_GOOGLE_LOGIN_LINK';
export const ABILITY_HOME_LINK = 'ABILITY_HOME_LINK';
export const ABILITY_NOT_FOUND_LINK = 'ABILITY_NOT_FOUND_LINK';
export const ABILITY_FAILED_LOGIN_LINK = 'ABILITY_FAILED_LOGIN_LINK';

export const ACTION_SEARCH = 'ACTION_SEARCH';

const common = (can: any) => {
    can(ABILITY_DO, '@@redux-form/INITIALIZE');
    can(ABILITY_DO, '@@redux-form/REGISTER_FIELD');
    can(ABILITY_DO, '@@redux-form/UNREGISTER_FIELD');
    can(ABILITY_DO, '@@redux-form/UPDATE_SYNC_ERRORS');
    can(ABILITY_DO, '@@redux-form/FOCUS');
    can(ABILITY_DO, '@@redux-form/DESTROY');
    can(ABILITY_DO, '@@redux-form/CHANGE');
    can(ABILITY_DO, '@@redux-form/BLUR');
    can(ABILITY_DO, '@@redux-form/FOCUS');
    can(ABILITY_DO, '@@redux-form/ARRAY_PUSH');
    can(ABILITY_DO, '@@redux-form/ARRAY_REMOVE');
    can(ABILITY_DO, '@@redux-form/SET_SUBMIT_SUCCEEDED');
    can(ABILITY_DO, '@@redux-form/SET_SUBMIT_FAILED');
    can(ABILITY_DO, '@@redux-form/STOP_SUBMIT');
    can(ABILITY_DO, '@@redux-form/CLEAR_FIELDS');
    can(ABILITY_DO, '@@router/LOCATION_CHANGE');
    can(ABILITY_DO, '@@localize/INITIALIZE');
    can(ABILITY_DO, '@@localize/ADD_TRANSLATION_FOR_LANGUAGE');
    can(ABILITY_DO, '@@localize/SET_ACTIVE_LANGUAGE');
    can(ABILITY_DO, ON_APP_IS_INITIALIZING);
    can(ABILITY_DO, 'ON_ROUTE_CHANGED');
    can(ABILITY_DO, 'ON_THEME_SELECT');
    can(ABILITY_DO, 'ON_LANG_SELECT');
    can(ABILITY_DO, 'ON_THEME_SELECT_SUCCESSFUL');
    can(ABILITY_DO, 'ON_THEME_SELECT_UNSUCCESSFUL');
    can(ABILITY_DO, 'ON_LANG_SELECT_SUCCESSFUL');
    can(ABILITY_DO, 'ON_LANG_SELECT_UNSUCCESSFUL');
    can(ABILITY_DO, 'ENTITIES_RECEIVE');
    can(ABILITY_DO, 'ENTITIES_FETCHED_SUCCESSFUL');
    can(ABILITY_DO, 'ENTITIES_CREATED');
    can(ABILITY_DO, ENTITIES_SHOULD_BE_CLEANED);
    can(ABILITY_DO, 'ON_NOTIFICATIONS_RECEIVE');
    can(ABILITY_DO, ON_PRELOADER_IS_ACTIVATED);
    can(ABILITY_DO, ON_PRELOADER_IS_DEACTIVATED);
    can(ABILITY_DO, 'ON_SERVER_IS_NOT_RESPONDING');
    can(ABILITY_DO, ON_SUCCESSFUL_GOOGLE_LOGIN);
    can(ABILITY_DO, ON_UNSUCCESSFUL_GOOGLE_LOGIN);
    can(ABILITY_DO, ON_USER_LOGGED_IN);
    can(ABILITY_VISIT, URL_DENIED);
    can(ABILITY_SEE, ABILITY_NOT_FOUND_LINK);
    can(ABILITY_DO, ON_USER_LOGOUT);
    can(ABILITY_DO, ON_SUCCESSFUL_USER_LOGOUT);
};

const auth = (can: any) => {
    can(ABILITY_VISIT, URL_DASHBOARD);
    can(ABILITY_DO, WS_CONNECTED);
    can(ABILITY_DO, WS_SEND_MESSAGE);
    can(ABILITY_DO, WS_DISCONNECTED);
    can(ABILITY_DO, WS_MESSAGE);
    can(ABILITY_USE, ACTION_SEARCH);
    can(ABILITY_SEE, ABILITY_LOGOUT_LINK);
};

const ADMIN = AbilityBuilder.define((can: any) => {
    common(can);
    auth(can);
});

const USER = AbilityBuilder.define((can: any) => {
    common(can);
    auth(can);

    can(ABILITY_DO, ON_TASKS_BOARD_INITIALIZED);
    can(ABILITY_DO, ON_TASKS_BOARD_INITIALIZED_SUCCESS);
    can(ABILITY_DO, ON_TASKS_BOARD_INITIALIZED_FAIL);
    can(ABILITY_DO, ON_TASK_CHANGE_STATUS);
});

const ANONYMOUS = AbilityBuilder.define((can: any) => {
    can(ABILITY_VISIT, URL_AUTH_GOOGLE_REDIRECT);
    can(ABILITY_VISIT, URL_DENIED);
    can(ABILITY_VISIT, URL_FAILED_LOGIN);
    can(ABILITY_VISIT, URL_HOME_LOCALIZED);
    can(ABILITY_VISIT, URL_HOME);
    can(ABILITY_SEE, ABILITY_GOOGLE_LOGIN_LINK);
    can(ABILITY_SEE, ABILITY_FAILED_LOGIN_LINK);
    common(can);
});

export const abilities = { ADMIN, ANONYMOUS, USER };