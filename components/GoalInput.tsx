import React from 'react';
import {useState} from 'react';

import {View, TextInput, StyleSheet, Modal, Image, Button} from 'react-native';
// import Button from './Button';

export default function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState('');

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText('');
  }
  console.log(enteredGoalText);

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
          <View style={styles.btn}>
            <Button title="Cancel" onPress={props.onCancel} color="#f31282" />
          </View>
          <View style={styles.btn}>
            <Button title="Add Goal" onPress={addGoalHandler} color="#5e0acc" />
          </View>
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
    borderColor: '#d1d2f3',
    color: '#120438',
    borderRadius: 6,
    width: '100%',
    padding: 16,
    backgroundColor: '#d1d2f3',
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
  btn: {
    width: '30%',
    marginHorizontal: 8,
  },
});
