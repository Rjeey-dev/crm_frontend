import { shallow } from 'enzyme';
import React from 'react';

import Paragraph from "../../atoms/Paragraph/index";
import SecuredRoute from "./index";

it("Renders <SecuredRoute/>", () => {
    const path = '/dashboard';
    const wrapper = shallow(<SecuredRoute exact={true} path={path}><Paragraph/></SecuredRoute>);

    expect(wrapper.find('Route')).toBeDefined();
    expect(wrapper.find('Authorization')).toBeDefined();
    expect(wrapper.find('TextBlock')).toBeDefined();
});
