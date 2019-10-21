import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  
} from 'react-native';
//import {StackNavigator} from 'react-navigation';
//import firebase from 'firebase';
//import App from '../../App';
import Logo from '../components/Logo';
//import Form from '../components/Form';

export default class Login extends Component
{
  
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: "",
    }
  }
   
  user = () =>{

    this.props.navigation.navigate('Display');
      
  }
  
  owner = () =>{

    this.props.navigation.navigate('Login');
      
  }
  
    render() {
        return(
            <View style={styles.container}>
              <Logo/>

                <View style = {styles.button}>
                <TouchableOpacity  onPress={this.user}>
                    <Text style={styles.buttonText}>User</Text> 
                </TouchableOpacity>
                </View>

                <View style = {styles.button}>
                <TouchableOpacity  onPress={this.owner}>
                    <Text style={styles.buttonText}>Owner</Text> 
                </TouchableOpacity>
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
    flexDirection: 'column',
    justifyContent:'center',
   
    
  },
  
button:{
    width:300,
    backgroundColor:'#bdbdbd',
    borderRadius:25,
    marginVertical:10,
    paddingVertical:12,

},

buttonText: {
    fontSize:16,
    fontWeight:'bold',
    color:'#263238',
    textAlign:'center'
}
  
  });
  //export default Login;

