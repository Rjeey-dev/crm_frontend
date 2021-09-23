import { shallow } from 'enzyme';
import React from 'react';

import DeniedPage from '../../pages/DeniedPage/index';
import Can from "./index";
import {abilities} from '../../../../client/ability';
import Paragraph from "../../atoms/Paragraph/index";

it("Renders <Can/> for auth user", () => {
    const wrapper = shallow(<Can abilities={abilities.admin} run='visit' on='/dashboard'><Paragraph/></Can>);

    expect(wrapper.find('TextBlock')).toBeDefined();
});

it("Renders <Can/> for anonymous user", () => {
    const wrapper = shallow(<Can abilities={abilities.anonymous} run='visit' on='/dashboard'><Paragraph/></Can>);

    expect(wrapper.find(DeniedPage)).toBeDefined();
});