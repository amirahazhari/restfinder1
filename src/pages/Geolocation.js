/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  TouchableOpacity
} from 'react-native';
import {Root, Popup} from 'popup-ui';
import MapView, { Marker, Callout } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
//import MapInput from "./MapInput";
//import { List, RadioButton } from 'react-native-paper';
//import {Dropdown } from 'react-native-material-dropdown';
import getDirections from 'react-native-google-maps-directions'
//import {getLocation} from './LocationService';
//import styles from '../css/styles';

const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = 0.0421;
// Disable yellow box warning messages
console.disableYellowBox = true;

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      lat: null,
      long: null,
      places: null,
     /* isMapReady: false,
      marginTop: 1,
      userLocation: "",
      regionChangeProgress: false,
      markerPressed: false*/
    }
    //this.renderMapHack = _renderMapHack.bind(this);
  }
  componentDidMount() {
    Geolocation.getCurrentPosition(
      position => {
        const lat = position.coords.latitude;
        const long = position.coords.longitude;
        this.setState({ lat, long })
        this.getPlaces();
       // this.getInitialState();
      }
    );
 
    this.watchID = Geolocation.watchPosition(
      position => {
        this.setState({
       
            lat: position.coords.latitude,
            long: position.coords.longitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
        
        });
      }
    );
  }

 /* onMapReady = () => {
    this.setState({ isMapReady: true, marginTop: 0 });
  }*/

  getPlaces() {
    const url = this.getUrlWithParameters(this.state.lat, this.state.long, 2500, "restaurant", 'AIzaSyAKoXz53w9IRr9E4d6lI0NtoocVi3h69FU')
    fetch(url)
      .then((data) => data.json())
      .then((res) => {
        console.log(res);
        const arrayMarkers = [];
        res.results.map((element, i) => {

          let ob = element.opening_hours
          if (ob && ob.open_now !== undefined) {
             var c = <Text>Open: {(element.opening_hours.open_now == true) ? 'YES' : 'NO'}</Text>
          }
          
          let oc = element.price_level

          if(oc == 0){

            var a = <Text>Price Level: Free</Text>

          }

          else if(oc == 1)
          {
             var a = <Text>Price Level: Inexpensive</Text>
          }

          else if(oc == 2){
            var a = <Text>Price Level: Moderate</Text>
          }

          else if(oc == 3){
            var a = <Text>Price Level: Expensive</Text>
          }

          else if(oc == 4){
            var a = <Text>Price Level: Very Expensive</Text>
          }

          else{
            var a = <Text>No price shown</Text>
          }

          arrayMarkers.push(
            <Marker
              key={i}
              coordinate={{
                latitude: element.geometry.location.lat,
                longitude: element.geometry.location.lng
              }}
              //onPress={()=>{this.props.markerPressed()}}
            >

              <Callout>
                <View>
                  <Text>{element.name}</Text>
                  {c}
                  {a}
                  <Text>Rating:{element.rating}</Text>
                  <Text>Review:{element.user_ratings_total}</Text>
                </View>

              </Callout>
              
            </Marker>
          )
        })
        this.setState({ places: arrayMarkers });
      })

  }
  getUrlWithParameters(lat, long, radius,types, API) {

    const url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?";
    const location = `location=${lat},${long}&radius=${radius}`;
    const typeData = `&types=${types}`;
    const key = `&key=${API}`;
    return `${url}${location}${typeData}${key}`
  }


  /*getInitialState(){
    getLocation().then(data => {
      this.updateState({
        lat:data.latitude,
        long: data.longitude
      })
    })
  }

  updateState(location){

    this.setState({
      lat:location.latitude,
      long: location.longitude,
      latitudeDelta: 0.003,
      longitudeDelta: 0.003,
    })
  }*/

 /* getCoordsFromName (loc){
    this.setState({
      lat: loc.lat,
      long:loc.lng,
    })
  }*/

  /*handleGetDirections = () => {
    const data = {
       source: {
        latitude: this.state.lat,
        longitude: this.state.long
      },
      destination: {
        latitude:2.2736240,
        longitude: 102.4440090
      },
     
      params: [
        {
          key: "travelmode",
          value: "driving"        // may be "walking", "bicycling" or "transit" as well
        },
        {
          key: "dir_action",
          value: "navigate"       // this instantly initializes navigation using the given travel mode
        }
      ],
      
    }
 
    getDirections(data)
  }*/
  render() {
   
    return (

      <View style={styles.container}>
         <Root style={{margin:0.5}}>
    <View >
        <TouchableOpacity style={styles.button}
            onPress={() =>
              Popup.show({
                type: 'Warning',
                title: 'Alert',
                button: false,
                textBody: 'If the direction icon is not appear please press the marker and tilt your phone',
                buttontext: 'Ok',
                callback: () => Popup.hide()
              })
            }
        >
          <Text style={styles.buttonText}>No Direction Icon?</Text> 
          
        </TouchableOpacity>
    </View>
</Root>
          {this.state.lat ?
          <MapView
            style={{ flex: 1 }}
            provider={MapView.PROVIDER_GOOGLE}
            toolbarEnabled
            initialRegion={{
              latitude: this.state.lat,
              longitude: this.state.long,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421
            }}
            showsUserLocation={true}
            //followsUserLocation={true}
           // onMapReady={this.onMapReady}
          >
            <Marker
              coordinate={{
                latitude: this.state.lat,
                longitude: this.state.long,
              }} 
              title={"Your Location"}
              draggable
            >
              <View>
                <Image style={{ width: 50, height: 50 }} source={require("../images/marker.png")} />
              </View>
            </Marker>
            {this.state.places}
          </MapView>:null }

         
      </View>
      
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  radioButtonContainer: {
    flexDirection: 'row',
    backgroundColor: '#fafafa',
    borderColor: 'transparent',
    borderRadius: 2,
    borderWidth: 1,
    marginVertical: 1,
    padding: 1,
    borderColor: '#efefef'
  },

  radioButtonStyle: {
    marginTop: 7,
    fontWeight: 'bold',
    color: '#484d51'
  },
  
})