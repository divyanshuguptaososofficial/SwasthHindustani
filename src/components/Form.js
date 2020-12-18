import React, { Component } from 'react';
import axios from 'axios';


import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert 
} from 'react-native';
var g_id="";
var g_name="";
var g_email="";
var g_phone  ="";
var g_age= "";
var g_addone="";
var g_addtwo="";
var g_pincode="";
var g_pan="";
var g_aadhaar="";
import {Actions} from 'react-native-router-flux';

export default class Login extends Component {
  state = {
    email: '',
    password: ''
    
 }
 handleEmail = (text) => {
    this.setState({ email: text })
   
 }


 handlePassword = (text) => {
    this.setState({ password: text })
 }

 
  home(){
    axios.post(`http://192.168.29.71:8080/login`, { 

      email: this.state.email,
      password: this.state.password

})
.then(res => {
 

  g_id = res.data.id;
  g_name = res.data.name;
  g_email = res.data.email;
  g_phone = res.data.phone;
  g_age =    res.data.dob;
  g_pan=     res.data.pan;
  g_aadhaar= res.data.aadhaar;
  g_addone = res.data.addone;
  g_addtwo = res.data.addtwo;
  g_pincode=res.data.pincode;

 Alert.alert("WELCOME " + g_name);
 Actions.home()
})
    
  }

	render(){
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
           <TouchableOpacity  title={"Login"}  onPress = {
                  () => this.home()
               } 
                style={styles.button}>
             <Text style={styles.buttonText}>{this.props.type}</Text>
           </TouchableOpacity>     
  		</View>
			)
	}
}
export { g_id, g_name,g_email, g_phone,g_age, g_pincode,g_pan,g_aadhaar,g_addone,g_addtwo};

const styles = StyleSheet.create({
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

