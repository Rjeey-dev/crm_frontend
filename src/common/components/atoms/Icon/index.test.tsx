import { shallow } from 'enzyme';
import React from 'react';

import Icon from './index';

it("Renders <Icon/> with correct properties", () => {
    const output = shallow(
        <Icon classes='class'/>
    ).html();

    expect(output).toMatchSnapshot();
});

it("Renders <Icon/> with attributes", () => {
    const output = shallow(
        <Icon classes='class' attributes='test'/>
    ).html();

    expect(output).toMatchSnapshot();
});
