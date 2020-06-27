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
import StrikeButton from './strikeButton';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';

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
        this.addToMoves = this.addToMoves.bind(this);

        let exercises = [];

        firebase.firestore()
        .collection('exercises').orderBy('name')
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
      .collection('exercises').orderBy('name')
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
        }).then(
          this.setState({
            name: '',
            type: '',
            moves: [],
            exercises: []
          })
        )
      } else{
        Alert.alert('Exercise already exists.');
      }
    })
    .catch(() => {console.log('Error writing exercise to database')})
  }

  addToMoves(exercise) {
    if(this.state.type === 'tech') {
      this.setState({
        moves: [...this.state.moves, {
          name: exercise.name,
          id: exercise.id
        }]
      })
    }
  }

  FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: 20,
          marginRight: 5,
        }}
      />
    );
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
                <Picker.Item label="Strike" value="strike" />
                <Picker.Item label="Combo" value="combo" />
                <Picker.Item label="Cardio" value="cardio" />
                <Picker.Item label="Burnout" value="burn" />
                <Picker.Item label="Abs" value="abs" />
              </Picker>
            </Item>

           { this.state.type === 'combo' && 
           <Item>
             <FlatList
                style={{padding: 10}}
                numColumns={5}
                data={this.state.moves}
                extraData={this.state.moves}
                keyExtractor={(item, index) => index.toString()}
                ItemSeparatorComponent={this.FlatListItemSeparator}
                renderItem={({item, index }) =>
                <TouchableOpacity key={index}>
                  <Text style={{ paddingTop: 12, height: 50, borderWidth: 2, borderRadius: 15}}> {item.name} </Text>
                </TouchableOpacity>
                }
            />
            </Item> 
            }
            <View style={{justifyContent: 'center', alignItems: 'center', width: '100%', padding: 10}}>
              <Button onPress={this.onAddClick} ><Text>Add Exercise</Text></Button>
            </View>
            <Item>
            <FilterableExerciseTable 
              exercises={this.state.exercises}
              onClickRecord={this.addToMoves}
            />
            </Item>
          </Form>
        </Content>
      </Container>
    );
  }
}