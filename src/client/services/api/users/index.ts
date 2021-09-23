import ApiException from '../exceptions';

import {IApi} from "services/api/interfaces";
import {IUser} from 'store/users/interfaces';
import {IAuthResponse, IUsers} from "./interfaces";

class Users implements IUsers {
    private state: { api: IApi; };

    constructor(api: IApi) {
        this.state = {api};
    }

    public getAll = (): IUser[] | ApiException => {
        return this.state.api.get('/admin/users') as IUser[];
    };

    public get = (userId: string): IUser | ApiException => {
        return this.state.api.get('/admin/users/' + userId) as IUser;
    };

    public logout = (): ApiException => {
        const result = this.state.api.post('/v1/auth/logout');
        this.state.api.unsetToken();

        return result as ApiException;
    };

    public loginGoogle = (payload: any): IAuthResponse | ApiException => {
        this.state.api.setToken(payload.token);

        return this.state.api.post('/v1/auth/google', payload) as IAuthResponse;
    };

    public delete = (userId: string): ApiException => {
        return this.state.api.delete('/admin/users/' + userId) as any;
    };

    public update = (userId: string, data: any): ApiException => {
        return this.state.api.patch('/admin/users/' + userId, data) as any;
    };
}

export default Users