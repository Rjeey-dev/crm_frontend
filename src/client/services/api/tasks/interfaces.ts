import ApiException from "services/api/exceptions";
import {ITask} from "store/tasks/interfaces";

export interface ITasks {
    getAll: () => ITask[] | ApiException,
    update: (id: number, data: any) => ITask | ApiException,
    create: (data: any) => ITask | ApiException,
    delete: (id: string) => void | ApiException,
}