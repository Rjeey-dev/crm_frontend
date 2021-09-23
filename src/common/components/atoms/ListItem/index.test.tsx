import { shallow } from 'enzyme';
import React from 'react';

import Icon from '../Icon/index';
import ListItem from './index';

it("Renders <ListItem/> with correct properties", () => {
    const output = shallow(
        <ListItem classes='class'>
            <Icon classes='icon'/>
        </ListItem>
    ).html();

    expect(output).toMatchSnapshot();
});

it("Renders <ListItem/> with only required props", () => {
    const output = shallow(
        <ListItem>
            <Icon classes='icon'/>
        </ListItem>
    ).html();

    expect(output).toMatchSnapshot();
});