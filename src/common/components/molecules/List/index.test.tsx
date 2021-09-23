import {shallow} from "enzyme";
import React from 'react';

import ListItem from "../../atoms/ListItem/index";
import Span from "../../atoms/Span/index";
import List from './index';

it("Renders <List/> with correct properties", () => {
    const output = shallow(
        <List classes='class'>
            <ListItem>
                <Span/>
            </ListItem>
        </List>
    ).html();

    expect(output).toMatchSnapshot();
});

it("Renders <List/> with only required props", () => {
    const output = shallow(
        <List>
            <ListItem>
                <Span/>
            </ListItem>
        </List>
    ).html();

    expect(output).toMatchSnapshot();
});