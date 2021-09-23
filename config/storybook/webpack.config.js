// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add additional webpack configurations.
// For more information refer the docs: https://storybook.js.org/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.
const path = require('path');

module.exports = {
    plugins: [
        // your custom plugins
    ],
    module: {
        rules: [
            // add your custom rules.
        ],
    },
    resolve: {
        alias: {
            // Support React Native Web
            // https://www.smashingmagazine.com/2016/08/a-glimpse-into-the-future-with-react-native-for-web/
            'react-native': 'react-native-web',
            'components': path.resolve(__dirname, '../../src/components'),
            'pages': path.resolve(__dirname, '../../src/components/pages'),
            'atoms': path.resolve(__dirname, '../../src/components/atoms'),
            'organisms': path.resolve(__dirname, '../../src/components/organisms'),
            'pages_templates': path.resolve(__dirname, '../../src/components/templates/pages'),
            'elements': path.resolve(__dirname, '../../src/components/elements'),
            'molecules': path.resolve(__dirname, '../../src/components/molecules'),
            'themes': path.resolve(__dirname, '../../src/components/themes'),
            'store': path.resolve(__dirname, '../../src/store'),
            'services': path.resolve(__dirname, '../../src/services'),
            'containers': path.resolve(__dirname, '../../src/containers'),
        },
    }
};
