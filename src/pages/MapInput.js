import React, { Component } from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';


export default class MapInput extends Component{

    render(){

        return(

            <GooglePlacesAutocomplete
            placeholder='Search'
            minLength={2} // minimum length of text to search
            autoFocus={true}
            returnKeyType={'search'} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
           // keyboardAppearance={'light'} // Can be left out for default keyboardAppearance https://facebook.github.io/react-native/docs/textinput.html#keyboardappearance
            listViewDisplayed='auto'    // true/false/undefined
            fetchDetails={true}
            //renderDescription={row => row.description} // custom description render
            onPress={(position, details = null) => { // 'details' is provided when fetchDetails = true
              this.props.notifyChange(details.geometry.location);
              console.log(position, details);
            }
        
        }

        query={{
            // available options: https://developers.google.com/places/web-service/autocomplete
            key: 'AIzaSyAKoXz53w9IRr9E4d6lI0NtoocVi3h69FU',
            language: 'en', // language of the results
            //types: '(restaurants)' // default: 'geocode'
          }
        }

        nearbyPlacesAPI='GooglePlacesSearch' // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch

        
          GooglePlacesSearchQuery={{
            // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
            rankby: 'distance',
            type: 'restaurant'
          }}
          
          GooglePlacesDetailsQuery={{
            // available options for GooglePlacesDetails API : https://developers.google.com/places/web-service/details
            fields: 'formatted_address',
          }}
    
          filterReverseGeocodingByTypes={['restaurant']} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities
          //predefinedPlaces={[home, restaurant]}
        debounce={200}

        />

        );
    }
}