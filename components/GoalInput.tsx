import React from 'react';
import {useState} from 'react';

import {View, TextInput, StyleSheet, Modal, Image} from 'react-native';
import Button from './Button';

export default function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState('');

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText('');
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require('../assets/images/goal-9.jpg')}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <Button title="Add Goal" onPress={addGoalHandler} />
          <Button title="Cancel" onPress={props.onCancel} />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    // flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // marginBottom: 24,
    // borderBottomWidth: 1,
    // borderBottomColor: '#ccc',
    padding: 16,
    backgroundColor: '#e9e7fe',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    width: '100%',
    padding: 8,
    backgroundColor: 'white',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 16,
  },
  image: {
    width: 200,
    height: 200,
    margin: 20,
  },
});
