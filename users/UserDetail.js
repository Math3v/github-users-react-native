import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class UserDetail extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.user.login}`,
  });

  render() {
    const { user } = this.props.navigation.state.params;
    return (
      <View>
        <Text>Login: {user.login}</Text>
        <Text>Url:   {user.html_url}</Text>
        <Text>Repos: {user.repos_url}</Text>
      </View>
    );
  }
}
