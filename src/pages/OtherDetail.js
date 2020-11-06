import React, { Component ,useState } from 'react';

import axios from 'axios';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView
} from 'react-native';
import {   Paragraph,
  Checkbox,
  Colors,
  TouchableRipple,
  useTheme} from 'react-native-paper';
const OtherDetail = ({navigation}) => {

  const [checked, setChecked] = React.useState(false);
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

 
Next = () =>{
  navigation.navigate("Upload Documents")

}
Back = () =>{
  navigation.navigate("Income Details")

}




	
		return(
      <View style={styles.container}>
      <ScrollView > 
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
<View style={styles.container2}>    
               <Checkbox 
      status={checked ? 'checked' : 'unchecked'}
    
      onPress={() => {
        setChecked(!checked);
      }}
    />
    <Text style={{color: 'white'}}>Is your permanent address same as current address</Text>
    </View>
     
 
          
   
               
    <View style={styles.parent}>   
           <TouchableOpacity title ={"Other Details"} 
               style={styles.button}  onPress={Next}         >
             <Text style={styles.buttonText}>Next</Text>
           </TouchableOpacity>    
           <TouchableOpacity style={styles.button} onPress={Back}>
          <Text style={styles.buttonText}>Back</Text>
           </TouchableOpacity>
  		</View>
           
  		</View>
      </ScrollView>   
       </View>
			)
	}
styles = StyleSheet.create({
    container : {
      backgroundColor:'#455a64',
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
   container2: {
    width:300,
      borderRadius: 25,
      paddingHorizontal:16,
      fontSize:16,
      color:'#ffffff',
      marginVertical: 10
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
      width:100,
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