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
  Image
} from 'react-native';

import MapView, { Marker, Callout } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      lat: null,
      long: null,
      places: null
    }
  }
  componentDidMount() {
    Geolocation.getCurrentPosition(
      position => {
        const lat = position.coords.latitude;
        const long = position.coords.longitude;
        this.setState({ lat, long })
        this.getPlaces()
      }
    );
  }

  getPlaces() {
    const url = this.getUrlWithParameters(this.state.lat, this.state.long, 1000, "restaurant", 'AIzaSyAKoXz53w9IRr9E4d6lI0NtoocVi3h69FU')
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
          
            >
              <Callout>
                <View>
      
                  <Text>{element.name}</Text>
                  {c}
                  {a}
                  <Text>Rating:{element.rating}</Text>
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
  render() {

    return (

      <View style={styles.container}>

        {this.state.lat ?
          <MapView
            style={{ flex: 1 }}
            provider={MapView.PROVIDER_GOOGLE}
            initialRegion={{
              latitude: this.state.lat,
              longitude: this.state.long,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421
            }}
          >
            <Marker
              coordinate={{
                latitude: this.state.lat,
                longitude: this.state.long,
              }}
            >
              <View>
                <Image style={{ width: 50, height: 50 }} source={require("../images/marker.png")} />
              </View>
            </Marker>
            {this.state.places}
          </MapView> : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
})