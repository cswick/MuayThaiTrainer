import React, { Component } from 'react';
import { Button, Container, Header, Content, Form, Icon, Item, Input, Picker, Text } from 'native-base';

export default class AddExercise extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name: '',
          length: '',
          type: '',
          moves: [],
        };
      }

      onAddClick() {
        firebase.firestore.collections('combinations').set({
          name: this.state.name,
          length: this.state.length,
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
            <Item>
              <Input onChangeText={(text) => this.setState({name: text})}  value={this.state.name} placeholder="Name" />
            </Item>
            <Item>
              <Input onChangeText={(text) => this.setState({length: text})}  value={this.state.length} placeholder="Length" />
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
                <Picker.Item label="Burnout" value="burn" />
                <Picker.Item label="Abs" value="abs" />
              </Picker>
            </Item>
            <Button onPress={this.onAddClick} ><Text>Add AddExercise</Text></Button>
          </Form>
        </Content>
      </Container>
    );
  }
}