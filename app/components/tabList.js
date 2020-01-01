import React, { Component } from 'react';
import { Container, Header, Tab, Tabs, ScrollableTab } from 'native-base';
import { Text } from 'react-native';
import StrikeButton from './ strikeButton';

export default class TabList extends Component {
  render() {
    return (
      <Container>
        <Header hasTabs/>
        <Tabs renderTabBar={()=> <ScrollableTab />}>
          <Tab heading="Round 1"><StrikeButton name="Jab"/><StrikeButton name="Cross" /></Tab>
          <Tab heading="Round 2"><Text>Teep, Cross, Hook</Text></Tab>
          <Tab heading="Round 3"><Text>three</Text></Tab>
          <Tab heading="Round 4"><Text>four</Text></Tab>
          <Tab heading="Round 5"><Text>five</Text></Tab>
        </Tabs>
      </Container>
    );
  }
}
