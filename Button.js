import React from 'react';
import { View, TouchableOpacity,Text,
  StyleSheet } from 'react-native';

const Button = () => {
  <View style={styles.container}>
    <TouchableOpacity style={styles.button} onPress={this.onPress}>
      <Text style={styles.size}>Click Me</Text>
    </TouchableOpacity>
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
    margin: 2,
    borderRadius: 4
  },

  size: {
    fontSize: 18
  }
  
});

export default Button;
