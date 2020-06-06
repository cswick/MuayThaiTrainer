import React, { Component } from 'react';

import { StyleSheet, FlatList, Text, View, Alert, TouchableOpacity, TextInput } from 'react-native';

import { Icon } from 'native-base';

export default class Myproject extends Component {

  constructor(props) {
    
    super(props);

    this.moves = []

    this.state = {
      savedMoves: [],
      newMove: ''

    }

  }

  componentDidMount() {
    this.setState({ savedMoves: [...this.moves] })
  }


  joinData = () => {
    if(this.state.newMove.length > 0) {
    this.moves.push({title : this.state.newMove});

    this.setState({ 
      savedMoves: [...this.moves],
      newMove: ''
    })

    this.textInput.clear();
  }
  }

  deleteAddress(id) {
    if(id > -1){
      this.moves.splice(id, 1);

      this.setState({savedMoves: [...this.moves]})
    }
  }

  FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#607D8B",
        }}
      />
    );
  }

  render() {
    return (

      <View style={styles.MainContainer}>

        <TextInput
          ref={input => {this.textInput = input}}
          placeholder="Enter Value Here"
          onChangeText={data => this.setState({ newMove: data })}
          style={styles.textInputStyle}
        />

        <TouchableOpacity onPress={this.joinData} activeOpacity={0.7} style={styles.button} >
          <Text style={styles.buttonText}> Add Values To FlatList </Text>
        </TouchableOpacity>

        <FlatList

          data={this.state.savedMoves}
          width='100%'
          extraData={this.state.savedMoves}
          keyExtractor={(index) => index.toString()}
          ItemSeparatorComponent={this.FlatListItemSeparator}
          renderItem={({ item, index }) => 
            <TouchableOpacity onPress={() => this.deleteAddress(index)} style={{flex: 1, flexDirecton: 'row'}}>
                <Text style={styles.item}> {item.title} </Text>
                <Icon type="FontAwesome5" name="trash-alt" style={{color: 'red'}}/>
            </TouchableOpacity>
          }
        />


      </View>

    );
  }
}

const styles = StyleSheet.create({

  MainContainer: {

    justifyContent: 'center',
    alignItems: 'center',
    margin: 2,
    flex: 1
  },

  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },

  textInputStyle: {

    textAlign: 'center',
    height: 40,
    width: '90%',
    borderWidth: 1,
    borderColor: '#4CAF50',
    borderRadius: 7,
    marginTop: 12
  },

  button: {

    width: '90%',
    height: 40,
    padding: 10,
    backgroundColor: '#4CAF50',
    borderRadius: 8,
    marginTop: 10
  },

  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },

});