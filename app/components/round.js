import React, { Component } from 'react';
import { Container, Header, Content, Button, Text, View } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import Combination from './combination';
import firebase from 'react-native-firebase';
import Countdown from 'react-native-countdown-component';

export default class Round extends Component {
    constructor(props){
        super(props);
        this.state = {
            loading: true,
            strikes: [],
            type: "",
            length: 0,
            timerRunning: false,
        }
        this.strikes = firebase.firestore().collection('combinations').doc(props.id);
        this.onStartPressed = this.onStartPressed.bind(this);
        this.onResetPressed = this.onResetPressed.bind(this);
    }

    componentDidMount() {
        this.unsubscribe = this.strikes.onSnapshot(this.onCollectionUpdate);
    }
    
    componentDidUpdate(prevProps) {
      if(prevProps.data != this.props.data) {
        this.setState({
          id: this.props.id
        });
      }
    }

    onCollectionUpdate = (querySnapshot) => {
    let strikes = [];
    let comboLength = 0;
    let comboType = "";

    const { name, moves, length, type } = querySnapshot._data;

      moves.forEach((move, index) => {
        strikes.push({
          name: move,
          key: index
      });
      })

      comboLength = length ? length * 60 : 0;
      comboType = type;

    this.setState({
        strikes,
        loading: false,
        type: comboType,
        length: comboLength
    })

  }

  onStartPressed() {
    this.setState({
      timerRunning: !this.state.timerRunning
    });
  }

  onResetPressed() {
    const comboLength = this.state.length ? this.state.length : 0;

    this.setState({
      id: Math.random(),
      timerRunning: false,
      length: comboLength,
    })
  }

  countdownFinished(){

    this.setState({
      length: test
    })
  }

  render() {
    const test = this.state.length;
    return (
        <Grid style={{backgroundColor: '#354e79'}}>
              <Col>
                <Combination data={this.state.strikes}/>
              </Col>
              <Col>
                <Row>
                <View style={{maringTop: 50}}>
                      <Countdown
                        id={this.state.id}
                        until={this.state.length}
                        onFinish={this.countdownFinished}
                        onPress={() => alert('hi"')}
                        size={35}
                        timeToShow={['M', 'S']}
                        showSeparator
                        running={this.state.timerRunning}
                        style={{marginTop: 10}}
                      />
                      <View style={{flexDirection: 'row', marginTop: 15}}>
                        <Button success style={{ marginRight: 30, textAlign: 'center'}} onPress={this.onStartPressed}><Text>{this.state.timerRunning ? 'Pause' : 'Start'}</Text></Button>
                        <Button danger onPress={this.onResetPressed}><Text>Reset</Text></Button>
                      </View>
                </View>
                </Row>
                <Row>
                <View style={{alignItems: 'center', alignContent: 'space-between'}}>
                  <Text>{this.state.type}</Text>
                </View>
                </Row>
              </Col>
            </Grid>
    );
  }
}