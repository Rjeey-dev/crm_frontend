import { shallow } from 'enzyme';
import React from 'react';

import HeaderUserMenu from "./index";

jest.mock('containers/links/LogOut', () => 'log-out-link');

it("Renders <HeaderUserMenu/> with correct properties", () => {
    expect(
        shallow(<HeaderUserMenu id='header-user-menu' classes='classes'/>).html()
    ).toMatchSnapshot();
});

it("Renders <HeaderUserMenu/> with only required props", () => {
    expect(
        shallow(<HeaderUserMenu id='header-user-menu'/>).html()
    ).toMatchSnapshot();
});