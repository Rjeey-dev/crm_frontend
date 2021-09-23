import { shallow } from 'enzyme';
import React from 'react';

import Input from './index';

it("Renders <Input/> textarea", () => {
    const output = shallow(
        <Input classes='class' type='textarea'/>
    ).html();

    expect(output).toMatchSnapshot();
});

it("Renders <Input/> select", () => {
    const output = shallow(
        <Input classes='class' type='select'/>
    ).html();

    expect(output).toMatchSnapshot();
});

it("Renders <Input/> text", () => {
    const output = shallow(
        <Input classes='class'/>
    ).html();

    expect(output).toMatchSnapshot();
});