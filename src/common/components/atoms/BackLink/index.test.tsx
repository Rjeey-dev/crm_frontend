import React from 'react';
// @ts-ignore
import MockRouter from 'react-mock-router';
import renderer from 'react-test-renderer';

import BackLink from './index';

it('Renders <BackLink/> with correct properties', () => {
    const output = renderer.create(<MockRouter><BackLink text='Some text' classes='class'/></MockRouter>).toJSON();

    expect(output).toMatchSnapshot();
});
