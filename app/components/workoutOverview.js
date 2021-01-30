import React, { Component } from 'react';
import { Header } from 'react-native-elements';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import firebase from 'react-native-firebase';
import Round from './round';

export default class WorkoutOverview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      rounds: [],
    };

    let rounds = [];

    firebase.firestore()
    .collection('workouts')
    .get()
    .then(querySnapshot => {
  
      querySnapshot.forEach(documentSnapshot => {
        if(documentSnapshot._ref.id === this.props.route.params.id) {
          documentSnapshot._data.rounds.forEach(round => {
            rounds.push(round);
          });
        }
      });

      this.setState({
        rounds
      })
    });
  }

  render() {
    return (
        <View>

    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#657382'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  }
});