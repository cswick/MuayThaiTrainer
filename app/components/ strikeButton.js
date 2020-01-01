import React, { Component } from 'react';
import { StyleSheet, TouchableHighlight } from 'react-native';
import { Text, View } from 'native-base';


export default class StrikeButton extends Component {
  render() {
    return (
        <View style={styles.inputsContainer}>
            <TouchableHighlight style={styles.fullWidthButton}>
                <Text style={styles.fullWidthButtonText}>{this.props.name}</Text>
            </TouchableHighlight>
        </View>
    );
  }
}

var styles = StyleSheet.create({
    inputsContainer: {
      flex: 1
    },
    fullWidthButton: {
      backgroundColor: 'blue',
      height:70,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      width: 90,
      borderRadius: 10
    },
    fullWidthButtonText: {
      fontSize:24,
      color: 'white'
    },
    input: {
      paddingLeft: 15,
      height: 40,
      borderColor: 'black',
      backgroundColor: 'white',
    },
    container: {
      flex: 1,
      backgroundColor: '#f0f0f0',
      alignItems: 'stretch',
    },
    headline: {
    }
  });