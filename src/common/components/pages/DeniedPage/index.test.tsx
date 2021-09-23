import {shallow} from "enzyme";
import React from 'react';

import DeniedPage from './index';

jest.mock('elements/blocks/Denied', () => 'denied-block');

it("Renders <DeniedPage/> with correct properties", () => {
    const output = shallow(
        <DeniedPage/>
    ).html();

    expect(output).toMatchSnapshot();
});
