import {SagaIterator} from "redux-saga";
import {put, takeLatest} from "redux-saga/effects";
import {makeHttpCall} from "store/sagas";

import {ITasks} from "services/api/tasks/interfaces";
import {
    ON_TASK_CHANGE_STATUS,
    ON_TASKS_BOARD_INITIALIZED,
    onTasksBoardInitializedFailed,
    onTasksBoardInitializedSuccess
} from "store/tasks/actions";
import {onEntitiesFetchedSuccessful} from "store/entities/actions";
import {KEY_TASKS} from "store/entities/schemas";
import {onTaskChangeStatusEvent} from "store/tasks/interfaces";

export function* watchTasksBoardInitialized(tasks: ITasks): SagaIterator {
    try {
        const response = yield makeHttpCall([tasks, tasks.getAll]);

        if (!response) {
            yield put(onTasksBoardInitializedFailed());

            return;
        }

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
        const response = yield makeHttpCall([tasks, tasks.update], event.payload.task.id, {status: event.payload.status});

        // @ts-ignore
        yield put(onEntitiesFetchedSuccessful([response], KEY_TASKS));
    } catch (e) {
        yield put(onTasksBoardInitializedFailed());
    }
}

export default function* ({ tasks }: {tasks: ITasks}): SagaIterator {
    yield takeLatest(ON_TASKS_BOARD_INITIALIZED, watchTasksBoardInitialized, tasks);
    yield takeLatest(ON_TASK_CHANGE_STATUS, watchTaskChangeStatus, tasks);
}