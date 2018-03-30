import React from 'react';
import { AppRegistry, View, Text, TouchableOpacity } from 'react-native';

const App = () => {
  return (
    <View>
      <Text>Start</Text>
      <TouchableOpacity>Here</TouchableOpacity>
    </View>
  )
}

AppRegistry.registerComponent('demo', () => App);
