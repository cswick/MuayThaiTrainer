import React, { Component } from 'react';
import { Button, Container, Fab, Header, Icon, Tab, Tabs, ScrollableTab, View } from 'native-base';
import {
  AppRegistry,
  StyleSheet,
  Text,
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
      <Container contentContainerStyle={styles.container}>
        <Header hasTabs/>
        <Tabs renderTabBar={()=> <ScrollableTab style={{ backgroundColor: "#473857" }}/>}>
    { this.state.rounds.map((round, index) => {
      return <Tab heading={round.title} key={index}><Round id={round.id} length={round.length} type={round.type}/></Tab>
    }) } 
  </Tabs>
    </Container>
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