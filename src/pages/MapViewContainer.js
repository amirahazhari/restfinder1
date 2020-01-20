import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Button
} from 'react-native';

export default class MapViewContainer extends Component {
    constructor(props) {
      this.state = {
        markerPressed: false
      }
      this.renderMapHack = _renderMapHack.bind(this);
    }
    
    render() {
      return (
        <View>
          <MotiliMobileMapView
            address={this.state.property}
            markerPressed={()=>{this.setState({markerPressed:!this.state.markerPressed})}}
          />
          {this.renderMapHack()}
        </View>
      )  
    }
  }
  
  function _renderMapHack(){
      if (this.state.markerPressed) {
          return (
              <View></View>
          )
      }
  }