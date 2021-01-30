import React, { Component } from 'react';
import { View } from 'react-native';
import StrikeButton from './strikeButton';

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
              <StrikeButton key={id} name={prop.name}></StrikeButton>
            );
          })}
        </View>
    );
  }
}