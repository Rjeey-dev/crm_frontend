import React from 'react';
import { shallow } from 'enzyme';

import Icon from '../Icon/index';
import Column from './index';

it("Renders <Column/> with correct properties", () => {
    const output = shallow(
        <Column classes='col-sm-6'>
            <Icon classes='icon'/>
        </Column>
    ).html();

    expect(output).toMatchSnapshot();
});

it("Renders <Column/> with only required props", () => {
    const output = shallow(
        <Column>
            <Icon classes='icon'/>
        </Column>
    ).html();

    expect(output).toMatchSnapshot();
});