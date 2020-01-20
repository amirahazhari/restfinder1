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


export default class ChangeEmail extends Component{

    constructor(props) {
        super(props);
        this.state={
          email:"",
          password:""
         
        }} 

        ChangeEmail = () => {

            fetch('https://restfinder.codes/src/pages/PHP/ChangeEmail.php', {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
        
                username:username,
                email:this.state.email,
                password:this.state.password
             
              })
        
            }).then((response) => response.json())
              .then((responseJson) => {
        
                if (responseJson === 'Updated!') {
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

            return(
               <View style={ styles.container}>
                 <TextInput style={styles.inputBox}
                  value={this.state.email}
                  onChangeText={email => this.setState({email})}
                  underlineColorAndroid='rgba(0,0,0,0)'
                  placeholder='Enter your new email'
                  placeholderTextColor="#ffffff"/>

                  <TextInput style={styles.inputBox}
                  value={this.state.password}
                  onChangeText={password => this.setState({password})}
                  underlineColorAndroid='rgba(0,0,0,0)'
                  placeholder='Password'
                  secureTextEntry={true}
                  placeholderTextColor="#ffffff"/>  

                <TouchableOpacity style={styles.button} onPress={this.ChangeEmail}>
                    <Text style={styles.buttonText}>Change Email</Text> 
                </TouchableOpacity>
         </View>

            );
        }
}

