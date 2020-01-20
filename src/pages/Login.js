import AsyncStorage from '@react-native-community/async-storage';
import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Alert,
  TextInput
  
} from 'react-native';

//import App from '../../App';
import Logo from '../components/Logo';
import styles from '../css/styles';


//import Form from '../components/Form';

export default class Login extends Component
{
  
  constructor(props) {
    super(props);
    this.state={
        username:"",
        password:"",
    }};
   
  onLoginPress = async () =>{

    await AsyncStorage.setItem('isLoggedIn', '1');
    await AsyncStorage.setItem('username', this.state.username);

    fetch('https://www.restfinder.codes/src/pages/PHP/Login.php', {
      method: 'POST',
      headers: {
       'Accept': 'application/json', 
      'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
      })
    })
      .then((response) => response.json())
      .then((responseJson) => {

        if (responseJson.message === 'Data Matched') {
        
            this.props.navigation.navigate('Menu');
          
        }
        else {
          alert(responseJson.message);
        }

      }).catch((error) => {
        alert("There is a network error. Please try again.")
        console.log(error);
      });
  }

  
    
    render() {
        return(
            <View style={styles.container}>
              <Logo/>
              <TextInput style={styles.inputBox}
                  value={this.state.username}
                  onChangeText={(text) => {this.setState({username: text})}}
                  underlineColorAndroid='rgba(0,0,0,0)'
                  placeholder='Username'
                  placeholderTextColor="#ffffff"/>

                <TextInput style={styles.inputBox}
                  value={this.state.password}
                  onChangeText={(text) => {this.setState({password: text})}}
                  underlineColorAndroid='rgba(0,0,0,0)'
                  placeholder='Password'
                  secureTextEntry={true}
                  placeholderTextColor="#ffffff"/>  

                <TouchableOpacity style={styles.button} onPress={this.onLoginPress}>
                    <Text style={styles.buttonText}>Login</Text> 
                </TouchableOpacity>
                
              <View style={styles.signupTextCont}>
                  <Text style={styles.signupText}>Don't have an account yet? </Text>
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('Signup')}><Text style={styles.signupButton}>Sign Up</Text></TouchableOpacity>

              </View>
            </View>
           
        );
    }
}


  //export default Login;

