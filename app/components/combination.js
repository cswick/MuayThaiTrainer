import React, { Component } from 'react';
import { Container, Header, Content, Button, Text, View } from 'native-base';
import StrikeButton from './strikeButton';
import firebase from 'react-native-firebase';

export default class Combination extends Component {
    constructor(props){
      super(props);
      this.state = {
        strikes: this.props.data
      };
  }

  componentDidUpdate(prevProps) {
    if(prevProps.data != this.props.data) {
      this.setState({
        strikes: this.props.data
      });
    }
  }

  render() {
    return (
        <View style={{ marginLeft: 15, alignItems: 'flex-start', justifyContent: 'space-between'}}>
          {this.state.strikes.map((prop, id) => {
            return (
              <StrikeButton key={prop.id} name={prop.name}></StrikeButton>
            );
          })}
        </View>
    );
  }
}