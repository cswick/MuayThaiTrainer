import React, { Component } from 'react';
import { Button, Container, Fab, Header, Icon, Tab, Tabs, ScrollableTab, View } from 'native-base';
import ActionButton from 'react-native-action-button';
import {
  AppRegistry,
  StyleSheet,
  Text,
} from 'react-native';

import Round from './round';

export default class TabList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
  }

  render() {
    return (
      <Container contentContainerStyle={styles.container}>
        <Header hasTabs/>
        <Tabs renderTabBar={()=> <ScrollableTab style={{ backgroundColor: "#473857" }}/>}>
          <Tab heading="Round 1"><Round id={'IMp4bbwmXPHs9R333fyi'} /></Tab>
          <Tab heading="Round 2"><Round id={'NMzleebKtcsUA82Ep290'} /></Tab>
          <Tab heading="Round 3"><Round id={'SLweXzGAMeEHG1o1CDxF'} /></Tab>
          <Tab heading="Round 4"><Round id={'Sv7ytXDIU6aNkJOxyQNu'} /></Tab>
          <Tab heading="Round 5"><Round id={'yXB6kGhlNCKUM8wsdHbM'} /></Tab>
        </Tabs>
        <ActionButton buttonColor="rgba(231,76,60,1)">
          <ActionButton.Item buttonColor='#9b59b6' title="Add Round" onPress={() => console.log("notes tapped!")}>
            <Icon type="FontAwesome5" name="skull" />  
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#3498db' title="Add Combination" onPress={() => {}}>
            <Icon type="FontAwesome5" name="book-medical" />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#1abc9c' title="All Combinations" onPress={() => {}}>
            <Icon type="FontAwesome5" name="book-dead" />
          </ActionButton.Item>
        </ActionButton>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#657382'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  }
});