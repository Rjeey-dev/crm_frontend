import React from 'react';
import { storiesOf } from '@storybook/react';
import Icon from './index';

storiesOf('Icon', module)
    .add('notifications', () => (
        <Icon classes='mdi mdi-file-document-box'/>
    ))
    .add('settings', () => (
        <Icon classes='mdi mdi-tune'/>
    ));