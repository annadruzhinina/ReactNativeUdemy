import React, {useState} from 'react';
import {Button, Image, StyleSheet, Text, TextInput, View} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {endEvent} from 'react-native/Libraries/Performance/Systrace';

function App(): JSX.Element {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    setCourseGoals(currentCourseGoals => [
      ...currentCourseGoals,
      enteredGoalText,
    ]);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={goalInputHandler}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        <Text>List of goals...</Text>
      </View>
      {/* <View
        style={{
          padding: 50,
          flexDirection: 'row',
          width: '100%',
          height: 300,
          backgroundColor: 'yellow',
          justifyContent: 'space-around',
          alignItems: 'stretch',
        }}>
        <View
          style={{
            backgroundColor: 'red',
            flex: 1,
            height: 100,
            width: 100,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text>1</Text>
        </View>
        <View
          style={{
            backgroundColor: 'green',
            flex: 1,
            height: 100,
            width: 100,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text>2</Text>
        </View>
        <View
          style={{
            backgroundColor: 'blue',
            flex: 1,
            height: 100,
            width: 100,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text>3</Text>
        </View>
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    width: '70%',
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 5,
  },
});

export default App;
