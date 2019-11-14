import AsyncStorage from '@react-native-community/async-storage';
import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  RefreshControl,
  Alert
} from 'react-native';
import { Avatar, List } from 'react-native-paper';

export default class Display extends Component{

  constructor(props) {
    super(props);
    this.state={
      refreshing: false,
      username:"",
      email:""
    }} 

    /*storeData = async () => {
      try {
        await AsyncStorage.setItem('username',  this.state.username)
      } catch (e) {
        // saving error
      }
    }*/

    /*getData = async () => {
      try {
        const value = await AsyncStorage.getItem('@storage_Key')
        if(value !== null) {
          // value previously stored
        }
      } catch(e) {
        // error reading value
      }
    }*/

    _refreshControl() {
      return (
         <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={() => this.componentDidMount()} />
      )
   }

    async componentDidMount() {

      await AsyncStorage.setItem('isLoggedIn', '1');
      username = await AsyncStorage.getItem('username') ;
      this.setState({username:username});
     
      fetch('http:// 172.20.10.10/restfinder/src/pages/PHP/Profile.php', {
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

 ChangeEmail = () => {
  this.props.navigation.navigate('ChangeEmail')
};

ChangePassword = () => {
  this.props.navigation.navigate('ChangePassword')
};

DeleteUser = () => {
  Alert.alert(
    'Delete Confirmation',
    'Are you sure you want to delete your account? This action cannot be undo.',
    [
       {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
       },
       { text: 'Yes', onPress: () => this.props.navigation.navigate('DeleteUser') },
    ],
    { cancelable: false },
 );
};

Logout = () => {
  this.props.navigation.navigate('Logout')
};
         render() {
            console.log(this.state.email);
          return (

          <View style ={styles.container} >
             <ScrollView style={{ backgroundColor: '#880e4f'}} refreshControl={this._refreshControl()} >
             <List.Section style={{backgroundColor:'#b0bec5'}}>
            
               <List.Subheader style={{backgroundColor:'#e2f1f8'}}>PROFILE</List.Subheader>
               <View style={{ flexDirection: 'row', margin: 10 }}>
               <Avatar.Icon style={{ backgroundColor: '#673AB7' }} icon="person" />
               <View style={{ flexDirection: 'column', alignSelf: 'center',margin: 30 }}>
                     <Text style={styles.usernameText}>{this.state.username}</Text>
                     <Text style={{ marginHorizontal: 20 }}>{this.state.email}</Text>
                </View>
               </View>
               
               <List.Item
                   title="Change Email"
                   onPress={this.ChangeEmail}
                  left={() => <List.Icon icon= "person"/>}
               />
                <List.Item
                  title="Change Password"
                  onPress={this.ChangePassword}
                  left={() => <List.Icon color="#000" icon="lock" />}
               />
               <List.Subheader style={{ backgroundColor: '#e2f1f8' }}>MORE</List.Subheader>
                <List.Item
                  title="Delete Account"
                  onPress={this.DeleteUser}
                  left={() => <List.Icon color="#000" icon="delete" />}
               />
                <List.Item
                  title="Logout"
                  onPress={this.Logout}
                  style={{ paddingVertical: -10 }}
                  left={() => <List.Icon color="#000" icon="exit-to-app" />}
               />
         
               </List.Section>
               </ScrollView>
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
    rowViewContainer: {
      fontSize: 20,
      paddingRight: 10,
      paddingTop: 10,
      paddingBottom: 10,
    },
containerStyle: {
    marginTop: 20, 
    borderTopWidth: 1,
     borderBottomWidth: 1, 
     borderBottomColor: '#cbd2d9',
},
usernameText: {
  fontSize: 20,
  marginHorizontal: 20, 
  color: '#000',
  fontWeight: 'bold',
},

    
});