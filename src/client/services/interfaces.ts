import {IApi} from "services/api/interfaces";
import {IUsers} from "services/api/users/interfaces";

export interface IServices {
    api: IApi,
    users: IUsers,
}