import { denormalize } from 'normalizr';

import {IBaseState} from "store/interfaces";
import {IEntitiesState, IEntity} from "./interfaces";
import * as schemas from './schemas';

export const initialState = {};

export const getEntity = (state: IEntitiesState = initialState, entity: string): IEntity => {
    return state[entity] || {};
};

export const getEntityKeys = (state: IEntitiesState, entity: string): string[] => {
    return Object.keys(getEntity(state, entity));
};

export const getDetail = (state: IEntitiesState, entity: string, id: string): object => {
    if ('app' in state) {
        return getEntity(normalizeState(state), entity)[id];
    }

    return getEntity(state, entity)[id];
};

export const getList = (state: IEntitiesState = initialState, entity: string, ids?: string[] | null): IEntity[] => {
    return (ids || getEntityKeys(state, entity)).map(id => getDetail(state, entity, id));
};

export const getDenormalizedDetail = (state: IEntitiesState = initialState, entity: string, id: string): any[] =>
    denormalize(id, schemas[entity], state);

export const getDenormalizedList = (state: IEntitiesState = initialState, entity: string, ids: string[]): any[] =>
    denormalize(ids || getEntityKeys(state, entity), [schemas[entity]], state);

export const getEntitiesState = (state: IBaseState): IEntitiesState => {
    return state.app.entities;
};

export const normalizeState = (state: IBaseState): IEntitiesState => {
    return state.app.entities;
};

export const entitiesAreEqual = (listLeft: any, listRight: any, field: string) => {
    const currentIds = listLeft.map((item: any) => item[field]);
    let equal = true;

    listRight.map((item: any) => {
        if (!currentIds.includes(item[field])) {
            equal = false;
        }
    });

    return equal;
};
