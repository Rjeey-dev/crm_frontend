import {shallow} from "enzyme";
import React from 'react';

import FormItem from './index';

it("Renders <FormItem/> with correct properties with wrapper", () => {
    const output = shallow(
        <FormItem meta={{touched: true, error: 'error'}} input={{}}/>
    ).html();

    expect(output).toMatchSnapshot();
});