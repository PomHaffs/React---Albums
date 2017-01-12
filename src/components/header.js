//import library
import React from 'react';
import { Text, View } from 'react-native';

//Make a Component & Style it
const Header = () => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>Albums!</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 0, },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
      fontSize: 20
  }
};


//Make the component avalible to the rest of the App
export default Header;
