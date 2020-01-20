//import AsyncStorage from '@react-native-community/async-storage';
import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Alert,
  TextInput,
  TouchableOpacity
} from 'react-native';
import styles from '../css/styles';

export default class ChangePassword extends Component{

    constructor(props) {
        super(props);
        this.state={
            email:"",
          password:"",
         
        }} 

        ChangePassword = () => {

            fetch('https://www.restfinder.codes/src/pages/PHP/ChangePassword.php', {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
        
                username:username,
                currPassword: this.state.currPassword,
                newPw:this.state.newPw,
                //email:this.state.email,
                confirmPassword:this.state.confirmPassword
             
              })
        
            }).then((response) => response.json())
              .then((responseJson) => {
        
                if (responseJson === 'Password Updated!') {
                  Alert.alert(responseJson);
                  this.props.navigation.navigate('Profile');
                }
                else {
                  Alert.alert(responseJson);
                }
        
              }).catch((error) => {
                console.error(error);
              });
          }

        render(){

            const {goBack} = this.props.navigation;
            return(
               <View style={ styles.container}>
                 <TextInput style={styles.inputBox}
                  value={this.state.currPassword}
                  onChangeText={currPassword => this.setState({currPassword})}
                  underlineColorAndroid='rgba(0,0,0,0)'
                  placeholder='Current Password'
                  secureTextEntry={true}
                  placeholderTextColor="#ffffff"/>

                  <TextInput style={styles.inputBox}
                  value={this.state.newPw}
                  onChangeText={newPw => this.setState({newPw})}
                  underlineColorAndroid='rgba(0,0,0,0)'
                  placeholder='New Password'
                  secureTextEntry={true}
                  placeholderTextColor="#ffffff"/>  

                  <TextInput style={styles.inputBox}
                  value={this.state.confirmPassword}
                  onChangeText={confirmPassword => this.setState({confirmPassword})}
                  underlineColorAndroid='rgba(0,0,0,0)'
                  placeholder='Retype New Password'
                  secureTextEntry={true}
                  placeholderTextColor="#ffffff"/>  

                <TouchableOpacity style={styles.button} onPress={this.ChangePassword}>
                    <Text style={styles.buttonText}>Change Password</Text> 
                </TouchableOpacity>
         </View>

            );
        }
}

