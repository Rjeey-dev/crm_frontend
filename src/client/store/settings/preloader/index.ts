import merge from 'lodash/merge';

import {IEvent} from "store/interfaces";
import {onPreloadIsActivated, onPreloadIsDeactivated} from "store/settings/actions";

const req = require.context('.', true, /\.\/.+\/.*?\.ts$/);

const activated = {};
const deactivated = {};
const handleTypesCallback: any[] = [];
const HTTP_REQUEST_DELAY = 200;

req.keys()
    .forEach(key => {
        merge(activated, req(key).activated);
        merge(deactivated, req(key).deactivated);

        if ('undefined' !== typeof req(key).handleType) {
            handleTypesCallback.push(req(key).handleType);
        }
    });

export const handlePreloader = (action: IEvent, store: Storage) => {
    let { type } = action;
    const { payload } = action;

    if (activated.hasOwnProperty(type)) {
        type = handleType(type, payload);

        setTimeout(() => {
            store.dispatch(onPreloadIsActivated(type));
        }, HTTP_REQUEST_DELAY);
    } else if (deactivated.hasOwnProperty(type)) {
        type = handleType(deactivated[type], payload);

        store.dispatch(onPreloadIsDeactivated(type));
    }
};

const handleType = (type: string, payload: any) => {
    handleTypesCallback.map(callback => {
        type = callback(type, payload);
    });

    return type;
};

export const buildComplexPreloaderInitialActionName = (action: string, id?: string) => {
    return id ? [action, id].join('_') : action;
};