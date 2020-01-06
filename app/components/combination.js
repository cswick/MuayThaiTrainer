import React, { Component } from 'react';
import { Container, Header, Content, Button, Text, View } from 'native-base';
import StrikeButton from './ strikeButton';
import firebase from 'react-native-firebase';

export default class Combination extends Component {
    constructor(props){
        super(props);
        this.strikes = firebase.firestore().collection('combinations');
        this.state = {
            loading: true,
            strikes: [],
        }
    }

    componentDidMount() {
        this.unsubscribe = this.strikes.onSnapshot(this.onCollectionUpdate);
    }
    
    componentWillUnmount() {
      this.unsubscribe();
    }


    onCollectionUpdate = (querySnapshot) => {
    let strikes = [];

    querySnapshot.forEach((strike) => {
        const { name, moves, length } = strike.data();


      moves.forEach((move, index) => {
        strikes.push({
          name: move,
          key: index
      });
      })
    });

    this.setState({
        strikes,
        loading: false,
    })

  }

  render() {
    return (
        <View style={{ marginLeft: 15, alignItems: 'flex-start', justifyContent: 'space-between'}}>
          {this.state.strikes.map((prop, key) => {
            return (
              <StrikeButton key={prop.key} name={prop.name}></StrikeButton>
            );
          })}
        </View>
    );
  }
}