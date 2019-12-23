import AsyncStorage from '@react-native-community/async-storage';
import { Component } from 'react';
import { NavigationActions, StackActions } from 'react-navigation';

export default class DeleteUser extends Component {

  render() {
    return (null);
  }

  

  async componentDidMount() {

    fetch('http://134.209.109.223/src/pages/PHP/Delete.php', {
     
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({

        username: username,

      })

    }).then((response) => response.json())
      .then((responseJson) => {

        alert(responseJson);

      }).catch((error) => {
        alert("There is a network error. Please try again.")
        console.log(error);
      });

    AsyncStorage.removeItem('isLoggedIn');
    AsyncStorage.removeItem('username');

    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'Home' })],
    });
    this.props.navigation.dispatch(resetAction);

  }

}