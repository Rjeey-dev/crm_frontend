import {ITask} from "store/tasks/interfaces";

export interface IMapDispatchToProps {
    onTaskChangeStatus: (task: ITask, status: number) => void
}

export interface IProps extends IMapDispatchToProps {
    task: ITask
}