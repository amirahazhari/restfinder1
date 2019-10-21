import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Slider,
  Dimensions
  
} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import {OffCanvas3D} from 'react-native-off-canvas-menu';




export default class Display extends Component
{

    /*constructor(props) {
        super(props);
        this.state={
          username:"",
          email:"",
          password:""
        }}*/
        constructor(props){
        this.state = {
          menuOpen: false
        }
      }

        state = {

          slideValue : 0
        }

        handleMenu() {
          const {menuOpen} = this.state
          this.setState({
            menuOpen: !menuOpen
          })
        }

        render() {

        const width = Dimensions.get('window').width;
        const sliderStyle = {
            sliderDummy: {
                backgroundColor: '#d3d3d3',
                width: 300,
                height:30,
                borderRadius: 50,
                position: 'absolute',                
            },
            sliderReal: {
                backgroundColor: '#8eacbb',
                width: (this.state.slideValue/50) * 300,
                height:30,
            }
        }

            return(   

           

            <View style={styles.container}>
                 <View style={{flex: 1}}>
              <OffCanvas3D
              active={this.state.menuOpen}
              onMenuPress={this.handleMenu.bind(this)}
              backgroundColor={'#222222'}
              menuTextStyles={{color: 'white'}}
              handleBackPress={true}
              menuItems={[
                {
                  title: 'Menu 1',
                  icon: <Icon name="camera" size={35} color='#ffffff' />,
                  renderScene: <MyScene/>
                },
                {
                  title: 'Menu 2',
                  icon: <Icon name="bell" size={35} color='#ffffff' />,
                  renderScene: <AnotherScene/>
                }
              ]}/>
            </View>

                <Text style = {styles.TextComponentStyle}> { this.props.navigation.state.params.Username}</Text>
                <Text style = {{fontSize:20, fontWeight:'bold', color:'rgba(255,255,255,0.7)'}}>{this.state.slideValue}</Text>
                <View style={{borderRadius: 50, overflow: 'hidden'}}>       
                <View style={{flexDirection: 'row', position: 'absolute'}}>
                <View style={sliderStyle.sliderDummy}></View>
                <View style={sliderStyle.sliderReal}></View>
            </View>
            <Slider 
                style={{width: 300, height: 30, borderRadius: 50,justifyContent:'flex-start'}}
                step={1}
                minimumValue={0}
                maximumValue={50}
                value={this.state.slideValue}
                onValueChange={(value)=> this.setState({ slideValue: value}) }
                maximumTrackTintColor='transparent'  
                minimumTrackTintColor='transparent'
                />  

            </View>

            </View>

            )

            
        }

};

/*const mapDispatchToProps = {

};

const mapStateToProps = (state) => {
    return{

    }
};*/

const styles = StyleSheet.create ({
    container : {
      backgroundColor:'#880e4f',
      flex:1,
      alignItems:'center',
      //flexDirection: 'column',
      justifyContent:'center',
      
    },
    usernameLabel: {
        fontSize: 20,
        marginHorizontal: 20, 
        color: '#000',
        fontWeight: 'bold',
      },
      

});
//export default connect(mapStateToProps, mapDispatchToProps);
