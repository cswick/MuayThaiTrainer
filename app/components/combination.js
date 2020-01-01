import React, { Component } from 'react';
import { Container, Header, Content, Button, Text } from 'native-base';


export default class Combination extends Component {

  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Button info><Text>{this.props.name}</Text></Button>
        </Content>
      </Container>
    );
  }
}
