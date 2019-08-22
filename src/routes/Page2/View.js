import React from 'react';
import {View, Text, Button} from 'react-native';
import {Actions} from 'react-native-router-flux';

export default () => (
  <View>
    <Text>Hello from Page 2!</Text>
    <Button title="Go to page 1" onPress={() => Actions.page1({})} />
    <Button title="Go to page 3" onPress={() => Actions.page3({})} />
  </View>
);
