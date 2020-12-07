import React from "react";
import { 
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  TextInput,
  Button
} from "react-native";
import {Actions} from 'react-native-router-flux';




export default class All extends React.Component{
  
  All() {
    Actions.All()//signup button function for navigating to signup page
  }
  



  render(){
    return(
      <Button
      title="Go to details screen"
      color= '#000000'
      onPress={() => navigation.navigate("Explore")}
    />
      
    )
  }
}

var styles = StyleSheet.create({
  
});
