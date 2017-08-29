import React, { Component } from 'react';
import { Text } from 'react-native';
import { List, ListItem, Spinner, Right, Button, Icon, Body, Container } from 'native-base';
import { fetchUsers } from './UsersService';
import SearchForm from './SearchForm';

export default class UsersList extends Component {

  static navigationOptions = {
    title: 'Users',
  };

  constructor(props) {
    super(props);
    this.state = {
      users: [],
      searchTerm: ''
    };
  }

  componentWillMount() {
    fetchUsers().then(users => {
      this.setState({ users });
    })
  }

  renderSpinner() {
    return (
      <Spinner/>
    );
  }

  handleUserClick(user) {
    const { navigate } = this.props.navigation;
    console.log(user.login);
    navigate('UserDetail', { user });
  }

  handleSearch(searchTerm) {
    this.setState({ searchTerm });
  }

  filteredUsers(users) {
    const { searchTerm } = this.state;
    return users.filter(user => {
      const userLoginLower = user.login.toLowerCase();
      const searchTermLower = searchTerm.toLowerCase();
      return userLoginLower.indexOf(searchTermLower) !== -1;
    });
  }

  renderUsers(users) {
    return(
      <Container>
        <SearchForm
          onSearch={this.handleSearch.bind(this)}
        />
        <List button={true}>
          {this.filteredUsers(users).map(user => {
            return(
              <ListItem
                key={user.login}
                button={true}
                onPress={this.handleUserClick.bind(this, user)}
                icon
              >
                <Body>
                  <Text>{user.login}</Text>
                </Body>
                <Right>
                  <Icon name='arrow-forward'/>
                </Right>
              </ListItem>
            );
          })}
        </List>
      </Container>
    );
  }

  render() {
    if(this.state.users.length === 0) {
      return this.renderSpinner();
    } else {
      return this.renderUsers(this.state.users);
    }
  }
}
