import {shallow} from "enzyme";
import React from 'react';

import Span from '../../atoms/Span/index';
import ContentTemplate from './index';

it("Renders <ContentTemplate/> with correct properties", () => {
    const output = shallow(
        <ContentTemplate>
            <Span/>
        </ContentTemplate>
    ).html();

    expect(output).toMatchSnapshot();
});
