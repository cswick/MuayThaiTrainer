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
  Text,
  View } from 'native-base';
  import AddStrikesList from './addStrikesList';
  import firebase from 'react-native-firebase';
  import { Alert } from 'react-native';
import FilterableExerciseTable from './filterableExerciseTable';

export default class AddExercise extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name: '',
          type: '',
          moves: [],
          exercises: []
        };

        this.onAddClick = this.onAddClick.bind(this);

        let exercises = [];

        firebase.firestore()
        .collection('exercises')
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

  componentDidUpdate(prevState){
    if(this.state.exercises != prevState.exercises){
      let exercises = [];

      firebase.firestore()
      .collection('exercises')
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
  }   

  onAddClick() {
    firebase.firestore().collection("exercises").where("name", "==", this.state.name)
    .get()
    .then((querySnapshot) => {
      if (querySnapshot.empty) {
        firebase.firestore().collection('exercises').doc().set({
          name: this.state.name,
          type: this.state.type
        })
      } else{
        Alert.alert('Exercise already exists.');
      }
    })
    .catch(() => {console.log('Error writing exercise to database')})
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
            <View style={{justifyContent: 'center', alignItems: 'center', width: '100%', padding: 10}}>
              <Button onPress={this.onAddClick} ><Text>Add Exercise</Text></Button>
            </View>
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