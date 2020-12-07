import React, { Component ,useState,createRef } from 'react';
import DatePicker, { Keyboard } from 'react-native'
import axios from 'axios';
import {g_id,g_name,g_email,g_phone,g_age} from  '../components/Form';
//import Form from '../components/Form';
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
import { set } from 'react-native-reanimated';
var msg="";
const BasicInformation = ({navigation}) =>  {
  const [userName, setUserName] = useState(g_name);
  const [userEmail, setUserEmail] = useState(g_email);
  const [userAge, setUserAge] = useState(g_age.toString());
  const [userPhoneno, setUserPhoneno] = useState(g_phone.toString());
  
  const [
    isRegistraionSuccess,
    setIsRegistraionSuccess
  ] = useState(false);
  
    const [value, setValue] = React.useState('Male');
  const nameInputRef = createRef();
  const emailInputRef = createRef();
  const ageInputRef = createRef();
  const phoneInputRef = createRef();

 
 UpdateBasicInformation = () =>{
  
   
   const number = parseInt(userPhoneno);
   const  age = parseInt(userAge);
  // Alert.alert(age+" " + number);
  axios.post(`http://192.168.56.1:8080/basic`, { 

   id: g_id,
   name:userName,
   email:userEmail,
   number: number,
   age:age,
   gender: value

})
.then(res => {

 msg = res.data.result; 


//Actions.home()
})


Alert.alert("Basic information Saved!!");
navigation.navigate("Income Details");


   
  
  }



	
        
    
		return(
      <View style={styles.container}>
      <ScrollView>
        
			<View style={styles.container}>
                
           <TextInput style={styles.inputBox} 
              
              onChangeText={   (userName) => setUserName(userName ? userName :null)}
              underlineColorAndroid="#f000"
              placeholder="Enter Name"
              placeholderTextColor="#8b9cb5"
              autoCapitalize="sentences"
              value={userName}
              
              returnKeyType="next"
              onSubmitEditing={() =>
                emailInputRef.current &&
                emailInputRef.current.focus()
              }
              blurOnSubmit={false}
              />
       

         <TextInput style={styles.inputBox} 
             
             onChangeText={
               (userEmail) => setUserEmail(userEmail ? userEmail : null)
             }
             underlineColorAndroid="#f000"
             placeholder="Enter Email"
             value={userEmail}
             placeholderTextColor="#8b9cb5"
             keyboardType="email-address"
             ref={emailInputRef}
             returnKeyType="next"
             onSubmitEditing={Keyboard.dismiss
             }
             blurOnSubmit={false}
              />
              

               
<TextInput style={styles.inputBox} 


onChangeText={
  (userPhoneno) => setUserPhoneno(userPhoneno ? userPhoneno : null)
}
underlineColorAndroid="#f000"
placeholder="Enter PhoneNo."
value={userPhoneno}
placeholderTextColor="#8b9cb5"
keyboardType="number-pad"
ref={phoneInputRef}
returnKeyType="next"
onSubmitEditing={() =>
  ageInputRef.current &&
  ageInputRef.current.focus()
}
blurOnSubmit={false}
              />
          
               <TextInput style={styles.inputBox} 
             value = {userAge}
             onChangeText={
               (userAge) => setUserAge(userAge ? userAge : null)
             }
             underlineColorAndroid="#f000"
             placeholder="Enter Age"
             
             placeholderTextColor="#8b9cb5"
             keyboardType="number-pad"
             ref={ageInputRef}
             returnKeyType="next"
             onSubmitEditing={() =>
               ageInputRef.current &&
               ageInputRef.current.focus()
             }
             blurOnSubmit={false}
              />
         <View style={styles.parent}>
           
         <RadioButton.Group onValueChange={value => setValue(value)} value={value} >

      <RadioButton.Item label="Male" value="Male" />
      <RadioButton.Item label="Female" value="Female" />
      <RadioButton.Item label="Other" value="Other" />
       
    </RadioButton.Group>
    </View>
       
    <TouchableOpacity title ={"Basic Information"} 
            style={styles.button}   onPress={UpdateBasicInformation}>
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
