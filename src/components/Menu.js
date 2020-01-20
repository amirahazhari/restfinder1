import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from "react-native-vector-icons/FontAwesome";
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import Geolocation from '../pages/Geolocation';
import ChangeEmail from '../pages/ChangeEmail';
import ChangePassword from '../pages/ChangePassword';
import DeleteUser from '../pages/DeleteUser';
import Logout from '../pages/Logout';



//export default class Home2 extends Component {
 

/*class HomeScreen extends Component {
  render() {
    return(
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text> This is my Home screen </Text>
      </View>
    );
  }
}*/

/*class ExploreScreen extends Component {
  render() {
    return(
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text> This is my Explore screen </Text>
      </View>
    );
  }
}*/

/*render() {
    return (
        <AppContainer />
    );
  }
}*/

const bottomTabNavigator = createBottomTabNavigator(
    {
      Home: {
        screen: Home,
        navigationOptions: {
          tabBarIcon: ({ tintColor }) => (
            <Icon name="home" size={25} color={tintColor} />
          )
        }
      },
      Restaurant: {
        screen: Geolocation,
        navigationOptions: {
          tabBarIcon: ({ tintColor }) => (
            <Icon name="cutlery" size={25} color={tintColor} />
          )
        }
      },
      Profile: {
        screen: Profile,
        navigationOptions: {
          tabBarIcon: ({ tintColor }) => (
            <Icon name="user" size={25} color={tintColor} />
          )
        }
      },
      Logout: {
        screen: Logout,
        navigationOptions: {
          tabBarIcon: ({ tintColor }) => (
            <Icon name="sign-out" size={25} color={tintColor} />
          )
        }
      },
      
      
      
     /* Notifications: {
        screen: NotificationsScreen,
        navigationOptions: {
          tabBarIcon: ({ tintColor }) => (
            <Icon name="search" size={25} color={tintColor} />
          )
        }
      },
      Profile: {
        screen: ProfileScreen,
        navigationOptions: {
          tabBarIcon: ({ tintColor }) => (
            <Icon name="user" size={25} color={tintColor} />
          )
        }
      },*/
    },
    {
      initialRouteName: 'Home',
      tabBarOptions: {
        activeTintColor: '#eb6e3d'
      }
    }
  );
  
  export default  createAppContainer(bottomTabNavigator);