import * as actions from './actions';

describe('Actions', () => {
    it('onFormSubmitted', () => {
        const type = 'ON_SIGNUP_FORM_SUBMITTED';
        const formName = 'signUp';
        const payload = {
            login: 'login',
            password: 'pass',
            passwordRepeat: 'pass',
            email: 'email@email.com',
            lang: 'en'
        };

        expect(actions.onFormSubmitted(type, payload, formName)).toEqual({
            type,
            payload,
            formName
        })
    });
});