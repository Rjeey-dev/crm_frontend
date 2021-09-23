import {
    ON_TASK_CHANGE_STATUS,
    ON_TASKS_BOARD_INITIALIZED,
    ON_TASKS_BOARD_INITIALIZED_FAIL,
    ON_TASKS_BOARD_INITIALIZED_SUCCESS
} from "store/tasks/actions";

export const TASK_STATUS_TODO = 0;
export const TASK_STATUS_DOING = 1;
export const TASK_STATUS_DONE = 2;

export interface ITask {
    id: number,
    name: string,
    status: number,
    created: Date
}

export interface onTasksBoardInitializedEvent {
    type: typeof ON_TASKS_BOARD_INITIALIZED
}

export interface onTasksBoardInitializedSuccessEvent {
    type: typeof ON_TASKS_BOARD_INITIALIZED_SUCCESS,
    payload: onTasksBoardInitializedSuccessEventPayload
}

export interface onTasksBoardInitializedSuccessEventPayload {
    tasks: ITask[]
}

export interface onTasksBoardInitializedFailEvent {
    type: typeof ON_TASKS_BOARD_INITIALIZED_FAIL
}

export interface onTaskChangeStatusEvent {
    type: typeof ON_TASK_CHANGE_STATUS,
    payload: onTaskChangeStatusEventPayload
}

export interface onTaskChangeStatusEventPayload {
    task: ITask,
    status: number
}
