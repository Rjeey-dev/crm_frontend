import { shallow } from 'enzyme';
import React from 'react';

import Divider from './index';

it("Renders <Divider/> with correct properties", () => {
    const output = shallow(
        <Divider/>
    ).html();

    expect(output).toMatchSnapshot();
});
