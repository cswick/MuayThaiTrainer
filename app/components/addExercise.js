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

export default class AddExercise extends Component {
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
          this.setState({
            name: '',
            length: '',
            type: '',
            moves: []
          });
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
            <Item floatingLabel >
              <Label>Length</Label>
              <Input 
                onChangeText={(text) => this.setState({length: text})} 
                value={this.state.length} 
                keyboardType="number-pad"
              />
              </Item>
            <Item floatingLabel >
                <Label>Interval</Label>
              <Input 
                onChangeText={(text) => this.setState({interval: text})} 
                value={this.state.interval} 
                keyboardType="number-pad"
              />
            </Item>
            <Item picker>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={{ width: undefined }}
                placeholder="Type"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.type}
                onValueChange={(text) => this.setState({type: text})} 
              >
                <Picker.Item label="Technical" value="tech" />
                <Picker.Item label="Cardio" value="cardio" />
                <Picker.Item label="Burnout" value="burn" />
                <Picker.Item label="Abs" value="abs" />
              </Picker>
            </Item>
           { this.state.type === 'tech' && <Item>
              <AddStrikesList/>
            </Item> }
            <Button onPress={this.onAddClick} ><Text>Add Exercise</Text></Button>
          </Form>
        </Content>
      </Container>
    );
  }
}