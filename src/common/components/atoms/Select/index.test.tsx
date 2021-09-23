import { shallow } from 'enzyme';
import React from 'react';

import SelectOption from '../SelectOption/index';
import Select from './index';

it("Renders <Select/> with correct properties", () => {
    const output = shallow(
        <Select classes='class'>
            <SelectOption value='value1' text='text1'/>
            <SelectOption value='value2' text='text2'/>
            <SelectOption value='value3' text='text3'/>
            <SelectOption value='value4' text='text4'/>
        </Select>
    ).html();

    expect(output).toMatchSnapshot();
});