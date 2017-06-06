// Import libraries to help create a component and render component to device screen
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/Header';

// Create a Component
const App = () => <Header headerText="Albums" />;

// Render it to device screen
AppRegistry.registerComponent('myFirstReactNativeApp', () => App);
