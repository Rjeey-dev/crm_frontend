import {ITask} from "store/tasks/interfaces";

export interface IMapDispatchToProps {
    onTaskChangeStatus: (task: ITask, status: number) => void,
    onTaskDelete: (task: ITask) => void,
}

export interface IProps extends IMapDispatchToProps {
    task: ITask
}