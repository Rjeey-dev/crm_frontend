import configureStore from 'redux-mock-store';
import entitiesMiddleware from './middleware';

jest.mock('./schemas', () => {
    const { schema } = require('normalizr');
    return {
        entity: new schema.Entity('entity'),
    }
});

const mockStore = configureStore([entitiesMiddleware]);

it('dispatches the exactly same action', () => {
    const store = mockStore({});
    const action = { type: 'FOO', payload: 1 };
    expect(store.dispatch(action)).toEqual(action);
    expect(store.getActions()).toEqual([action])
});

it('dispatches the exactly same action if there is no schema', () => {
    const store = mockStore({});
    const action = {
        type: 'FOO',
        payload: { id: 2, foo: 'bar' },
        meta: { entities: 'noentity' },
    };
    expect(store.dispatch(action)).toEqual(action);
    expect(store.getActions()).toEqual([action])
});

it('dispatches entities action along with the normalized action', () => {
    const store = mockStore({});
    const action = {
        type: 'FOO',
        payload: { id: 2, foo: 'bar' },
        meta: { entities: 'entity' },
    };
    expect(store.dispatch(action)).toEqual({ ...action });
    expect(store.getActions()).toEqual([
        { ...action },
    ])
});

it('dispatches entities action along with array', () => {
    const store = mockStore({});
    const action = {
        type: 'FOO',
        payload: [{ id: 2, foo: 'bar' }],
        meta: { entities: 'entity' },
    };
    expect(store.dispatch(action)).toEqual({ ...action });
});