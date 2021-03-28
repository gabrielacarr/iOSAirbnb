import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {View, Text} from 'react-native';

const Stack = createStackNavigator();
const Router = () => {
  return (
    <View>
      <Text>Hello, I am your Router component on your screen</Text>
    </View>
  );
};

export default Router;
