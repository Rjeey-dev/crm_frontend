import * as selectors from './selectors';
import {IState} from "./selectors";

jest.mock('react-localize-redux', () => ({
    __esModule: true,
    getTranslate: jest.fn(() => {
        return () => {
            return 'translation'
        }
    }),
}));

test('getTranslation', () => {
    expect(selectors.getTranslation({localize: {}} as IState, {id: 'translationId'})).toEqual('translation');
});