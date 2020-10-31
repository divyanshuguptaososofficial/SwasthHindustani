import React from 'react';
import { View, Text,Button, StyleSheet, StatusBar,TouchableOpacity } from 'react-native';
import { useTheme } from '@react-navigation/native';
import BasicInformation from '../components/BasicInformation';
const BasicInformationScreen = ({navigation}) => {

  const { colors } = useTheme();

  const theme = useTheme();

    return (
      <View style={styles.container}>
        <BasicInformation type="Submit"/>
        <TouchableOpacity title ={"Basic Information"} 
               style={styles.button}  onPress={() => navigation.navigate("Income Details")}           >
             <Text style={styles.buttonText}>Next</Text>
           </TouchableOpacity>    
         
        <Text style={{color: colors.text}}>Basic Information Screen</Text>
     
      </View>
    );
};

export default BasicInformationScreen;

const styles = StyleSheet.create({
  container : {
    backgroundColor:'#455a64',
    flex: 1,
    alignItems:'center',
    justifyContent :'center'
  },
  signupTextCont : {
  	flexGrow: 1,
    alignItems:'flex-end',
    justifyContent :'center',
    paddingVertical:16,
    flexDirection:'row'
  },
  signupText: {
  	color:'rgba(255,255,255,0.6)',
  	fontSize:16
  },
  signupButton: {
  	color:'#ffffff',
  	fontSize:16,
  	fontWeight:'500'
  }
  ,  
  button: {
    width:300,
    backgroundColor:'#1c313a',
     borderRadius: 25,
      marginVertical: 10,
      paddingVertical: 13
  }
  , buttonText: {
    fontSize:16,
    fontWeight:'500',
    color:'#ffffff',
    textAlign:'center'
  }
});
