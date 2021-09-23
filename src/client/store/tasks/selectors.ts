import {ITask, TASK_STATUS_DOING, TASK_STATUS_DONE, TASK_STATUS_TODO} from "store/tasks/interfaces";

export const isTaskTodo = (task: ITask) => {
    return task.status === TASK_STATUS_TODO;
}

export const isTaskDoing = (task: ITask) => {
    return task.status === TASK_STATUS_DOING;
}

export const isTaskDone = (task: ITask) => {
    return task.status === TASK_STATUS_DONE;
}