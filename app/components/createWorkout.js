import React, { Component } from 'react';
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
  Text,
  View } from 'native-base';
  import { Alert,TextInput } from 'react-native';
  import firebase from 'react-native-firebase';
  import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';

  import FilterableExerciseTable from './filterableExerciseTable.js';

export default class CreateWorkout extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name: '',
          rounds: [],
        };

        this.onSaveClick = this.onSaveClick.bind(this);
        this.renderHeader = this.renderHeader.bind(this);
        this.renderContent = this.renderContent.bind(this);
        this.addToRounds = this.addToRounds.bind(this);
        this.updateRoundNotes = this.updateRoundNotes.bind(this);
        this.updateRoundLength = this.updateRoundLength.bind(this);
      }

  onSaveClick() {
    firebase.firestore().collection('workouts').doc().set({
      name: this.state.name,
      rounds: this.state.rounds
    })
    .then(function() {
        Alert.alert('Workout Saved');
    })
    .catch(function(error) {
        console.error("Error writing document: ", error);
    });
  
  }

  addToRounds(round) {
    if (this.state.rounds.length == 0) {
      this.setState({
        rounds: [{
          title: 'Round 1',
          content: round.name,
          id: round.id
        }]
      })
    } else {
      const nextRound = this.state.rounds.length + 1;
      this.setState({
        rounds: [...this.state.rounds, {
          title: 'Round ' + nextRound,
          content: round.name,
          id: round.id
        }]
      })
    }
  }

  updateRoundLength(id, value) {
   this.setState(prevState => ({
     rounds: prevState.rounds.map(round => (round.id === id? { ...round, 'length': value }: round))
   }))

  }

  updateRoundNotes(id, value) {
    this.setState(prevState => ({
      rounds: prevState.rounds.map(round => (round.id === id? { ...round, 'notes': value }: round))
    }))
 
   }

  confirmDeleteFromRounds(round) {
    Alert.alert(
      "Delete this combination from the workout?",
      round.content,
      [{
          text: "Cancel",
          style: "cancel"
        },
        {
          text: "OK",
          onPress: () => {
          this.setState({
            rounds: this.state.rounds.filter((removeRound) => { 
              return removeRound.content !== round.content
              })
          })
          }
        }
      ], {
        cancelable: false
      }
    );

  }

  renderHeader(item, expanded) {
    return (
        <View style={{
          flexDirection: "row",
          padding: 10,
          justifyContent: "space-between",
          alignItems: "center" ,
          backgroundColor: "#A9DAD6" }}>
            <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{ fontWeight: "600", width: 80 }}>
              {" "}{item.title}
            </Text>
            <TouchableOpacity key={item.index} onPress={() => this.confirmDeleteFromRounds(item)}>
              <Icon type="FontAwesome5" name="trash-alt" style={{ fontSize: 18, color: 'red'}}/>
            </TouchableOpacity>
            </View>
          {expanded
            ? <Icon style={{ fontSize: 18 }} name="remove-circle" />
            : <Icon style={{ fontSize: 18 }} name="add-circle" />}
        </View>
    );
  }

  renderContent(item) {
    return (
      <View>
        <Text
          style={{
            backgroundColor: "#e3f1f1",
            padding: 15,
            fontSize: 17,
          }}
        >
          {item.content}
        </Text>
        <TextInput
          ref={input => {this.textInput = input}}
          placeholder="Length/Reps"
          onChangeText={data => this.updateRoundLength(item.id, data)}
          style={{ padding: 10, width: '100%',  backgroundColor: "#e3f1f1", borderTopWidth: 1, borderColor: 'black'}}
        
        />
        <TextInput
          ref={input => {this.textInput = input}}
          placeholder="Notes"
          onChangeText={data => this.updateRoundNotes(item.id, data )}
          style={{ padding: 10, width: '100%', backgroundColor: "#e3f1f1", borderTopWidth: 1, borderColor: 'black'}}
       />
      </View>
    );
  }

  render() {
    return (
      <Container>
        <Content>
          <Form>
            <Item floatingLabel error={this.state.name == ''}>
              <Label>Name</Label>
              <Input 
                onChangeText={(text) => this.setState({name: text})} 
                value={this.state.name} 
                error={'#d50000'}
              />
              {this.state.name == '' && <Icon name='close-circle' /> }
            </Item>
            <Item>
              <Accordion
                dataArray={this.state.rounds}
                animation={true}
                expanded={true}
                renderHeader={this.renderHeader}
                renderContent={this.renderContent}
              />
            </Item>
            <View style={{justifyContent: 'center', alignItems: 'center', width: '100%', padding: 10}}>
              <Button bordered onPress={this.onSaveClick} ><Text>Save Exercise</Text></Button>
            </View>
          <Item>
            <FilterableExerciseTable 
              addToRounds={this.addToRounds}
            />
          </Item>
          </Form>
        </Content>
      </Container>
    );
  }
}