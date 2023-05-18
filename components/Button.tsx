import React from 'react';
import {Text, View, StyleSheet, Pressable} from 'react-native';

export default function Button(props) {
  const {onPress, title = 'Save'} = props;
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 8,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#8467D7',
  },
  text: {
    fontSize: 16,
    lineHeight: 20,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});
