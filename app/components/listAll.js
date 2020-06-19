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
        exercises: []
      }

      let exercises = [];

      firebase.firestore()
      .collection(this.props.route.params.collection)
      .get()
      .then(querySnapshot => {
    
        querySnapshot.forEach(documentSnapshot => {
          exercises.push(documentSnapshot);
        });

        this.setState({
          exercises
        })
      });
    }
  
    render() {
      return (

        <Container>
        <Content>
          <Form>
            <Item>
              <FilterableExerciseTable 
              exercises={this.state.exercises}
              />
            </Item>
            </Form>
            </Content>
            </Container>
      );
    }
  }