import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  FlatList,
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
      // enteredGoalText,
      {text: enteredGoalText, id: Math.random().toString()},
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
        {/* <ScrollView alwaysBounceVertical={false}>
          {courseGoals.map((goal, index) => (
            <View
              key={goal}
              style={[
                styles.goalText,
                index % 2 === 0 ? styles.oddLine : null,
              ]}>
              <Text style={styles.goalTextColor}>{goal}</Text>
            </View>
          ))}
        </ScrollView> */}
        <FlatList
          data={courseGoals}
          renderItem={itemData => {
            itemData.index; //0,1,2,...
            return (
              <View style={styles.goalText}>
                <Text style={styles.goalTextColor}>{itemData.item.text}</Text>
              </View>
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical={false}
        />
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

export default App;
