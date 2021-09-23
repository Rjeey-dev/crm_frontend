import { configure } from '@storybook/react'

const req = require.context('components', true, /.stories.ts$/);

function loadStories() {
    req.keys().forEach(filename => req(filename))
}

configure(loadStories, module);