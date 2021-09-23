import { shallow } from 'enzyme';
import React from 'react';

import Translation from './index';

it("Renders <Translation/> with correct properties", () => {
    const output = shallow(
        <Translation source={{id: 'some_id'}}/>
    ).html();

    expect(output).toMatchSnapshot();
});

it("Renders <Translation/> with data", () => {
    const output = shallow(
        <Translation source={{id: 'some_id_with_dynamic_translation', data: {name: 'name'}}}/>
    ).html();

    expect(output).toMatchSnapshot();
});
