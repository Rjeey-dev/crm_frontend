import { shallow } from 'enzyme';
import React from 'react';

import Span from './index';

it("Renders <Span/> with correct properties", () => {
    const output = shallow(
        <Span classes='class' attributes={{rel: 'rel'}} onClick={jest.fn()}>
            Some text
        </Span>
    ).html();

    expect(output).toMatchSnapshot();
});

it("Renders <Span/> with only required props", () => {
    const output = shallow(
        <Span/>
    ).html();

    expect(output).toMatchSnapshot();
});