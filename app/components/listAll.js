import React, { Component } from "react";
import FilterableExerciseTable from './filterableExerciseTable.js';
import firebase from 'react-native-firebase';
import { ListItem } from 'react-native-elements';
import { View } from 'react-native';

export default class ListAll extends Component {
    constructor(props) {
      super(props);

      this.state = {
        data: []
      }

      let localData = [];

      firebase.firestore()
      .collection(this.props.route.params.collection)
      .get()
      .then(querySnapshot => {
    
        querySnapshot.forEach(documentSnapshot => {
          localData.push(documentSnapshot);
        });

        this.setState({
          data: localData
        })
      });

      this.onClickRecord=this.onClickRecord.bind(this);
    }

    onClickRecord(workout) {
      const selectedWorkout = workout[0];
      this.props.navigation.navigate('WorkoutOverview', {id: selectedWorkout.id})
    }
  
    render() {
      return (
          <View>
            {
            this.state.data.map((item, i) => (
              <ListItem key={i} bottomDivider>
                <ListItem.Content>
                  <ListItem.Title>{item._data.name}</ListItem.Title>
                </ListItem.Content>
              </ListItem>
            )) 
    }
            </View>
      
      );
    }
  }