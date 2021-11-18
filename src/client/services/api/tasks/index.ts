import ApiException from '../exceptions';

import {IApi} from "services/api/interfaces";
import {ITasks} from "./interfaces";
import {ITask} from "store/tasks/interfaces";

class Tasks implements ITasks {
    private state: { api: IApi; };

    constructor(api: IApi) {
        this.state = {api};
    }

    public getAll = (): ITask[] | ApiException => {
        return this.state.api.get('/v1/tasks') as ITask[];
    };

    public update = (id: number, data: any): ITask | ApiException => {
        return this.state.api.patch('/v1/tasks/' + id, {...data}) as ITask;
    };

    public create = (data: any): ITask | ApiException => {
        return this.state.api.post('/v1/tasks', {...data}) as ITask;
    };

    public delete = (id: string): void | ApiException => {
        this.state.api.delete('/v1/tasks/' + id);
    };
}

export default Tasks