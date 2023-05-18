import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function GoalItem(props) {
  return (
    <View style={styles.goalText}>
      <Text style={styles.goalTextColor}>{props.text}</Text>
    </View>
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
    fontWeight: '600',
  },
});

export default GoalItem;
