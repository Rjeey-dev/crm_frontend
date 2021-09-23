import {IEvent} from "store/interfaces";
import {
    onUserStateSyncSuccessful
} from "store/users/actions";
import {WS_MESSAGE} from "store/common/actions";

const MESSAGE_TYPE_USER_UPDATED = 'user_updated';

const middleware = (store: Storage) => (next: any) => (action: IEvent): any => {
    if (action.type && action.type === WS_MESSAGE) {
        if (action.payload.type === MESSAGE_TYPE_USER_UPDATED) {
            store.dispatch(onUserStateSyncSuccessful(action.payload.message));
        }
    }

    return next(action);
};

export default middleware
