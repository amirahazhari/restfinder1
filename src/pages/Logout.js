import AsyncStorage from '@react-native-community/async-storage';
import React from 'react';
import { NavigationActions, StackActions } from 'react-navigation';

export default class Logout extends React.Component {

  render() {
    return (null);
  }

  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
      username: '',
    }
    props.navigation.setParams({
      Logout: this.Logout,
    });
  }

  async componentDidMount() {
    AsyncStorage.removeItem('isLoggedIn');
    AsyncStorage.removeItem('username');

    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'Login' })],
    });
    this.props.navigation.dispatch(resetAction);

    alert('You have been logged out.');
  }
}

