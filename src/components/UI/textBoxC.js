
import React from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

const TextboxC = () => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="Escribe algo aquí"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 15,
    marginTop: 45,
  },

  textInput: {
    height: 200,
    width: 350,
    borderColor: 'black',
    borderWidth: 5,
    paddingLeft: 10,
  },
});

export default TextboxC;
