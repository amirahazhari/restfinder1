import React, {Component} from 'react';

export default class AddRest extends Component{

    render(){

        return( 
        <View style={styles.container}>

        <TouchableOpacity style={styles.button} onPress={this.onSignupPress}>
        <Text style={styles.buttonText}>Add Restaurant</Text> 
    </TouchableOpacity>
    </View>
        )
    }
}
