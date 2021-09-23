import * as actions from './actions';

describe('Actions', () => {
    it('onSuccessfulLogOut', () => {
        expect(actions.onSuccessfulLogOut()).toEqual({
            type: actions.ON_SUCCESSFUL_LOGOUT
        })
    });
});