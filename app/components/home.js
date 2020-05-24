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
           <Button style={{ margin: 10, justifyContent: 'center', backgroundColor: 'purple'}}
            onPress={() => this.props.navigation.navigate('Workout')}>
                <Text>Go To Workout</Text>
            </Button>
            <Button style={{ margin: 10, justifyContent: 'center', backgroundColor: '#f37735'}}
            onPress={() => this.props.navigation.navigate('ListAll')}>
                <Text>View All Exercises</Text>
            </Button>
            <Button style={{ margin: 10, justifyContent: 'center', backgroundColor: 'green'}}
            onPress={() => this.props.navigation.navigate('AddExercise')}>
                <Text>Add Exercise</Text>
            </Button>
       </View>
      );
    }
  }