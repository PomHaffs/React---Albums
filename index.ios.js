//Import a library to helpcreate Component
import React from 'react';
import { AppRegistry, View } from 'react-native';
//get a component from elsewhere
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

//Create a compoonent
const App = () => (
  <View>
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>
);


//Render it to device
AppRegistry.registerComponent('albums', () => App);
