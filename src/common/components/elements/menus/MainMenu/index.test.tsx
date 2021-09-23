import { shallow } from 'enzyme';
import React from 'react';

import HeaderLinks from './index';

it("Renders <HeaderLinks/> with correct properties", () => {
    const output = shallow(
        <HeaderLinks/>
    ).html();

    expect(output).toMatchSnapshot();
});
