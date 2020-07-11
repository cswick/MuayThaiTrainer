import 'react-native-gesture-handler';
import React, { Component, Menu } from 'react';
import { AppRegistry } from 'react-native';
import WorkoutOverview from './workoutOverview';
import Home from './home';
import ListAll from './listAll';
import CreateWorkout from './createWorkout';
import AddExercise from './addExercise';
import Round from './round';
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
          {/* <Stack.Screen name="Workout" component={TabList} options={{title: 'Workout'}}/> */ }
          <Stack.Screen name="ListAll" component={ListAll} options={{title: 'All Available Exercises'}}/>
          <Stack.Screen name="AddExercise" component={AddExercise} options={{title: 'Add Exercise'}} />
          <Stack.Screen name="CreateWorkout" component={CreateWorkout} options={{title: 'Create Workout'}} />
          <Stack.Screen name="Round" component={Round} />
          <Stack.Screen name="WorkoutOverview" component={WorkoutOverview} />
        </Stack.Navigator>
      }
      </NavigationContainer>
    );
  }
}

AppRegistry.registerComponent('MuayThaiTrainer', () => MuayThaiTrainer);