import React, {useState} from 'react';

// React Native
import {StyleSheet, TextInput, View, ScrollView, FlatList} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {endEvent} from 'react-native/Libraries/Performance/Systrace';

// Components
import Button from './components/Button';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

function App(): JSX.Element {
  const [courseGoals, setCourseGoals] = useState([]);

  function addGoalHandler(enteredGoalText) {
    setCourseGoals(currentCourseGoals => [
      ...currentCourseGoals,
      {text: enteredGoalText, id: Math.random().toString()},
    ]);
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={itemData => {
            // itemData.index; //0,1,2,...
            return <GoalItem text={itemData.item.text} />;
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
  goalsContainer: {
    flex: 5,
  },
  oddLine: {
    backgroundColor: '#CCCCFF',
  },
});

export default App;
