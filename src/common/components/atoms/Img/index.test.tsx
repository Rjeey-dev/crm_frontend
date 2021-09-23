import { shallow } from 'enzyme';
import React from 'react';

import Img from './index';

it("Renders <Img/> with correct properties", () => {
    const output = shallow(
        <Img classes='class' src='/images/image.png' alt='alt' title='title' width={30}/>
    ).html();

    expect(output).toMatchSnapshot();
});

it("Renders <Img/> with only required props", () => {
    const output = shallow(
        <Img src='/images/image.png'/>
    ).html();

    expect(output).toMatchSnapshot();
});