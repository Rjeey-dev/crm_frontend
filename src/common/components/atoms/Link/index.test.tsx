import { shallow } from 'enzyme';
import React from 'react';

import Checkbox from '../Checkbox/index';
import Icon from '../Icon/index';
import Link from './index';

it("Renders <Link/> with correct properties", () => {
    const output = shallow(
        <Link href='/login' attributes={{lang: 'en'}} id='login-link' classes='class' onClick={jest.fn()}>
            <Icon classes='icon'/>
            Some text
            <Checkbox/>
        </Link>
    ).html();

    expect(output).toMatchSnapshot();
});

it("Renders <Link/> with only required props", () => {
    const output = shallow(
        <Link><Icon classes='icon'/></Link>
    ).html();

    expect(output).toMatchSnapshot();
});