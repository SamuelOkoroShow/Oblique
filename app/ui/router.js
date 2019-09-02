import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import calculus from './calculus'
import outbound from './outbound'

const Stack = createStackNavigator(
  {
    Calc : calculus,
    Outbound: outbound
  },
  {
    initialRouteName: 'Calc',
    headerMode: 'none'
  }
);

const Sunny = createAppContainer(Stack);

export default Sunny;