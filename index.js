/**
 * @format
 */

import React from 'react';
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import Application from './src/components/app.js';

const App = () => (
    <Application />
);

AppRegistry.registerComponent(appName, () => App);
