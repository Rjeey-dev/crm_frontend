import {IPreloadChangedState} from "store/settings/interfaces";

export const ON_PRELOADER_IS_ACTIVATED = 'ON_PRELOADER_IS_ACTIVATED';
export const ON_PRELOADER_IS_DEACTIVATED = 'ON_PRELOADER_IS_DEACTIVATED';

export const onPreloadIsActivated = (action: string): IPreloadChangedState => ({
    payload: {
        action
    },
    type: ON_PRELOADER_IS_ACTIVATED,
});

export const onPreloadIsDeactivated = (action: string): IPreloadChangedState => ({
    payload: {
        action
    },
    type: ON_PRELOADER_IS_DEACTIVATED,
});