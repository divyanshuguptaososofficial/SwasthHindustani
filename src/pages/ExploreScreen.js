import React from "react";
import { 
  View,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
Button,
  TextInput
} from "react-native";



export default class Results extends React.Component{
 


    
    render(){

        return(
          <Button
      title="Go to details screen"
      color= '#000000'
      onPress={() => navigation.navigate("home")}
    />
        )
}
}
var styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'white',
    paddingBottom:5

  },
  flatList: {
    flex:1,
    paddingLeft:10,
    paddingRight:10
  },
  rating: {
    marginTop:5,
    flexDirection:'row'
  },
  button: {
    width:137,
    height:37,
    backgroundColor:'#F67018',
     borderRadius: 19,
    opacity:1,
    margin: 5
     
  },
  buttonText: {
    fontSize:16,
    width:78,
    height:21,
    margin:5,
    fontWeight:'bold',
    color:'#fff',
    alignSelf:"center",
    opacity:1
  },
  item: {
margin:10,
    paddingVertical:10,
    paddingHorizontal:10,
    borderRadius:12,
    shadowColor:"#2f2f2a",
    shadowOffset: { width: 5, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 1,  
    elevation: 5
  },
  filter:{
    marginTop:20,
    backgroundColor:"#F67018",
    height:70,
    width:"100%",
    flexDirection:"row"
  },

  section: {
    flexDirection:'row',
    alignItems:'center',
    paddingVertical:5,
    paddingHorizontal:10,
    width:339,
    backgroundColor:'#ECF3FD',
    marginLeft:30,
    marginRight:30,
  
  },
  inputBox: {
    width:250,
    marginTop:10,
marginBottom:10,
  marginLeft:10,
    
    backgroundColor:'#fff',
  
    fontSize:16,
    color:'#ffffff',
    
  },
});