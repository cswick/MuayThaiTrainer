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
        const { name, moves } = strike.data();


      moves.forEach((move) => {
        strikes.push({
          name: move
      });
      })
    });

    this.setState({
        strikes,
        loading: false,
    })

  }
    //TODO: get combos from database, load into data, build buttons based off data
  render() {
    return (
        <View style={{ alignItems: 'center', justifyContent: 'space-between'}}>
          {this.state.strikes.map((prop, key) => {
            return (
              <StrikeButton name={prop.name}></StrikeButton>
            );
          })}
        </View>
    );
  }
}