import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Animated,
  TouchableOpacity,
} from "react-native";
import { List, ListItem } from 'native-base';
import firebase from 'react-native-firebase';

export default class ListAll extends Component {
    constructor(props) {
      super(props);
      this.state = {
          exercises: []
      };
      let exercises = [];

      firebase.firestore()
      .collection('combinations')
      .get()
      .then(querySnapshot => {
    
        querySnapshot.forEach(documentSnapshot => {
          exercises.push(documentSnapshot);
        });

        this.setState({
          exercises
        })
      });
    }
  
    onCollectionUpdate = (querySnapshot) => {
        let exercises = [];
    
        const { name, moves, type } = querySnapshot._data;
    
        //for each combination, make a new list element
          moves.forEach((move, index) => {
            strikes.push({
              name: move,
              key: index
          });
          })
    
        this.setState({
            loading: false,
            type: comboType,
        })
    
      }

    render() {

      let listView = (<View></View>);
      // if (this.state.dataList.length) {
          listView = (
            <List
              ref='listView'
              style={{flex: 1}}
              data={this.state.exercises}
              renderRow={(dataItem, section, index) => <ListItem data={dataItem} onCompletedChange={this._onCompletedChange}/>}
            />
          );

      return (
       <View>
                   <List dataArray={this.state.exercises}
          renderRow={(item) =>
              <ListItem>
                  <Text>{item._data.moves.toString()}</Text>
              </ListItem>
          }>
      </List>
       </View>
      );
    }
  }