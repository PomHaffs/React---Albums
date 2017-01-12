//Import a library to helpcreate Component
import React from 'react';
import { Text, AppRegistry } from 'react-native';

//Create a compoonent
const App = () => (
  <Text>Hello Monkey</Text>
);

//Render it to device
AppRegistry.registerComponent('albums', () => App);
