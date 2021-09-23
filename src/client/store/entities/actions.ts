import {IEntity} from "store/entities/interfaces";
import {IEvent, IEventWithMeta} from "store/interfaces";
import {IEventSingleEntity} from "./interfaces";

export const ENTITIES_RECEIVE = 'ENTITIES_RECEIVE';
export const ENTITIES_FETCHED_SUCCESSFUL = 'ENTITIES_FETCHED_SUCCESSFUL';
export const ENTITIES_FETCHED_FAILED = 'ENTITIES_FETCHED_FAILED';
export const ENTITIES_CREATED = 'ENTITIES_CREATED';
export const ENTITIES_SHOULD_BE_CLEANED = 'ENTITIES_SHOULD_BE_CLEANED';

export const onEntitiesFetchedSuccessful = (entities: IEntity[], schema: string): IEventWithMeta => ({
    meta: {
        schema
    },
    payload: entities,
    type: ENTITIES_FETCHED_SUCCESSFUL,
});

export const onEntitiesFetchedFailed = (schema: string): IEvent => ({
    payload: {
        schema
    },
    type: ENTITIES_FETCHED_FAILED,
});

export const onEntitiesShouldBeCleaned = (schema: string): IEvent => ({
    payload: {
        schema
    },
    type: ENTITIES_SHOULD_BE_CLEANED,
});

export const onEntitiesReceived = (entities: IEntity[]): IEvent => ({
    payload: entities,
    type: ENTITIES_RECEIVE
});

export const onEntityCreated = (entity: IEntity, schema: string): IEventSingleEntity => ({
    meta: {
        schema
    },
    payload: entity,
    type: ENTITIES_CREATED,
});

export const buildEntityReceiveActionName = (key: string) => {
    return ['ON', key.toUpperCase(), 'RECEIVE'].join('_');
};
