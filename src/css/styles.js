import { Platform, Dimensions } from 'react-native';

export default {

    container : {
        backgroundColor:'#227494',
        flex:1,
        alignItems:'center',
        //flexDirection: 'column',
        justifyContent:'center',
        
      },
        signupTextCont:{
            //flexGrow:1,
            alignItems:'flex-end',
            justifyContent:'center',
            paddingVertical:16,
            flexDirection: 'row'
    
        },
        
        signupText:{
            color:'rgba(255,255,255,0.7)',
            fontSize:16
        },
    
        signupButton:{
          color:'#ffffff',
          fontSize:16,
          fontWeight:'bold'
        },
        inputBox: {
          width:300,
          backgroundColor:'rgba(255,255,255,0.3)',
          borderRadius:25,
          paddingHorizontal:16,
          fontSize:16,
          color:'#ffffff',
          marginVertical:10
          
      },
    
    button:{
        width:300,
        backgroundColor:'#cedeeb',
        borderRadius:25,
        marginVertical:10,
        paddingVertical:12
    },
    
    buttonText: {
        fontSize:16,
        fontWeight:'bold',
        color:'#000000',
        textAlign:'center'
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
    deatilSection: {
      flex: 1,
      backgroundColor: "#fff",
      padding: 10,
      display: "flex",
      justifyContent: "flex-start"
    },





}