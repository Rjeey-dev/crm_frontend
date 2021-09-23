import { shallow } from 'enzyme';
import React from 'react';

import Logo from './index';

it("Renders <Logo/> with correct properties", () => {
    const output = shallow(
        <Logo href='dashboard' classes='class' src='/images/logo.png'/>
    ).html();

    expect(output).toMatchSnapshot();
});

it("Renders <Logo/> with only required props", () => {
    const output = shallow(
        <Logo href='dashboard' src='/images/logo.png'/>
    ).html();

    expect(output).toMatchSnapshot();
});