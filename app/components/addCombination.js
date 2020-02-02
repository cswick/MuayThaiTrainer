import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input } from 'native-base';

export default class AddCombination extends Component {
    constructor(props) {
        super(props);
        this.state = {
          selected2: undefined
        };
      }

      onValueChange2(value) {
        this.setState({
          selected2: value
        });
      }

  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Form>
            <Item>
              <Input placeholder="Name" />
            </Item>
            <Item>
              <Input placeholder="Password" />
            </Item>
            <Item>
              <Input placeholder="Length" />
            </Item>
            <Item picker>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={{ width: undefined }}
                placeholder="Type"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.selected2}
                onValueChange={this.onValueChange2.bind(this)}
              >
                <Picker.Item label="Technical" value="tech" />
                <Picker.Item label="Burnout" value="burn" />
                <Picker.Item label="Abs" value="kabs" />
              </Picker>
            </Item>
          </Form>
        </Content>
      </Container>
    );
  }
}