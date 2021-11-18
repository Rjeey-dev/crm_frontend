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

export const ON_CREATE_NEW_TASK = 'ON_CREATE_NEW_TASK';
export const ON_CREATE_NEW_TASK_SUCCESS = 'ON_CREATE_NEW_TASK_SUCCESS';
export const ON_CREATE_NEW_TASK_FAIL = 'ON_CREATE_NEW_TASK_FAIL';

export const ON_NEW_TASK_RECEIVED = 'ON_NEW_TASK_RECEIVED';

export const ON_TASK_DELETE = 'ON_TASK_DELETE';
export const ON_TASK_DELETE_SUCCESS = 'ON_TASK_DELETE_SUCCESS';

export const ON_TASK_DELETED_BY_OWNER = 'ON_TASK_DELETED_BY_OWNER';

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

export const onNewTaskReceived = (task: ITask) => {
    return {
        type: ON_NEW_TASK_RECEIVED,
        payload: {
            task
        }
    }
}

export const onNewTaskDeletedByOwner = () => {
    return {
        type: ON_TASK_DELETED_BY_OWNER
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

export const onCreateNewTask = (name: string, recipient: string, startDate: Date) => {
    return {
        type: ON_CREATE_NEW_TASK,
        payload: {
            name,
            recipient,
            startDate
        }
    }
}

export const onTaskDelete = (task: ITask) => {
    return {
        type: ON_TASK_DELETE,
        payload: {
            task
        }
    }
}

export const onTaskDeleteSuccess = () => {
    return {
        type: ON_TASK_DELETE_SUCCESS,
    }
}

export const onCreateNewTaskSuccess = (task: ITask) => {
    return {
        type: ON_CREATE_NEW_TASK_SUCCESS,
        payload: {
            task
        }
    }
}

export const onCreateNewTaskFail = () => {
    return {
        type: ON_CREATE_NEW_TASK_FAIL
    }
}
