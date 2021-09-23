import values from 'lodash/values';
import * as selectors from './selectors';

jest.mock('./schemas', () => {
    const { schema } = require('normalizr');
    return {
        entity: new schema.Entity('entity'),
    }
});

const altState = {
    entity: {
        1: {
            id: 1,
            title: 'test',
            description: 'test',
        },
        2: {
            id: 2,
            title: 'test 2',
            description: 'test 2',
        },
    },
};

test('initialState', () => {
    expect(selectors.initialState).toEqual({})
});

test('getEntity', () => {
    expect(selectors.getEntity(altState, 'test')).toEqual({});
    expect(selectors.getEntity(altState, 'entity')).toEqual(altState.entity)
});

test('getDetail', () => {
    expect(selectors.getDetail(altState, 'entity', '1')).toEqual(altState.entity[1])
});

test('getList', () => {
    expect(selectors.getList(altState, 'entity')).toEqual(values(altState.entity));
    expect(selectors.getList(altState, 'entity', ['1'])).toEqual([altState.entity[1]])
});

test('getDenormalizedDetail', () => {
    expect(selectors.getDenormalizedDetail(altState, 'entity', '1')).toEqual(altState.entity[1])
});

test('getDenormalizedList', () => {
    expect(selectors.getDenormalizedList(altState, 'entity', ['1'])).toEqual([altState.entity[1]])
});

test('getEntitiesState', () => {
    const notifications = [
        {
            id: 1,
        },
        {
            id: 2,
        }
    ];

    expect(selectors.getEntitiesState( {
        // @ts-ignore
        app: {
            entities: {
                notifications
            }
        }
    })).toEqual({
        notifications
    });
});