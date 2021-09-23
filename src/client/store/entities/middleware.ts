import { normalize } from 'normalizr'
import {IEventWithMeta} from "store/interfaces";
import { onEntitiesReceived } from './actions'
import * as schemas from './schemas'

const middleware = (store: Storage) => (next: any) => (action: IEventWithMeta): any => {
    const { payload, meta } = action;

    if (meta && meta.schema) {
        const schema = schemas[meta.schema];

        if (schema) {
            const { result, entities } = normalize(
                payload,
                Array.isArray(payload) ? [schema] : schema
            );

            store.dispatch(onEntitiesReceived(entities));

            return next({ ...action, payload: result })
        }
    }

    return next(action);
};

export default middleware
