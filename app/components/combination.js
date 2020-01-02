import React, { Component } from 'react';
import { Container, Header, Content, Button, Text } from 'native-base';
import StrikeButton from './ strikeButton';
import firebase from 'react-native-firebase';

export default class Combination extends Component {
    constructor(props){
        super(props);
        this.strikes = firebase.firestore().collection('strikes')
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
        const { name } = strike.data();

        strikes.push({
            key: strike.id,
            name
        });
    });

    this.setState({
        strikes,
        loading: false,
    })
    }

    //TODO: get combos from database, load into data, build buttons based off data
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Button info><Text>{this.props.name}</Text></Button>
        </Content>
      </Container>
    );
  }
}