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


export default class ChangeEmail extends Component{

    constructor(props) {
        super(props);
        this.state={
          email:"",
          password:""
         
        }} 

        ChangeEmail = () => {

            fetch('http://134.209.109.223/src/pages/PHP/ChangeEmail.php', {
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