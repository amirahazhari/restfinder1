import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native';

export default class Logo extends Component
{
    render()
    {
        return(
            <View style={styles.container}>
            <Image style={{width:150, height:150}} 
            source={require('../images/logo.png')}/>
            <Text style={styles.logoText}>Welcome to Restaurant Finder!</Text>
            </View>
        )
    }

}

const styles = StyleSheet.create ({
    container : {
      flex:1,
      alignItems:'center',
      justifyContent:'flex-end',
      
    },
    logoText:
    {
        marginVertical:10,
        fontSize:18,
        color:'rgba(255,255,255,0.7)'
    }
  
  });
