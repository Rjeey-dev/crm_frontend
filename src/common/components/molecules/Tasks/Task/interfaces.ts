import {ITask} from "store/tasks/interfaces";
import {IUser} from "store/users/interfaces";

export interface IProps {
    onTaskChangeStatus: () => void,
    onTaskDelete: () => void,
    task: ITask,
    currentUser: IUser
}