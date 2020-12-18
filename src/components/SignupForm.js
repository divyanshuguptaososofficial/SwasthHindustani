import React, { Component } from 'react';
import DatePicker from 'react-native'
import axios from 'axios';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert
} from 'react-native';

export default class SignupForm extends Component {
  state = {
    email: '',
    password: '',
    fname: '',
    lname: '',
    phoneno: '',
    dob: '',
    pin: ''

 }
 handleEmail = (text) => {
    this.setState({ email: text })
 }
 handlePassword = (text) => {
    this.setState({ password: text })
 }
 handleFirstName = (text) => {
  this.setState({ fname: text })
}
handleLastName = (text) => {
  this.setState({ lname: text })
}
handlePhoneno = (text) => {
  this.setState({ phoneno: text })
}
handleDob = (text) => {
  this.setState({ dob: text })
}
handlePin = (text) =>
{
  this.setState({pin:text})
}

 
 InsertStudentRecordsToServer = () =>{
  axios.post(`http://192.168.29.71:8080/register`, { 

         fname: this.state.fname,       
         lname: this.state.lname,
         email: this.state.email,
         password: this.state.password,
         dob: this.state.dob,
         number: this.state.phonene,
         pin: this.state.pin


})
  .then(res => {
     
    
   
    Alert.alert("Thank you for registering!!!");
   
  })

}

	render(){
    this.saveData
		return(
      
			<View style={styles.container}>
         <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Email"
              placeholderTextColor = "#ffffff"
              selectionColor="#fff"
              keyboardType="email-address"
              onSubmitEditing={()=> this.password.focus()}
              onChangeText = {this.handleEmail}
              />
          <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Password"
              secureTextEntry={true}
              placeholderTextColor = "#ffffff"
              ref={(input) => this.password = input}
              onChangeText= {this.handlePassword}
              />  
                  <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="First Name"
              placeholderTextColor = "#ffffff"
              selectionColor="#fff"
              keyboardType="default"
              onChangeText = {this.handleFirstName}
              />
               <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Last Name"
              placeholderTextColor = "#ffffff"
              selectionColor="#fff"
              keyboardType="default"
              onChangeText = {this.handleLastName}
              />
            
               <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="DOB"
              placeholderTextColor = "#ffffff"
              selectionColor="#fff"
              keyboardType="phone-pad"
              onChangeText = {this.handleDob}
              />
              <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Phone Number"
              placeholderTextColor = "#ffffff"
              selectionColor="#fff"
              keyboardType="number-pad"
              onChangeText = {this.handlePhoneno}
              />
              
         
              <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="PinCode"
              placeholderTextColor = "#ffffff"
              selectionColor="#fff"
              keyboardType="number-pad"
              onChangeText = {this.handlePin}
              />
               
           <TouchableOpacity title ={"Signup"} 
               style={styles.button}   onPress={this.InsertStudentRecordsToServer}              >
             <Text style={styles.buttonText}>{this.props.type}</Text>
           </TouchableOpacity>     
  		</View>
			)
	}
}

 styles = StyleSheet.create({
  container : {
    flexGrow: 1,
    justifyContent:'center',
    alignItems: 'center'
  },

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
