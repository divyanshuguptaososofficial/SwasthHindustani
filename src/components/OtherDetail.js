import React, { Component ,useState } from 'react';

import axios from 'axios';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert
} from 'react-native';
import {   Paragraph,
  Checkbox,
  Colors,
  TouchableRipple,
  useTheme} from 'react-native-paper';
const OtherDetail = () => {
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

 
 InsertStudentRecordsToServer = () =>{
  axios.post(`http://192.168.29.71:8080/users`, { 

         fname: this.state.fname,       
         lname: this.state.lname,
         email: this.state.email,
         password: this.state.password,
         dob: this.state.dob,
         number: this.state.phoneno


})
  .then(res => {
  
    Alert.alert("Thank you for registering!!!");
  })

};

	
		return(
      
			<View style={styles.container}>
                
           <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Pan Card Number"
              placeholderTextColor = "#ffffff"
              selectionColor="#fff"
              keyboardType="name-phone-pad"
              onChangeText = {handlepancardno}
              />
       
       <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Aadhar Card Number"
              placeholderTextColor = "#ffffff"
              selectionColor="#fff"
              keyboardType="number-pad"
              onChangeText = {handleaadharcardno}
              />
       
         <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Current Address (line 1)"
              placeholderTextColor = "#ffffff"
              selectionColor="#fff"
              keyboardType="default"
              onSubmitEditing={()=> this.password.focus()}
              onChangeText = {handleaddress1}
              />

<TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Current Address (line 2)"
              placeholderTextColor = "#ffffff"
              selectionColor="#fff"
              keyboardType="default"
              onSubmitEditing={()=> this.password.focus()}
              onChangeText = {handleaddress2}
              />
<TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Pincode"
              placeholderTextColor = "#ffffff"
              selectionColor="#fff"
              keyboardType="number-pad"
              onChangeText = {handlepincode}
              />
            
               <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="City"
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
               style={styles.button}   onPress={InsertStudentRecordsToServer}              >
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
 
  export default OtherDetail;