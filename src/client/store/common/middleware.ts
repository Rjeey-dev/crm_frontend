import {IEvent} from "store/interfaces";
import {
    onUserStateSyncSuccessful
} from "store/users/actions";
import {WS_MESSAGE} from "store/common/actions";
import {onNewTaskDeletedByOwner, onNewTaskReceived} from "store/tasks/actions";

const MESSAGE_TYPE_USER_UPDATED = 'user_updated';
const MESSAGE_TYPE_TASK_CREATED = 'task_created';
const MESSAGE_TYPE_TASK_UPDATED = 'task_updated';
const MESSAGE_TYPE_TASK_DELETED = 'task_deleted';

const middleware = (store: Storage) => (next: any) => (action: IEvent): any => {
    if (action.type && action.type === WS_MESSAGE) {
        if (action.payload.type === MESSAGE_TYPE_USER_UPDATED) {
            store.dispatch(onUserStateSyncSuccessful(action.payload.message));
        }

        if (action.payload.type === MESSAGE_TYPE_TASK_CREATED) {
            store.dispatch(onNewTaskReceived(action.payload.message));
        }

        if (action.payload.type === MESSAGE_TYPE_TASK_UPDATED) {
            store.dispatch(onNewTaskReceived(action.payload.message));
        }

        if (action.payload.type === MESSAGE_TYPE_TASK_DELETED) {
            store.dispatch(onNewTaskDeletedByOwner());
        }
    }

    return next(action);
};

export default middleware
