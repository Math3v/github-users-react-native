import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import UsersList from '../users/UsersList';
import UserDetail from '../users/UserDetail';

const RoutedComponent = StackNavigator({
  Home: { screen: UsersList },
  UserDetail: { screen: UserDetail }
});

export default class LayoutContainer extends Component {

  render() {
    return <RoutedComponent/>
  }
}
