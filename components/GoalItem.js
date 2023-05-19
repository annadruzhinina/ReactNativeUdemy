import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';

function GoalItem(props) {
  return (
    <Pressable onPress={props.onDeleteItem.bind(this, props.id)}>
      <View style={styles.goalText}>
        <Text style={styles.goalTextColor}>{props.text}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  goalText: {
    margin: 1,
    padding: 8,
    borderRadius: 4,
    backgroundColor: '#8467D7',
  },
  oddLine: {
    backgroundColor: '#CCCCFF',
  },
  goalTextColor: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default GoalItem;
