import React from 'react';
import {Button, Image, StyleSheet, Text, TextInput, View} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

function App(): JSX.Element {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder="Your course goal!" />
        <Button  title="Add Goal" />
      </View>
      <View>
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
    // flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    width: '70%',
    marginRight: 8,
    padding: 8,
  },
});

export default App;
