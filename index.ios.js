//Import a library to helpcreate Component
import React from 'react';
import { AppRegistry } from 'react-native';
//get a component from elsewhere
import Header from './src/components/header';

//Create a compoonent
const App = () => (
  <Header />
);


//Render it to device
AppRegistry.registerComponent('albums', () => App);
