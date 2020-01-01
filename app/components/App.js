import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import TabList from './tabList';

export default class MuayThaiTrainer extends Component {
  render() {
    return (
        <TabList />
    );
  }
}

AppRegistry.registerComponent('MuayThaiTrainer', () => MuayThaiTrainer);