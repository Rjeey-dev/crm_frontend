import {shallow} from "enzyme";
import React from 'react';

import FormItem from '../FormItem/index';
import Form from "./index";

it("Renders <Form/> with correct properties", () => {
    const output = shallow(
        <Form action='login' classes='class' onSubmit={jest.fn()} name='loginForm'>
            <FormItem meta={{}} input={{}}/>
        </Form>
    ).html();

    expect(output).toMatchSnapshot();
});

it("Renders <Form/> with only required props", () => {
    const output = shallow(
        <Form name='loginForm' onSubmit={jest.fn()}>
            <FormItem meta={{}} input={{}}/>
            <FormItem meta={{}} input={{}}/>
        </Form>
    ).html();

    expect(output).toMatchSnapshot();
});