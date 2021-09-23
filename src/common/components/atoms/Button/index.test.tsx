import { shallow } from 'enzyme';
import React from 'react';

import Icon from '../Icon/index';
import Button from './index';

it("Renders <Button/> with correct properties", () => {
    const output = shallow(
        <Button disabled={true} classes='class'>
            <Icon classes='icon'/>
            Text
        </Button>
    ).html();

    expect(output).toMatchSnapshot();
});

it("Renders <Button/> with only required props", () => {
    const output = shallow(
        <Button/>
    ).html();

    expect(output).toMatchSnapshot();
});
