import {SagaIterator} from "redux-saga";
import {put, takeLatest} from "redux-saga/effects";
import {makeHttpCall} from "store/sagas";

import {ITasks} from "services/api/tasks/interfaces";
import {
    ON_CREATE_NEW_TASK, ON_EDIT_TASK, ON_NEW_TASK_RECEIVED,
    ON_TASK_CHANGE_STATUS, ON_TASK_DELETE, ON_TASK_DELETE_SUCCESS, ON_TASK_DELETED_BY_OWNER,
    ON_TASKS_BOARD_INITIALIZED, onTaskDeleteSuccess, onTasksBoardInitialized,
    onTasksBoardInitializedFailed,
    onTasksBoardInitializedSuccess
} from "store/tasks/actions";
import {onEntitiesFetchedSuccessful, onEntitiesShouldBeCleaned} from "store/entities/actions";
import {KEY_TASKS} from "store/entities/schemas";
import {onTaskChangeStatusEvent} from "store/tasks/interfaces";

export function* watchTasksBoardInitialized(tasks: ITasks): SagaIterator {
    try {
        // @ts-ignore
        const response = yield makeHttpCall([tasks, tasks.getAll]);

        if (!response) {
            yield put(onTasksBoardInitializedFailed());

            return;
        }
        yield put(onEntitiesShouldBeCleaned(KEY_TASKS));
        // @ts-ignore
        yield put(onTasksBoardInitializedSuccess(response.items));
        // @ts-ignore
        yield put(onEntitiesFetchedSuccessful(response.items, KEY_TASKS));
    } catch (e) {
        yield put(onTasksBoardInitializedFailed());
    }
}

export function* watchTaskChangeStatus(tasks: ITasks, event: onTaskChangeStatusEvent): SagaIterator {
    try {
        yield makeHttpCall([tasks, tasks.update], event.payload.task.id, {status: event.payload.status});

        yield put(onEntitiesShouldBeCleaned(KEY_TASKS));
        yield put(onTasksBoardInitialized());
    } catch (e) {
        yield put(onTasksBoardInitializedFailed());
    }
}

export function* watchCreateNewTask(tasks: ITasks, event: any): SagaIterator {
    try {
        const response = yield makeHttpCall([tasks, tasks.create],{
            name: event.payload.name,
            text: event.payload.text,
            recipient: event.payload.recipient,
            start_date: event.payload.startDate,
        });

        // @ts-ignore
        yield put(onEntitiesFetchedSuccessful([response], KEY_TASKS));
    } catch (e) {
        yield put(onTasksBoardInitializedFailed());
    }
}

export function* watchEditTask(tasks: ITasks, event: any): SagaIterator {
    try {
        yield makeHttpCall([tasks, tasks.update], event.payload.id, {
            name: event.payload.name,
            text: event.payload.text
        });

        yield put(onEntitiesShouldBeCleaned(KEY_TASKS));
        yield put(onTasksBoardInitialized());
    } catch (e) {
        yield put(onTasksBoardInitializedFailed());
    }
}

export function* watchNewTaskReceived(event: any): SagaIterator {
    yield put(onTasksBoardInitialized());
}

export function* watchTaskDelete(tasks: ITasks, event: any): SagaIterator {
    try {
        yield makeHttpCall([tasks, tasks.delete], event.payload.task.id);

        yield put(onTaskDeleteSuccess());
    } catch (e) {
        yield put(onTasksBoardInitializedFailed());
    }
}

export function* watchTaskDeleteSuccess(): SagaIterator {
    yield put(onEntitiesShouldBeCleaned(KEY_TASKS));
    yield put(onTasksBoardInitialized());
}

export default function* ({ tasks }: {tasks: ITasks}): SagaIterator {
    yield takeLatest(ON_TASKS_BOARD_INITIALIZED, watchTasksBoardInitialized, tasks);
    yield takeLatest(ON_TASK_CHANGE_STATUS, watchTaskChangeStatus, tasks);
    yield takeLatest(ON_CREATE_NEW_TASK, watchCreateNewTask, tasks);
    yield takeLatest(ON_EDIT_TASK, watchEditTask, tasks);
    yield takeLatest(ON_TASK_DELETE, watchTaskDelete, tasks);
    yield takeLatest(ON_TASK_DELETE_SUCCESS, watchTaskDeleteSuccess);
    yield takeLatest(ON_NEW_TASK_RECEIVED, watchNewTaskReceived);
    yield takeLatest(ON_TASK_DELETED_BY_OWNER, watchTaskDeleteSuccess);
}