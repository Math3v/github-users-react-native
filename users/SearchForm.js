import React, { Component } from 'react';
import {Form, Item, Input, Label, Button, Text } from 'native-base';
export default class FloatingLabelExample extends Component {

  render() {
    return (
      <Item
        floatingLabel
        style={styles.input}
      >
        <Label>Username</Label>
        <Input
          onChangeText={text => this.props.onSearch(text)}
        />
      </Item>
    );
  }
}

const styles = {
  input: {
    margin: 10
  }
};
