import React, { Component } from 'react';
import { Button, 
  Container, 
  Header, 
  Content, 
  Form, 
  Icon, 
  Item, 
  Input, 
  Label,
  Picker, 
  Text } from 'native-base';
  import AddStrikesList from './addStrikesList';
  import firebase from 'react-native-firebase';

  import FilterableExerciseTable from './filterableExerciseTable.js';

export default class CreateWorkout extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name: '',
          length: '',
          interval: '',
          type: '',
          moves: [],
        };

        this.onAddClick = this.onAddClick.bind(this);
      }

      onAddClick() {
        firebase.firestore().collection('combinations').doc().set({
          name: this.state.name,
          length: this.state.length,
          interval: this.state.interval,
        })
      .then(function() {
          console.log("Exercise successfully written!");
      })
      .catch(function(error) {
          console.error("Error writing document: ", error);
      });
      
      }

  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Name</Label>
              <Input 
                onChangeText={(text) => this.setState({name: text})} 
                value={this.state.name} 
              />
            </Item>
          {/* <Button onPress={this.onAddClick} ><Text>Add Exercise</Text></Button> */}

          <Item>
            <FilterableExerciseTable />
          </Item>
          </Form>
        </Content>
      </Container>
    );
  }
}