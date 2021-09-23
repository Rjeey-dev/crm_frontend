import * as lodash from 'lodash';
import Api, {IApiSettings} from '.';

jest.mock('config', () => ({
    apiUrl: 'https://api.foo.com',
}));

const token = 'token';
const api = new Api({} as IApiSettings, token);

describe('checkStatus', () => {
    it('returns response when it is ok', () => {
        const response = { ok: true };
        // @ts-ignore
        expect(api.checkStatus(response)).toBe(response)
    });

    it('throws when it is not ok', () => {
        const response = { ok: false };
        // @ts-ignore
        expect(() => api.checkStatus(response)).toThrow()
    })
});

describe('parseJSON', () => {
    it('calls response.json', () => {
        const response = {
            json: jest.fn(() => 'foo'),
        };
        // @ts-ignore
        expect(api.parseJSON(response)).toBe('foo')
    })
});

describe('parseSettings', () => {
    it('has method get by default', () => {
        // @ts-ignore
        expect(api.parseSettings({}).method).toBe('get')
    });

    it('has normal body', () => {
        // @ts-ignore
        expect(api.parseSettings({ body: 'foo' }).body).toBe('foo')
    });

    it('has data body', () => {
        // @ts-ignore
        expect(api.parseSettings({ data: { foo: 'bar' } }).body)
            .toBe(JSON.stringify({ foo: 'bar' }))
    });

    it('has passed method', () => {
        // @ts-ignore
        expect(api.parseSettings({ method: 'POST' }).method).toBe('POST')
    });

    it('merges headers', () => {
        const otherSettings = { headers: { foo: 'bar' } };
        // @ts-ignore
        const settings = api.parseSettings(otherSettings);
        expect(settings).toHaveProperty('headers.foo', 'bar');
        // @ts-ignore
        expect(Object.keys(settings.headers).length)
            .toBeGreaterThan(Object.keys(otherSettings.headers).length)
    })
});

describe('parseEndpoint', () => {
    it('appends endpoint to apiUrl', () => {
        expect(api.parseEndpoint('/foo')).toBe('https://api.foo.com/foo')
    });

    it('parses params', () => {
        expect(api.parseEndpoint('/foo', { bar: 'baz' })).toBe('https://api.foo.com/foo?bar=baz')
    });

    it('parses url other than apiUrl', () => {
        expect(api.parseEndpoint('https://foo.bar/baz')).toBe('https://foo.bar/baz')
    })
});

describe('api', () => {
    beforeEach(() => {
        // @ts-ignore
        global.fetch = jest.fn(() => Promise.resolve({
            ok: true,
            json: jest.fn(),
        }))
    });

    test('request', async () => {
        // @ts-ignore
        expect(global.fetch).not.toBeCalled();
        // @ts-ignore
        await api.request('/foo');
        // @ts-ignore
        expect(global.fetch).toHaveBeenCalledWith(
            'https://api.foo.com/foo',
            expect.objectContaining({
                method: 'get',
            })
        )
    })

    ;['delete', 'get', 'post', 'put', 'patch'].forEach((method) => {
        test(method, async () => {
            // @ts-ignore
            expect(global.fetch).not.toBeCalled();
            await api[method]('/foo');
            // @ts-ignore
            expect(global.fetch).toHaveBeenCalledWith(
                'https://api.foo.com/foo',
                {
                    body: undefined,
                    headers: {
                        Accept: 'application/json',
                        'Accept-Language': undefined,
                        Authorization: 'Bearer '  + token,
                        'Content-Type': 'application/json'
                    },
                    method: lodash.toUpper(method)
                }
            )
        })
    });

    describe('create', () => {
        const settings = { headers: {foo: 'bar' }};
        const api = new Api(settings as IApiSettings, token);

        beforeEach(() => {
            // @ts-ignore
            api.request = jest.fn()
        });

        it('has settings', () => {
            // @ts-ignore
            expect(api.settings).toEqual({
                headers: {
                    foo: 'bar',
                    Authorization: 'Bearer token',
                },
            })
        });

        test('setToken', () => {
            api.setToken('some token');
            expect(api.settings).toEqual({
                headers: {
                    foo: 'bar',
                    Authorization: 'Bearer some token',
                },
            })
        });

        test('unsetToken', () => {
            api.unsetToken();
            expect(api.settings).toEqual({ headers: { foo: 'bar' } })
        });

        test('request', () => {
            api.request('/foo', { baz: 'qux' });
            // @ts-ignore
            expect(api.request).toHaveBeenCalledWith('/foo', {
                baz: 'qux',
            })
        })

        ;['get', 'delete'].forEach((method) => {
            test(method, () => {
                api[method]('/foo', { baz: 'qux' });
                // @ts-ignore
                expect(api.request).toHaveBeenCalledWith('/foo', {
                    baz: 'qux',
                    method: method.toUpperCase(),
                })
            })
        })

        ;['post', 'put', 'patch'].forEach((method) => {
            test(method, () => {
                api[method]('/foo', { field: 'value' }, { baz: 'qux' });
                // @ts-ignore
                expect(api.request).toHaveBeenCalledWith('/foo', {
                    baz: 'qux',
                    data: {
                        field: 'value',
                    },
                    method: method.toUpperCase(),
                })
            })
        })
    })
});