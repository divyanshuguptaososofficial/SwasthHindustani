import React, { useState } from 'react';
import { Checkbox } from 'react-native-paper';
import axios from 'axios';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView
  
} from 'react-native';
import {Picker} from '@react-native-community/picker';
import Slider from '@react-native-community/slider';

   

const IncomeDetails = () => {

  const [sliderValue, setSliderValue] = useState(15);
  

  const [checked, setChecked] = React.useState(false);

  state = {
    pancardno: '',
    aadharcardno: '',
    address1: '',
    address2: '',
    pincode: '',
    city: '',
    language: 'Salary Mode',
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
      <ScrollView>
			<View style={styles.container}>
                
               
           
           <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Choose a Company"
              placeholderTextColor = "#ffffff"
              selectionColor="#fff"
              keyboardType="name-phone-pad"
              onChangeText = {handlepancardno}
              />
              <View style={styles.container2}>    
               <Checkbox 
      status={checked ? 'checked' : 'unchecked'}
    
      onPress={() => {
        setChecked(!checked);
      }}
    />
    <Text style={{color: 'white'}}>Other,if not in above list</Text>
    </View>

       
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
            
            <View style={styles.inputBox}>
            <Picker
  selectedValue={this.state.language}
  style={{color: '#fff'}}
  onValueChange={(itemValue, itemIndex) =>
    this.setState({language: itemValue})
  }>
  <Picker.Item   label="Salary Mode" value="sm" />
  <Picker.Item label="Hourly" value="hr" />
  <Picker.Item label="Monthly" value="mo" />
  <Picker.Item label="Salary" value="sa" />

</Picker>
</View>

              
         
        
<View style={styles.container2}>
        {/*Text to show slider value*/}
        <Text style={{color: 'white'}}>
         Total Work Experience (in Months)* : {sliderValue}
        </Text>

        {/*Slider with max, min, step and initial value*/}
        <Slider 
          maximumValue={1000}
          minimumValue={0}
          minimumTrackTintColor="#307ecc"
          maximumTrackTintColor="#000000"
          step={1}
          value={sliderValue}
          onValueChange={
            (sliderValue) => setSliderValue(sliderValue)
          }
        />
    </View>
     

   
               
           <TouchableOpacity title ={"Other Details"} 
               style={styles.button}               >
             <Text style={styles.buttonText}>Submit</Text>
           </TouchableOpacity>     
  		</View>
      </ScrollView>
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
   container2: {
    width:300,
      borderRadius: 25,
      paddingHorizontal:16,
      fontSize:16,
      color:'#ffffff',
      marginVertical: 10
  },
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