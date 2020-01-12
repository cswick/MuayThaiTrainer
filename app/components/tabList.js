import React, { Component } from 'react';
import { Badge, Container, Header, Tab, Tabs, ScrollableTab, View } from 'native-base';

import { Text } from 'react-native';
import Round from './round';

export default class TabList extends Component {
  render() {
    return (
      <Container>
        <Header hasTabs/>
        <Tabs contentContainerStyle={{flex: 1}} renderTabBar={()=> <ScrollableTab />}>
          <Tab heading="Round 1"><Round /></Tab>
          <Tab heading="Round 2"></Tab>
          <Tab heading="Round 3"><Text>three</Text></Tab>
          <Tab heading="Round 4"><Text>four</Text></Tab>
          <Tab heading="Round 5"><Text>five</Text></Tab>
        </Tabs>
      </Container>
    );
  }
}
