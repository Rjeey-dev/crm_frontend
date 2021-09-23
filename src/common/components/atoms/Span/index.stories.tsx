import React from 'react';
import { storiesOf } from '@storybook/react';
import Span from './index';

storiesOf('Span', module)
    .add('With text', () => (
        <Span classes='test' text='Some text'/>
    ))
    .add('Without text', () => (
        <Span classes='test'/>
    ))
    .add('Without classes', () => (
        <Span text='Some text'/>
    ))
    .add('Without classes and text', () => (
        <Span/>
    ));