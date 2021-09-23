import {ITask} from "store/tasks/interfaces";

export interface IMapDispatchToProps {
    onTasksBoardInitialized: () => void
}

export interface IMapStateToProps {
    tasks: ITask[]
}

export interface IProps extends IMapStateToProps, IMapDispatchToProps {

}