import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';

function GoalItem(props) {
  return (
    <Pressable
      android_ripple={{color: '#280b5a'}}
      onPress={props.onDeleteItem.bind(this, props.id)}
      style={({pressed}) => pressed && styles.pressedItem}>
      <View style={styles.goalText}>
        <Text style={styles.goalTextColor}>{props.text}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  goalText: {
    margin: 1,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  // oddLine: {
  //   backgroundColor: '#CCCCFF',
  // },
  goalTextColor: {
    color: 'white',
    padding: 8,
    fontSize: 14,
    fontWeight: '500',
  },
  pressedItem: {
    opacity: 0.8,
    color: '#280b5a',
  },
});

export default GoalItem;
