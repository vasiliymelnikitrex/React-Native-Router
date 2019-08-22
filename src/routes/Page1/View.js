import React from 'react';
import {View, Text, Button} from 'react-native';
import {Actions} from 'react-native-router-flux';

export default ({counter, actions: {incrementCounter}}) => {
  const handleCounterPress = e => incrementCounter();

  return (
    <View>
      <Text>Hello from Page 1!</Text>
      <Button title="Go to page 2" onPress={() => Actions.page2({})} />
      <Button title="Go to page 3" onPress={() => Actions.page3({})} />
      <Button title="Increment" onPress={handleCounterPress} />
      <Text>{counter}</Text>
    </View>
  );
};
