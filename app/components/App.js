import React, { Component, Menu } from 'react';
import { AppRegistry } from 'react-native';
import SideMenu  from 'react-native-side-menu';
import TabList from './tabList';
import { Text, View } from 'native-base';

export default class MuayThaiTrainer extends Component {
  render() {
     const menu = <View style={{backgroundColor: '#FF3344'}}><Text>Test</Text></View>;

    return (
      <SideMenu menu={menu}>
        <TabList />
      </SideMenu>
    );
  }
}

AppRegistry.registerComponent('MuayThaiTrainer', () => MuayThaiTrainer);