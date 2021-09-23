import Api from "services/api";
import {IApi, IApiSettings} from "services/api/interfaces";
import Users from "services/api/users";
import {IUsers} from "services/api/users/interfaces";
import {IBaseState} from "store/interfaces";
import {getUserToken, normalizeState as normalizeUserState} from "store/users/selectors";
import {IServices} from "./interfaces";
import {ITasks} from "services/api/tasks/interfaces";
import Tasks from "services/api/tasks";

class Services implements IServices {
    public api: IApi;
    public users: IUsers;
    public tasks: ITasks;
}

export const configureServices = (state: IBaseState): IServices => {
    const services = new Services();

    services.api = new Api({} as IApiSettings, getUserToken(normalizeUserState(state as IBaseState)));
    services.users = new Users(services.api);
    services.tasks = new Tasks(services.api);

    return services;
};