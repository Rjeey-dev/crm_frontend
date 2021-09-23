import {ENTITIES_CREATED, ENTITIES_FETCHED_FAILED} from "./actions";

export interface IMeta {
    schema: string
}

export interface IWatchFailedToFetchEntitiesEvent {
    type: typeof ENTITIES_FETCHED_FAILED
    meta: IMeta
}

export interface IEventSingleEntity {
    type: typeof ENTITIES_CREATED,
    payload: IEntity,
    meta: IMeta
}

export interface IEntitiesState {

}

export interface IEntity {

}

export interface IVideo {
    source: string,
    provider: string,
    id: string
}