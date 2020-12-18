import React, { Component ,useState,createRef } from 'react';

import axios from 'axios';
import {g_id} from  '../components/Form';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView, Keyboard
} from 'react-native';
import {   Paragraph,
  Checkbox,
  Colors,
  TouchableRipple,
  useTheme} from 'react-native-paper';
  import {g_pan,g_aadhaar,g_addone,g_addtwo,g_pincode} from  '../components/Form';
const OtherDetail = ({navigation}) => {

  const [userPanno, setUserPanno] = useState(g_pan);
  const [userAadharno, setUserAadharno] = useState(g_aadhaar);
  const [userAddone, setUserAddone] = useState(g_addone);
  const [userAddtwo, setUserAddtwo] = useState(g_addtwo);
  const [userPincode, setUserPincode] = useState(g_pincode.toString());
  
  
  
  
  const panInputRef = createRef();
  const aadharInputRef = createRef();
  const addoneInputRef = createRef();
  const addtwoInputRef = createRef();
  const pincodeInputRef = createRef();
 
Next = () =>{


  {
  
    //Alert.alert(userPanno + userAadharno + userAddone + userAddtwo + userPincode)
    
    axios.post(`http://192.168.29.71:8080/other`, { 
     id: g_id,
     panno : userPanno,
     aadhaarno:parseInt(userAadharno),
     address1:userAddone,
     address2:userAddtwo,
     pincode:parseInt(userPincode)
      
 })
 .then(res => {
 
 
 })
 Alert.alert("Saved!!")
  navigation.navigate("Upload Documents")

}
Back = () =>{
  navigation.navigate("Income Details")

}


}

	
		return(
      <View style={styles.container}>
      <ScrollView > 
			<View style={styles.container}>
             
           <TextInput style={styles.inputBox} 
             onChangeText={   (userPanno) => setUserPanno(userPanno ? userPanno :null)}
             underlineColorAndroid="#f000"
             placeholder="Enter PanCard number"
             placeholderTextColor="#8b9cb5"
             autoCapitalize="sentences"
             value = {userPanno}
             
             returnKeyType="next"
             onSubmitEditing={() =>
               aadharInputRef.current &&
               aadharInputRef.current.focus()
             }
             blurOnSubmit={false}
              />
       
       <TextInput style={styles.inputBox} 
              onChangeText={   (userAadharno) => setUserAadharno(userAadharno ? userAadharno :null)}
              underlineColorAndroid="#f000"
              placeholder="Enter Aadhar number"
              placeholderTextColor="#8b9cb5"
              autoCapitalize="sentences"
              value={userAadharno}
              
              returnKeyType="next"
              onSubmitEditing={() =>
                addoneInputRef.current &&
                addoneInputRef.current.focus()
              }
              blurOnSubmit={false}
              />
       
         <TextInput style={styles.inputBox} 
              onChangeText={   (userAddone) => setUserAddone(userAddone ? userAddone :null)}
              underlineColorAndroid="#f000"
              placeholder="Enter Current Address1"
              placeholderTextColor="#8b9cb5"
              autoCapitalize="sentences"
             value={userAddone}
              
              returnKeyType="next"
              onSubmitEditing={() =>
                addtwoInputRef.current &&
                addtwoInputRef.current.focus()
              }
              blurOnSubmit={false}
              />

<TextInput style={styles.inputBox} 
              onChangeText={   (userAddtwo) => setUserAddtwo(userAddtwo ? userAddtwo :null)}
              underlineColorAndroid="#f000"
              placeholder="Enter current Address"
              placeholderTextColor="#8b9cb5"
              autoCapitalize="sentences"
              value={userAddtwo}
              
              returnKeyType="next"
              onSubmitEditing={() =>
                pincodeInputRef.current &&
                pincodeInputRef.current.focus()
              }
              blurOnSubmit={false}
              />
<TextInput style={styles.inputBox} 
              onChangeText={   (userPincode) => setUserPincode(userPincode ? userPincode :null)}
              underlineColorAndroid="#f000"
              placeholder="Enter Pincode"
              placeholderTextColor="#8b9cb5"
              autoCapitalize="sentences"
              value={userPincode}
              keyboardType="number-pad"
              returnKeyType="next"
              onSubmitEditing={() =>
               Keyboard.dismiss()
              }
              blurOnSubmit={false}
              />
            
               <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="City"
              placeholderTextColor = "#ffffff"




























              
              selectionColor="#fff"
              keyboardType="default"
             // onChangeText = {handlecity}
              />
         
         <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="State"
              placeholderTextColor = "#ffffff"
              selectionColor="#fff"
              keyboardType="default"
             // onChangeText = {handlestate}
              />
<View style={styles.container2}>    
               <Checkbox 
    //  status={checked ? 'checked' : 'unchecked'}
    
      onPress={() => {
       // setChecked(!checked);
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
