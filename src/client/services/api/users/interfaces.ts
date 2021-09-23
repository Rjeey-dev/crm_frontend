import ApiException from "services/api/exceptions";
import {IUser} from "store/users/interfaces";

export interface IRemindResponse {
    email: string
}

export interface IAuthResponse {
    registration: boolean,
    user: IUser
}

export interface IUsers {
    getAll: () => IUser[] | ApiException,
    loginGoogle: (payload: any) => IAuthResponse | ApiException,
    logout: () => ApiException,
    delete: (userId: string) => ApiException,
    update: (userId: string, data: any) => ApiException,
    get: (userId: string) => IUser | ApiException,
}