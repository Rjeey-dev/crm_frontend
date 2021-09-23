import {shallow} from "enzyme";
import React from 'react';

import Header from './index';

jest.mock('containers/blocks/Notifications', () => 'notifications');
jest.mock('containers/blocks/Settings/OpenCloseButton', () => 'open-close-button');
jest.mock('containers/links/LogOut', () => 'logout-link');

it("Renders <Header/> with correct properties", () => {
    const output = shallow(
        <Header/>
    ).html();

    expect(output).toMatchSnapshot();
});