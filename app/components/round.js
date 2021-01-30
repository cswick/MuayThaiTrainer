import React, { Component } from 'react';
import { View } from 'react-native';
import { Button, Text, } from 'react-native-elements';
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

        this.onStartPressed = this.onStartPressed.bind(this);
        this.onResetPressed = this.onResetPressed.bind(this);


      let comboLength = 0;
      let comboType = "";
  
      const {id, length, type } = this.props;
  
      comboLength = length ? length * 60 : 0;
      comboType = this.props.type;

      let localStrikes = [];
      let dataFromFirestore = [];
  
      firebase.firestore()
      .collection('exercises')
      .get()
      .then(querySnapshot => {
        
        querySnapshot.forEach(documentSnapshot => {
          if(documentSnapshot._ref.id === id) {
            if(documentSnapshot._data.type === "cardio") {
              dataFromFirestore.push(documentSnapshot._data.name);
            } else {
            documentSnapshot._data.moves.forEach(strike => {
              dataFromFirestore.push(strike.name);
            });
            }
          }
        });

        if (comboType === 'cardio') {
          localStrikes.push({
            name: dataFromFireStore[0].name,
            key: 0
          }) 
        } else {
          dataFromFirestore.forEach((move, index) => {
            localStrikes.push({
              name: move,
              key: index
            });
          })
        }

      this.setState({
        id: Math.random().toString(),
        strikes: localStrikes,
        loading: false,
        type: comboType || '',
        length: comboLength,
        timerRunning: false
      });

      });
      }

    
    componentDidUpdate(prevProps, prevState) {
      if(prevProps.data != this.props.data) {
        this.setState({
          id: this.props.id
        });
      }
    }

  onStartPressed() {
    this.setState({
      timerRunning: !this.state.timerRunning
    });
  }

  onResetPressed() {
    const comboLength = this.state.length ? this.state.length : 0;

    this.setState({
      id: Math.random().toString(),
      timerRunning: false,
      length: comboLength,
    })
  }

  countdownFinished(){

    this.setState({
      length: test
    })
  }

  componentDidMount(){
    let comboLength = 0;

    const {id, length, type } = this.props;

    comboLength = length ? length * 60 : 0;

    this.setState({
      id: Math.random().toString(),
      timerRunning: false,
      length: comboLength,
    })
  }

  render() {
    return (
        <Grid style={{backgroundColor: '#354e79'}}>
              <Col style={{marginTop: 10}}>
                <Combination data={this.state.strikes}/>
              </Col>
              <Col>
                <Row>
                <View style={{marginTop: 10}}>
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