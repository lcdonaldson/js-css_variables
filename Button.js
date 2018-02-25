import React from 'react';
import { View, TouchableOpacity,
  StyleSheet } from 'react-native';

const Button = () => {
  <View style={styles.container}>
    <TouchableOpacity style={styles.button} onPress={this.onPress}>click me</TouchableOpacity>
  </View>
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10
  },

  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    borderRadius: 4
  },
});

export default Button;
