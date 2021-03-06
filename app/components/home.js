import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Animated,
  TouchableOpacity,
} from "react-native";
import { Button, Container, Fab, Header, Icon, Tab, Tabs, ScrollableTab } from 'native-base';

export default class Home extends Component {
    constructor(props) {
      super(props);
      this.state = {
        active: false
      };
    }
  
    render() {
      return (
       <View>
           <Button style={{ margin: 10, justifyContent: 'center', backgroundColor: 'lightblue'}}
            onPress={() => this.props.navigation.navigate('ListAll', {collection: 'workouts'})}>
                <Text>View Workouts</Text>
            </Button>
            { /* is this even needed??? 
            <Button style={{ margin: 10, justifyContent: 'center', backgroundColor: '#f37735'}}
            onPress={() => this.props.navigation.navigate('ListAll', {collection: 'exercises'})}>
                <Text>View Exercises</Text>
            </Button>
            */ }
            <Button style={{ margin: 10, justifyContent: 'center', backgroundColor: 'green'}}
            onPress={() => this.props.navigation.navigate('AddExercise')}>
                <Text>Add Exercise</Text>
            </Button>
            <Button style={{ margin: 10, justifyContent: 'center', backgroundColor: 'pink'}}
            onPress={() => this.props.navigation.navigate('CreateWorkout')}>
                <Text>Create Workout</Text>
            </Button>
       </View>
      );
    }
  }