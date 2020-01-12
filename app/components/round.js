import React, { Component } from 'react';
import { Container, Header, Content, Button, Text, View } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import Combination from './combination';
import firebase from 'react-native-firebase';

export default class Round extends Component {
    constructor(props){
        super(props);
        this.strikes = firebase.firestore().collection('combinations');
        this.state = {
            loading: true,
            strikes: [],
            type: "",
            length: 0
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
    let comboLength = 0;
    let comboType = "";

    querySnapshot.forEach((combo) => {
        const { name, moves, length, type } = combo.data();

      moves.forEach((move, index) => {
        strikes.push({
          name: move,
          key: index
      });
      })

      comboLength = length;
      comboType = type;
    });

    this.setState({
        strikes,
        loading: false,
        type: comboType,
        length: comboLength
    })

  }

  render() {
    return (
        <Grid>
              <Col>
                <Combination data={this.state.strikes}/>
              </Col>
              <Col>
                <Row>
                <View>
                  <Text>
                      {this.state.length}
                  </Text>
                </View>
                </Row>
                <Row>
                <View>
                  <Text>{this.state.type}</Text>
                </View>
                </Row>
              </Col>
            </Grid>
    );
  }
}