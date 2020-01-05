import React, { Component } from 'react';
import { StyleSheet, TouchableHighlight } from 'react-native';
import { Text, View } from 'native-base';


export default class StrikeButton extends Component {
  render() {
    return (
        <View>
            <TouchableHighlight style={styles.button}>
                <Text style={styles.buttonText}>{this.props.name}</Text>
            </TouchableHighlight>
        </View>
    );
  }
}

var styles = StyleSheet.create({
    button: {
      backgroundColor: 'blue',
      height:50,
      justifyContent: 'center',
      alignItems: 'center',
      width: 125,
      borderRadius: 10,
      marginTop: 7
    },
    buttonText: {
      fontSize:24,
      color: 'white'
    },
  });