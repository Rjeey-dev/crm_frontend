import {ISettingsState} from "store/settings/interfaces";
import {
    ON_PRELOADER_IS_ACTIVATED,
    ON_PRELOADER_IS_DEACTIVATED,
} from "./actions";
import initialState, {
    activatePreloader,
    deactivatePreloader,
} from './selectors';

export default (state: ISettingsState = initialState, {type, payload}: any): ISettingsState => {
    const newState = {...state};

    switch (type) {
        case ON_PRELOADER_IS_ACTIVATED:
            // @ts-ignore
            activatePreloader(newState, payload.action);

            return newState;
        case ON_PRELOADER_IS_DEACTIVATED:
            // @ts-ignore
            deactivatePreloader(newState, payload.action);

            return newState;
        default:
            break;
    }

    return state;
}
