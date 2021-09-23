import {IBaseState} from "store/interfaces";
import {ISettingsState} from "store/settings/interfaces";

const initialState = {
    preloaders: [],
};

export const isPreloaderActivated = (state: ISettingsState, key: string): boolean => {
    if (!state.preloaders.hasOwnProperty(key)) {
        return false;
    }

    return state.preloaders[key];
};

export const getPreloaders = (state: ISettingsState) => {
    return state.preloaders;
}

export const activatePreloader = (state: ISettingsState, key: string): void => {
    state.preloaders = {
        ...state.preloaders,
        [key]: true
    };
};

export const deactivatePreloader = (state: ISettingsState, key: string): void => {
    state.preloaders = {
        ...state.preloaders,
        [key]: false
    };
};

export const normalizeState = (state: IBaseState): ISettingsState => {
    return state.settings;
};

export default initialState