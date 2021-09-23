import { shallow } from 'enzyme';
import React from 'react';

import SelectOption from './index';

it("Renders <SelectOption/> with correct properties", () => {
    const output = shallow(
        <SelectOption value='one' text='One'/>
    ).html();

    expect(output).toMatchSnapshot();
});
