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
    }
  
  onLoginPress= () => {

    var validate = this.validate(this.state.username, this.state.email, this.state.password)

    fetch('http://172.20.10.3/restfinder/src/pages/PHP/Signup.php', {
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

        if (responseJson.message === 'User Created') {
        
      
            this.props.navigation.navigate('Login');
          
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
                  value={this.state.email}
                  onChangeText={(text) => {this.setState({username: text})}}
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

const styles = StyleSheet.create ({
  container : {
    backgroundColor:'#880e4f',
    flex:1,
    alignItems:'center',
    //flexDirection: 'column',
    justifyContent:'center',
    
  },
    signupTextCont:{
        flexGrow:1,
        alignItems:'flex-end',
        justifyContent:'center',
        paddingVertical:16,
        flexDirection: 'row'

    },
    
    signupText:{
        color:'rgba(255,255,255,0.7)',
        fontSize:16
    },

    signupButton:{
      color:'#ffffff',
      fontSize:16,
      fontWeight:'bold'
    },
    inputBox: {
      width:300,
      backgroundColor:'rgba(255,255,255,0.3)',
      borderRadius:25,
      paddingHorizontal:16,
      fontSize:16,
      color:'#ffffff',
      marginVertical:10
      
  },

button:{
    width:300,
    backgroundColor:'#bdbdbd',
    borderRadius:25,
    marginVertical:10,
    paddingVertical:12
},

buttonText: {
    fontSize:16,
    fontWeight:'bold',
    color:'#263238',
    textAlign:'center'
}
  
  });
  //export default Login;

