import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Animated,
  TouchableOpacity,
} from "react-native";
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';


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
<Button
  icon={
    <Icon
      name="arrow-right"
      size={15}
      color="white"
    />
  }
  onPress={() => this.props.navigation.navigate('ListAll', {collection: 'workouts'})}
  title="Button with icon component"
/>

         {/*  <Button style={{ margin: 10, justifyContent: 'center', backgroundColor: 'lightblue'}}
            onPress={() => this.props.navigation.navigate('ListAll', {collection: 'workouts'})}
            title="View Workouts"
            icon={
              <Icon
              name="arrow-right"
              size={15}
              color="white"
              />
            }
            />
            { /* is this even needed??? 
            <Button style={{ margin: 10, justifyContent: 'center', backgroundColor: '#f37735'}}
            onPress={() => this.props.navigation.navigate('ListAll', {collection: 'exercises'})}>
                <Text>View Exercises</Text>
            </Button>
            
            <Button style={{ margin: 10, justifyContent: 'center', backgroundColor: 'green'}}
            onPress={() => this.props.navigation.navigate('AddExercise')}>
                <Text>Add Exercise</Text>
            </Button>
            <Button style={{ margin: 10, justifyContent: 'center', backgroundColor: 'pink'}}
            onPress={() => this.props.navigation.navigate('CreateWorkout')}>
                <Text>Create Workout</Text>
            </Button>
            */}
       </View>
      );
    }
  }