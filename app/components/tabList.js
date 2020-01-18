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
          <Tab heading="Round 1"><Round id={'IMp4bbwmXPHs9R333fyi'} /></Tab>
          <Tab heading="Round 2"><Round id={'NMzleebKtcsUA82Ep290'} /></Tab>
          <Tab heading="Round 3"><Round id={'SLweXzGAMeEHG1o1CDxF'} /></Tab>
          <Tab heading="Round 4"><Round id={'Sv7ytXDIU6aNkJOxyQNu'} /></Tab>
          <Tab heading="Round 5"><Round id={'yXB6kGhlNCKUM8wsdHbM'} /></Tab>
        </Tabs>
      </Container>
    );
  }
}
