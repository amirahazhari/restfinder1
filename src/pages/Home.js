import AsyncStorage from '@react-native-community/async-storage';
import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Alert
} from 'react-native';
import { Avatar, List } from 'react-native-paper';
import styles from '../css/styles';
import Slideshow from 'react-native-image-slider-show';

export default class Home extends Component {

  constructor(props) {
    super(props);
    this.state={
      username:"",
      email:"",
    }
  };
    async componentDidMount() {

      await AsyncStorage.setItem('isLoggedIn', '1');
      username = await AsyncStorage.getItem('username') ;
      this.setState({username:username});
     
      fetch('http://134.209.109.223/src/pages/PHP/Profile.php', {
        method: 'POST',
        headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json',
        },
        
        body: JSON.stringify({
           username:username,
         } ),
       
     }).then((response) => response.json())
        .then((responseJson) => {
           this.setState({
              
              email:responseJson.email,
              
           })
           console.log(this.state.email);

        }).catch((err) => {
           if (err.name == 'AbortError') return
           throw err

        });

 }

  render () {
    return (
      <View style={styles.container}>
          <List.Section style={{backgroundColor:'#eb8e5e', alignSelf:'flex-start'}}>
             <View style={{ flexDirection: 'row', margin: 5 }}>
            
               <List.Subheader style={{backgroundColor:'#f5e7d3'}}>
                WELCOME!
               </List.Subheader>
               <View style={{  alignSelf: 'center' }}>
              
                     <Text style={styles.usernameText}>{this.state.username}</Text>
                </View>
               </View>    
               </List.Section>
        <Slideshow 
  
      dataSource={[
        { url:'https://img.freepik.com/free-photo/fast-food-restaurant-table_7939-2873.jpg?size=626&ext=jpg' },
        { url:'http://static.trip101.com/paragraph_media/pictures/001/694/307/large/8608791673_894d7e9ce8_k.jpg?1564566615' },
        { url:'http://static.asiawebdirect.com/m/phuket/portals/phuket-com/homepage/dining/howto/pagePropertiesImage/thai-food.jpg' }
    ]}/>
           
              
      </View>
    );
  }
}


