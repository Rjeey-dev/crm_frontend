import { shallow } from 'enzyme';
import React from 'react';

import InputStatus from './index';

it("Renders <InputStatus/> default and valid", () => {
    const output = shallow(
        <InputStatus isDefault={true} isValid={true}/>
    ).html();

    expect(output).toMatchSnapshot();
});

it("Renders <InputStatus/> default and not valid", () => {
    const output = shallow(
        <InputStatus isDefault={true} isValid={false}/>
    ).html();

    expect(output).toMatchSnapshot();
});

it("Renders <InputStatus/> not default and valid", () => {
    const output = shallow(
        <InputStatus isDefault={false} isValid={true}/>
    ).html();

    expect(output).toMatchSnapshot();
});

it("Renders <InputStatus/> not default and not valid", () => {
    const output = shallow(
        <InputStatus isDefault={false} isValid={false}/>
    ).html();

    expect(output).toMatchSnapshot();
});