import React, { Component } from "react";
import FilterableExerciseTable from './filterableExerciseTable.js';
import { Accordion, 
  Button,
  Container, 
  Header, 
  Content, 
  Form, 
  Icon, 
  Item, 
  Input, 
  Label,
  Picker, 
  View } from 'native-base';
  import firebase from 'react-native-firebase';

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

        <Container>
        <Content>
          <Form>
            <Item>
              <FilterableExerciseTable 
              exercises={this.state.data}
              onClickRecord={this.onClickRecord}
              />
            </Item>
            </Form>
            </Content>
            </Container>
      );
    }
  }