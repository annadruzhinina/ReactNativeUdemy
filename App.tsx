import React, {useState} from 'react';
import {
  TouchableOpacity,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {endEvent} from 'react-native/Libraries/Performance/Systrace';

import Button from './components/Button';

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
        {/* <Text>List of goals...</Text> */}
        {courseGoals.map((goal, index) => (
          <Text
            key={goal}
            style={[styles.goalText, index % 2 === 0 ? styles.oddLine : null]}>
            {goal}
          </Text>
        ))}
      </View>
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
  goalText: {
    fontSize: 16,
  },
  oddLine: {
    backgroundColor: '#CCCCFF',
  },
});

export default App;
