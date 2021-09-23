import * as actions from './actions'

describe('Actions', () => {
    it('onEntitiesReceived', () => {
        const entities = [
            {
                id: 1,
                name: 'name'
            },
            {
                id: 2,
                name: 'name2'
            }
        ];

        expect(actions.onEntitiesReceived(entities)).toEqual({
            type: actions.ENTITIES_RECEIVE,
            payload: entities,
        })
    });

    it('onEntityCreated', () => {
        const schema = 'user';
        const entity = {
            id: 1,
            name: 'name'
        };
        expect(actions.onEntityCreated(entity, schema)).toEqual({
            type: actions.ENTITIES_CREATED,
            payload: entity,
            meta: {
                schema
            },
        })
    });

    it('onEntitiesFetchedSuccessful', () => {
        const schema = 'user';
        const entities = [
            {
                id: 1,
                name: 'name'
            },
            {
                id: 2,
                name: 'name2'
            }
        ];

        expect(actions.onEntitiesFetchedSuccessful(entities, schema)).toEqual({
            type: actions.ENTITIES_FETCHED_SUCCESSFUL,
            payload: entities,
            meta: {
                schema
            }
        })
    })
});