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

export default class Signup extends Component
{
  
  constructor(props) {
    super(props);
    this.state={
        username:"",
        email:"",
        password:"",

    }};
   
    validate = (username, email, password) => {
      var u = /^(([a-zA-Z0-9]{5,15}$))/
      var e = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      var p = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/

      if (u.test(username) == false)
      alert("Username must be more than 5")

    if (e.test(email) == false)
      alert("Email is not valid.")

    if (p.test(password) == false)
      alert("Your password must contain at least one lowercase letter,one uppercase letter and one  digit and more than 6 characters.")

    if (u.test(username) == true && e.test(email) == true && p.test(password) == true)
      return true;
    else
      return false;
  }
  
  register= () => {

    var validate = this.validate(this.state.username, this.state.email, this.state.password)

    if (validate == true){
    fetch('https://restfinder.codes/src/pages/PHP/Signup.php', {
      method: 'POST',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: this.state.username,
        email: this.state.email,
        password: this.state.password,
      })
    })
      .then((response) => response.json())
      .then((responseJson) => {
        //alert ("okay");
        if (responseJson === 'User Created') {
          Alert.alert(responseJson);
          this.props.navigation.navigate('Login');
        }
        else {
          alert(responseJson);
        }

      }).catch((error) => {
        alert("There is a network error. Please try again.")
        console.log(error);
      });
  }
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
                  value={this.state.email}
                  onChangeText={(text) => {this.setState({email: text})}}
                  underlineColorAndroid='rgba(0,0,0,0)'
                  placeholder='Email'
                  placeholderTextColor="#ffffff"/>  

                <TextInput style={styles.inputBox}
                  value={this.state.password}
                  onChangeText={(text) => {this.setState({password: text})}}
                  underlineColorAndroid='rgba(0,0,0,0)'
                  placeholder='Password'
                  secureTextEntry={true}
                  placeholderTextColor="#ffffff"/>  

                <TouchableOpacity style={styles.button} onPress={this.register}>
                    <Text style={styles.buttonText}>Register</Text> 
                </TouchableOpacity>
                
            </View>
           
        );
    }
}


  //export default Login;

