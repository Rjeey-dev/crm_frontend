import {configureServices} from '.';
import Api from "./api";

const token = 'token';

jest.mock('store/users/selectors', () => ({
    __esModule: true,
    getUserToken: jest.fn(() => {
        return 'token';
    }),
    normalizeState: jest.fn(() => {
        return {
            auth: {
                token: 'token'
            }
        };
    })
}));

test('configure services properly', () => {
    const services = configureServices({});

    expect(JSON.stringify(services.api)).toEqual(JSON.stringify(new Api({}, token)));
});