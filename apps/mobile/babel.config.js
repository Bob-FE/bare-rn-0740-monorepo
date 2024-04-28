const path = require('path');

module.exports = {
    presets: ['module:@react-native/babel-preset'],
    plugins: [
        [
            'module-resolver',
            {
                alias: {
                    "components": path.resolve('..', '..', 'packages', 'components', 'src'),
                },
            },
        ],
    ],
};
