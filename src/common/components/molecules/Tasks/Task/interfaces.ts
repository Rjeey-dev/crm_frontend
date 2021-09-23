import {ITask} from "store/tasks/interfaces";

export interface IProps {
    onTaskChangeStatus: () => void,
    task: ITask
}