import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View, Dimensions } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import Geolocation from "@react-native-community/geolocation";

let { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 0;
const LONGITUDE = 0;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export default class App extends Component{ 

  constructor() {
    super();
    this.state = {
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      }
    };
  }

  componentDidMount() {
    Geolocation.getCurrentPosition(
      position => {
        this.setState({
          region: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          }
        });
      },
    (error) => console.log(error.message),
    { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
    this.watchID = Geolocation.watchPosition(
      position => {
        this.setState({
          region: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          }
        });
      }
    );
  }
  componentWillUnmount() {
    Geolocation.clearWatch(this.watchID);
  }
 
  render() 
  { 
    return (
    <MapView
    provider={PROVIDER_GOOGLE }
     style={{ flex: 1 }} 
     region={ this.state.region }
      //latitude: 37.78825,
      //longitude: -122.4324,
     // latitudeDelta: 0.0922,
      //longitudeDelta: 0.0421, }} 
      showsUserLocation={true} 
      onRegionChange={ region => this.setState({region}) }
      onRegionChangeComplete={ region => this.setState({region}) }>
      <MapView.Marker
          coordinate={ this.state.region }
        />
      </MapView>
      ); 
    } 
  }
