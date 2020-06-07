import React, { Component } from 'react';
import { StyleSheet, TouchableHighlight } from 'react-native';
import { Text, View } from 'native-base';


export default class StrikeButton extends Component {
  
  render() {

    var styles = StyleSheet.create({
      buttonText: {
        fontSize:24,
        color: 'white'
      },
    });

    return (
        <View>
            <TouchableHighlight style={this.getButtonStyle(this.props.name)}>
                <Text adjustsFontSizeToFit={true} style={styles.buttonText}>{this.props.name}</Text>
            </TouchableHighlight>
        </View>
    );
  }

getButtonStyle(strike) {
    switch (strike) {
  /*    case 'Jab':
        return { 
                height:50,
                justifyContent: 'center',
                alignItems: 'center',
                width: 125,
                borderRadius: 10,
                marginTop: 7,
                borderColor: '#000',
                borderWidth: 1};
      break;

      case 'Cross':
        return {backgroundColor: '#0000FF',
                height:50,
                justifyContent: 'center',
                alignItems: 'center',
                width: 125,
                borderRadius: 10,
                marginTop: 7};
      break; 

      case 'L Hook':
        return {backgroundColor:  '#008000',
                height:50,
                justifyContent: 'center',
                alignItems: 'center',
                width: 125,
                borderRadius: 10,
                marginTop: 7};
      break;

      case 'R Hook':
        return {backgroundColor:  '#660000',
                height:50,
                justifyContent: 'center',
                alignItems: 'center',
                width: 125,
                borderRadius: 10,
                marginTop: 7};
      break;

      case 'L Uppercut':
        return {backgroundColor:  '#D4AF37',
                height:50,
                justifyContent: 'center',
                alignItems: 'center',
                width: 125,
                borderRadius: 10,
                marginTop: 7};
      break;

      case 'R Uppercut':
        return {backgroundColor:  '#802b00',
                height:50,
                justifyContent: 'center',
                alignItems: 'center',
                width: 125,
                borderRadius: 10,
                marginTop: 7};
      break;

      case 'L Knee':
        return {backgroundColor:  '#FF0000',
                height:50,
                justifyContent: 'center',
                alignItems: 'center',
                width: 125,
                borderRadius: 10,
                marginTop: 7};
      break;

      case 'R Knee':
        return {backgroundColor:  '#800080',
                height:50,
                justifyContent: 'center',
                alignItems: 'center',
                width: 125,
                borderRadius: 10,
                marginTop: 7};
      break;

      case 'L Teep':
        return {backgroundColor:  '#598e87',
                height:50,
                justifyContent: 'center',
                alignItems: 'center',
                width: 125,
                borderRadius: 10,
                marginTop: 7};
      break;

      case 'R Teep':
        return {backgroundColor:  '#cc6633',
                height:50,
                justifyContent: 'center',
                alignItems: 'center',
                width: 125,
                borderRadius: 10,
                marginTop: 7};
      break;

      case 'L Kick':
        return {backgroundColor:  '#000099',
                height:50,
                justifyContent: 'center',
                alignItems: 'center',
                width: 125,
                borderRadius: 10,
                marginTop: 7};
      break;

      case 'R Kick':
        return {backgroundColor:  '#ff66ff',
                height:50,
                justifyContent: 'center',
                alignItems: 'center',
                width: 125,
                borderRadius: 10,
                marginTop: 7};
      break;
*/
      default:
      return {height:50,
      justifyContent: 'center',
      alignItems: 'center',
   //   width: 125,
      padding: 10,
      borderRadius: 10,
      marginTop: 7,
      borderColor: '#000',
      borderWidth: 1}; 
  }
}


}
