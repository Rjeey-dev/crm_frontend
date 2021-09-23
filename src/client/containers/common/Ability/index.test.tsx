import { shallow } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';


import Paragraph from "atoms/Paragraph";
import {abilities} from 'client/ability';
import {Ability} from '.';

const admin = 'admin';

const initialState = {};
const mockStore = configureStore();
const store = mockStore(initialState);

const validAbility = {
    run: 'visit',
    on: '/dashboard',
    userRole: admin
};

describe('container <Ability />', () => {
    let wrapper;
    let container;

    it('should render', () => {
        wrapper = shallow(<Ability {...validAbility}>
            <Paragraph/>
        </Ability>);

        expect(wrapper).toBeTruthy();
    });

    it('should map state to props for valid ability', () => {
        wrapper = shallow(<Provider store={store}><Ability {...validAbility}><Paragraph/></Ability></Provider>);
        container = wrapper.find('Ability');

        // @ts-ignore
        expect(Object.keys(container.props().run)).toEqual(Object.keys(validAbility.run));
        // @ts-ignore
        expect(Object.keys(container.props().on)).toEqual(Object.keys(validAbility.on));
    });

    it('should render container for valid ability', () => {
        wrapper = shallow(<Ability {...validAbility}><Paragraph/></Ability>);

        const can = wrapper.find('Can');

        expect(can).toBeDefined();
        expect(can.prop('abilities')).toEqual(abilities[admin]);
        expect(can.prop('run')).toEqual(validAbility.run);
        expect(can.prop('on')).toEqual(validAbility.on);
    });
});