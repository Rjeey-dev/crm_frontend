import mergeWith from 'lodash/mergeWith';

import {IEvent} from "store/interfaces";
import {ENTITIES_RECEIVE, ENTITIES_SHOULD_BE_CLEANED} from './actions';
import {IEntitiesState} from "./interfaces";
import {initialState} from './selectors';

export default (state: IEntitiesState = initialState, {type, payload}: IEvent): IEntitiesState => {
    if (type === ENTITIES_RECEIVE) {
        return mergeWith({}, state, payload, (objValue, srcValue) => {
            if (Array.isArray(srcValue)) {
                return srcValue;
            }

            return undefined
        });
    }

    if (type === ENTITIES_SHOULD_BE_CLEANED) {
        const newState = {...state};

        // @ts-ignore
        newState[payload.schema] = {};

        return newState;
    }

    return state
}