import React, { Component ,useState } from 'react';
import DatePicker from 'react-native'
import axios from 'axios';
import { useTheme } from '@react-navigation/native';

import {
  StyleSheet,
  View,
  TextInput,
  CheckBox,
  TouchableOpacity,
  Alert,
  ScrollView
} from 'react-native';
import { RadioButton,Text} from 'react-native-paper';
import Feather from 'react-native-vector-icons/Feather';
const BasicInformation = ({navigation}) =>  {
  const [value, setValue] = React.useState('Male');
  const {colors} = useTheme();

  state = {
    email: '',
    password: '',
    fname: '',
    lname: '',
    phoneno: '',
    dob: ''
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

 
 InsertStudentRecordsToServer = () =>{
    navigation.navigate("Income Details");
  
  }



	
        
    
		return(
      <View style={styles.container}>
      <ScrollView>
        
			<View style={styles.container}>
                
           <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Name"
              placeholderTextColor = "#ffffff"
              selectionColor="#fff"
              keyboardType="default"
              onChangeText = {handleFirstName}
              />
       

         <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Email"
              placeholderTextColor = "#ffffff"
              selectionColor="#fff"
              keyboardType="email-address"
              onSubmitEditing={()=> this.password.focus()}
              onChangeText = {handleEmail}
              />
              

               
<TextInput style={styles.inputBox} 

              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Phone Number"
              placeholderTextColor = "#ffffff"
              selectionColor="#fff"
              keyboardType="number-pad"
              onChangeText = {handlePhoneno}
              />
          
               <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="DOB"
              placeholderTextColor = "#ffffff"
              selectionColor="#fff"
              keyboardType="phone-pad"
              onChangeText = {handleDob}
              />
         <View style={styles.parent}>
           
         <RadioButton.Group onValueChange={value => setValue(value)} value={value} >

      <RadioButton.Item label="Male" value="Male" />
      <RadioButton.Item label="Female" value="Female" />
      <RadioButton.Item label="Other" value="Other" />

    </RadioButton.Group>
    </View>
       
    <TouchableOpacity title ={"Basic Information"} 
            style={styles.button}   onPress={InsertStudentRecordsToServer}              >
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
               
        
  		</View>
      
        
      </ScrollView>
     
      </View>
     
			);
	};


 styles = StyleSheet.create({
  container : {
    backgroundColor:'#455a64',
  
    flex: 1,
    justifyContent:'center',
    alignItems: 'center'
  },
  parent: {
     
    
    flexDirection: 'row',
    borderRadius: 10,
    paddingVertical: 13,
    justifyContent: 'space-around'
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


export default BasicInformation;