import { shallow } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import {LogOutLink} from '.';

const initialState = {};
const mockStore = configureStore();
const store = mockStore(initialState);

const validLogout = {
    auth: {}
};

const inValidLogout = {
    auth: {
        id: 'userId'
    },
};

describe('container <LogOutLink />', () => {
    let wrapper;
    let container;

    it('should render', () => {
        // @ts-ignore
        wrapper = shallow(<LogOutLink {...validLogout}/>);

        expect(wrapper).toBeTruthy();
    });

    it('should map state to props for valid logout', () => {
        // @ts-ignore
        wrapper = shallow(<Provider store={store}><LogOutLink {...inValidLogout}/></Provider>);
        container = wrapper.find('LogOutLink');

        // @ts-ignore
        expect(Object.keys(container.props().auth)).toEqual(Object.keys(inValidLogout.auth));
    });

    it('should render container for invalid logout', () => {
        // @ts-ignore
        wrapper = shallow(<LogOutLink {...inValidLogout}/>);

        const link = wrapper.find('Link');

        expect(link).toBeDefined();
        expect(link.prop('onClick')).toBeTruthy();

        const translation = wrapper.find('Translation');

        expect(translation).toBeDefined();
        expect(translation.prop('source')).toEqual({id: 'menus.header_user_menu.sign_out'});
    });

    it.skip('should logout after click', () => {
        // @ts-ignore
        wrapper = shallow(<LogOutLink store={store} {...inValidLogout}/>);

        const event = {
            preventDefault: jest.fn()
        };

        const button = wrapper.find('Link');
        button.simulate('click', event);

        const actions = store.getActions();
        expect(actions).toEqual([ { type: 'ON_SUCCESSFUL_LOGOUT' } ]);
    });
});