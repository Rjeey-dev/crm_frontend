import { shallow } from 'enzyme';
import React from 'react';

import Icon from '../Icon/index';
import Row from './index';

it("Renders <Row/> with correct properties", () => {
    const output = shallow(
        <Row>
            <Icon classes='icon'/>
        </Row>
    ).html();

    expect(output).toMatchSnapshot();
});