import React, { Component ,useState } from 'react';

import axios from 'axios';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Animated,
  TouchableOpacity,

  Alert
} from 'react-native';
import {   Paragraph,
  Checkbox,
  Colors,
  TouchableRipple,
  useTheme} from 'react-native-paper';
   

const IncomeDetails = () => {
  state = {
    pancardno: '',
    aadharcardno: '',
    address1: '',
    address2: '',
    pincode: '',
    city: '',
    state: ''
 }
 
 handlepancardno = (text) => {
    this.setState({ pancardno: text })
 }

 handleaadharcardno = (text) => {
    this.setState({ aadharcardno: text })
 }
 handleaddress1 = (text) => {
  this.setState({ address1: text })
}
handleaddress2 = (text) => {
  this.setState({ address1: text })
}
handlepincode = (text) => {
    this.setState({ pincode: text })
  }
handlecity = (text) => {
  this.setState({ city: text })
}
handlestate = (text) => {
  this.setState({ state: text })
}

	
		return(
      
			<View style={styles.container}>
                
               
           
           <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Choose a Company"
              placeholderTextColor = "#ffffff"
              selectionColor="#fff"
              keyboardType="name-phone-pad"
              onChangeText = {handlepancardno}
              />
    
       
         <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Designation"
              placeholderTextColor = "#ffffff"
              selectionColor="#fff"
              keyboardType="default"
              onSubmitEditing={()=> this.password.focus()}
              onChangeText = {handleaddress1}
              />


<TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Net Monthly Salary (in hand)"
              placeholderTextColor = "#ffffff"
              selectionColor="#fff"
              keyboardType="number-pad"
              onChangeText = {handlepincode}
              />
            
               <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Salary Mode"
              placeholderTextColor = "#ffffff"
              selectionColor="#fff"
              keyboardType="default"
              onChangeText = {handlecity}
              />
         
         <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="State"
              placeholderTextColor = "#ffffff"
              selectionColor="#fff"
              keyboardType="default"
              onChangeText = {handlestate}
              />

     

   
               
           <TouchableOpacity title ={"Other Details"} 
               style={styles.button}               >
             <Text style={styles.buttonText}>Submit</Text>
           </TouchableOpacity>     
  		</View>
      
			)
	}
styles = StyleSheet.create({
    container : {
    
      flexGrow: 1,
      justifyContent:'center',
      alignItems: 'center'
    },
    color1:{
      color:'#ffffff'
    }
   ,
  
   parent: {
     
    
    flexDirection: 'row',
    borderRadius: 10,
    paddingVertical: 13,
    justifyContent: 'space-around'
  },
  parentLeftbutton: {
    marginRight: 20, 
    marginLeft: 15, 

    width:200,
    backgroundColor:'#1c313a',

      paddingVertical: 13
  },

  parentRightbutton: {
    marginLeft: 20, 
    marginRight: 30 , 

    width:200,
    backgroundColor:'#1c313a',

      paddingVertical: 13
  }
  ,
    inputBox: {
      width:300,
      backgroundColor:'rgba(255, 255,255,0.2)',
      borderRadius: 25,
      paddingHorizontal:16,
      fontSize:16,
      color:'#ffffff',
      marginVertical: 10
    },
    button: {
      width:300,
      backgroundColor:'#1c313a',
       borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 13
    },
    buttonText: {
      fontSize:16,
      fontWeight:'500',
      color:'#ffffff',
      textAlign:'center'
    }
    
  });
 
  export default IncomeDetails;