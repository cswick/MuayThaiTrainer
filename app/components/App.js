import 'react-native-gesture-handler';
import React, { Component, Menu } from 'react';
import { AppRegistry } from 'react-native';
import TabList from './tabList';
import Home from './home';
import ListAll from './listAll';
import { Text, View } from 'native-base';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default class MuayThaiTrainer extends Component {
  render() {

  const Stack = createStackNavigator();

    return (
      <NavigationContainer>{
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Workout" component={TabList} />
          <Stack.Screen name="ListAll" component={ListAll} />
        </Stack.Navigator>
      }
      </NavigationContainer>
    );
  }
}

AppRegistry.registerComponent('MuayThaiTrainer', () => MuayThaiTrainer);