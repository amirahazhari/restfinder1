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


export default class ChangePassword extends Component{

    constructor(props) {
        super(props);
        this.state={
            email:"",
          password:"",
         
        }} 

        ChangePassword = () => {

            fetch('http://172.20.10.3/restfinder/src/pages/PHP/ChangePassword.php', {
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