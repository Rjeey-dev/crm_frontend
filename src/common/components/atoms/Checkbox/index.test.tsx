import { shallow } from 'enzyme';
import React from 'react';

import Checkbox from './index';
import Icon from "../Icon/index";

it("Renders <Checkbox/> with correct properties", () => {
    const output = shallow(
        <Checkbox classes='class'>
            <Icon classes='icon'/>
        </Checkbox>
    ).html();

    expect(output).toMatchSnapshot();
});

it("Renders <Checkbox/> with only required props", () => {
    const output = shallow(
        <Checkbox classes='class'/>
    ).html();

    expect(output).toMatchSnapshot();
});