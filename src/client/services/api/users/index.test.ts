import {expectRequest} from 'services/api/test.common.ts';
import Users from '.';
import ApiException from '../exceptions';
import Api, {IApiSettings} from "../index";

const api = new Api({} as IApiSettings);

describe('service <Users />', () => {
    it('instance works', () => {
        const settings = createService();

        // @ts-ignore
        expect(settings.state.api).toEqual(api);
    });

    it('update settings works', () => {
        const user = {
            id: 'userId',
        };
        const settings = {
            defaultLang: 'en',
            country: 'pt',
        };
        const response = {
            id: user.id,
            settings
        };

        // @ts-ignore
        api.patch = (endpoint: string, data: any) => {
            expectRequest(endpoint, '/users/' + user.id, data, settings);

            return response;
        };

        const users = createService();

        // @ts-ignore
        expect(response).toEqual(users.update(user, settings));
    });

    it('update settings throws exception', () => {
        const user = {
            id: 'userId',
        };
        const settings = {};

        // @ts-ignore
        api.patch = (endpoint: string, data: any) => {
            expectRequest(endpoint, '/users/' + user.id, data, {settings});

            throw new ApiException('error');
        };

        const users = createService();

        expect(() => {
                // @ts-ignore
            users.update(user, settings)}).toThrow(Error);
    });

    it('login works', () => {
        const login = 'login';
        const password = 'password';
        const lang = 'en';

        const response = {
            id: 'userId',
        };

        // @ts-ignore
        api.post = (endpoint: string, data: any) => {
            expectRequest(endpoint, '/auth/login', data, {login, password, lang});

            return response;
        };

        const auth = createService();

        expect(response).toEqual(auth.login(login, password, lang));
    });

    it('login throws exception', () => {
        const login = 'login';
        const password = 'password';
        const lang = 'en';

        // @ts-ignore
        api.post = (endpoint: string, data: any) => {
            expectRequest(endpoint, '/auth/login', data, {login, password, lang});

            throw new ApiException('error');
        };

        const auth = createService();

        expect(() => {auth.login(login, password, lang)}).toThrow(Error);
    });

    it('register works', () => {
        const response = {
            id: 'userId',
        };
        const login = 'login';
        const password = 'password';
        const email = 'email@email.com';
        const lang = 'en';

        // @ts-ignore
        api.post = (endpoint: stirng, data: any) => {
            expectRequest(endpoint, '/auth/register', data, {login, email, password, lang}, );

            return response;
        };
        const auth = createService();

        expect(response).toEqual(auth.register(login, email, password, lang));
    });

    it('register throws exception', () => {
        const login = 'login';
        const password = 'password';
        const email = 'email@email.com';
        const lang = 'en';

        // @ts-ignore
        api.post = (endpoint: string, data: any) => {
            expectRequest(endpoint, '/auth/register', data, {login, email, password, lang}, );

            throw new ApiException('error');
        };

        const auth = createService();

        expect(() => {auth.register(login, email, password, lang)}).toThrow(Error);
    });

    it('remind works', () => {
        const email = 'email@email.com';
        const response = {
            email,
        };

        // @ts-ignore
        api.post = (endpoint: string, data: any) => {
            expectRequest(endpoint, '/auth/remind', data, {email});

            return response;
        };
        const auth = createService();

        expect(response).toEqual(auth.remind(email));
    });

    it('remind throws exception', () => {
        const email = 'email@email.com';

        // @ts-ignore
        api.post = (endpoint: string, data: any) => {
            expectRequest(endpoint, '/auth/remind', data, {email});

            throw new ApiException('error');
        };

        const auth = createService();

        expect(() => {auth.remind(email)}).toThrow(Error);
    });
});

const createService = (): Users => {
    return new Users(api);
};
