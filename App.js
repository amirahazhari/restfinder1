import React, {Component} from 'react';
import {createAppContainer } from 'react-navigation';
import {createStackNavigator } from 'react-navigation-stack';

import Home from './src/pages/Home';
import Login from './src/pages/Login';
import Signup from './src/pages/Signup';
import Profile from './src/pages/Profile';
//import Display from './src/pages/Display';
import ChangeEmail from './src/pages/ChangeEmail';
import ChangePassword from './src/pages/ChangePassword';
import DeleteUser from './src/pages/DeleteUser';
import Logout from './src/pages/Logout';
import Geolocation from './src/pages/Geolocation';
import Navigation from './src/pages/Navigation';
import Menu from './src/components/Menu';



const Project= createStackNavigator({

  Login: {
   screen: Login
  },
  Signup: {
   screen: Signup
  },
  Profile:{
    screen: Profile
  },
  /*Display:{
    screen: Display
  },*/
  ChangeEmail:{
    screen: ChangeEmail
  },
  ChangePassword:{
    screen: ChangePassword
  },
  DeleteUser:{
    screen: DeleteUser
  },
  Logout:{
    screen: Logout
  },
  
  Geolocation:{
    screen: Geolocation
  },
  Home:{
    screen: Home,
    
  },
  Navigation:{
    screen:Navigation
  },
  Menu:{
    screen:Menu
  }
    
  
  

},
  {
    initialRouteName: 'Geolocation',
  }
  );
export default createAppContainer(Project);
