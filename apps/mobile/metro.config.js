const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const path = require('path');
const fs = require('fs');
const getAllPackagesPath = () => {
    const packagesDirPath = path.resolve(__dirname, '..','..', 'packages')
    const fileNames = fs.readdirSync(packagesDirPath);
    return fileNames
        .filter(fileName => !fileName.includes('.DS_Store'))
        .map(fileName => path.join(packagesDirPath, fileName))
}
/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
    watchFolders: [
        path.resolve(__dirname, '../../node_modules'),
        ...getAllPackagesPath()
    ],
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
