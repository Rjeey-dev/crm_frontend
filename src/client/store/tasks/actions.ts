import {
    ITask, onTaskChangeStatusEvent,
    onTasksBoardInitializedEvent,
    onTasksBoardInitializedFailEvent,
    onTasksBoardInitializedSuccessEvent
} from "store/tasks/interfaces";

export const ON_TASKS_BOARD_INITIALIZED = 'ON_TASKS_BOARD_INITIALIZED';
export const ON_TASKS_BOARD_INITIALIZED_SUCCESS = 'ON_TASKS_BOARD_INITIALIZED_SUCCESS';
export const ON_TASKS_BOARD_INITIALIZED_FAIL = 'ON_TASKS_BOARD_INITIALIZED_FAIL';

export const ON_TASK_CHANGE_STATUS = 'ON_TASK_CHANGE_STATUS';

export const onTasksBoardInitialized = (): onTasksBoardInitializedEvent => {
    return {
        type: ON_TASKS_BOARD_INITIALIZED
    }
}

export const onTasksBoardInitializedSuccess = (tasks: ITask[]): onTasksBoardInitializedSuccessEvent => {
    return {
        type: ON_TASKS_BOARD_INITIALIZED_SUCCESS,
        payload: {
            tasks
        }
    }
}

export const onTasksBoardInitializedFailed = (): onTasksBoardInitializedFailEvent => {
    return {
        type: ON_TASKS_BOARD_INITIALIZED_FAIL
    }
}

export const onTaskChangeStatus = (task: ITask, status: number): onTaskChangeStatusEvent => {
    return {
        type: ON_TASK_CHANGE_STATUS,
        payload: {
            task,
            status
        }
    }
}