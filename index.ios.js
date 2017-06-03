// Import libraries to help create a component and render component to device screen
import React from 'react';
import { Text, AppRegistry } from 'react-native';

// Create a Component
const App = () => (<Text>some texts</Text>);

// Render it to device screen
AppRegistry.registerComponent('myFirstReactNativeApp', () => App);
