import {RouterState} from "connected-react-router";
import {LocalizeState} from "react-localize-redux";

import {IEntitiesState, IMeta} from "store/entities/interfaces";
import {ISettingsState} from "store/settings/interfaces";
import {IAuthState} from "store/users/interfaces";

export interface IEvent {
    type: string,
    payload: any
}

export interface IFormEvent extends IEvent {
    formName: string
}

export interface IEventWithMeta extends IEvent {
    meta: IMeta
}

export interface IState {

}

export interface IBaseState extends IState {
    users: IAuthState,
    settings: ISettingsState,
    app: IAppState,
    localize: LocalizeState,
    router: RouterState
}

export interface IAppState {
    entities: IEntitiesState,
}

export interface IStates {
    getState: () => { users: IAuthState } | undefined
}