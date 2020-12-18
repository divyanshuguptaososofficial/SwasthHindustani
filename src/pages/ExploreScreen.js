import React from "react";
import axios from 'axios';
import {g_id,g_name,g_email,g_phone,g_age} from  '../components/Form';
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
 
  TextInput, Alert
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import LinearGradient from "react-native-linear-gradient";
import Ionicons from "react-native-vector-icons/Ionicons";
import {Picker} from '@react-native-community/picker';
import { List , Button ,Text} from 'react-native-paper';
import Hospital from "./SelectedHospital";
import {Actions} from 'react-native-router-flux';



var data = [
  {
    
            disease:"Diabetes Center",
            name:'Hospital 1',
            rating: 3,
            price: "Open 9am-11pm",
            cost:"Approximate Cost Rs 2000",
            Distance:"Distance : 5 KM"

        }
        
];
  


export default class Results extends React.Component{
  state = {
    
    search: 'Nearest First',
    
 }
 Hospital() {

if(g_id ==  '')
{
  Alert.alert("Please Login to Continue")
  //Navigate to Login Page
 
}
else
  Actions.Hospital()//signup button function for navigating to signup page
}


setData()
{
 
  axios.get(`http://192.168.56.1:8080/search`, { 

   

})
.then(res => {

  
//Alert.alert(res.data.Data[0].hs_name +" " +  res.data.Data.length  + " " +res.data.Data[0].services.length)

for(let i = 0;i<res.data.Data.length;i++)
{
  
for(let j= 0;j<res.data.Data[i].services.length;j++)
{
  let temp =
  {
     
          
        disease: res.data.Data[i].services[j].sv_name.toUpperCase(),
         Distance:" Distance : 25 KM",
  
      name: res.data.Data[i].hs_name,
      cost:"Approximate Cost Rs 25000",
      rating: 5,
      price: "Open 9am-11pm"
  
  }
  
  data.push(temp);
  
       
  }
}
data.shift()

  







})


}
 constructor(props){
  super(props);

  this.setData()
   
  this.state={
    data: data,
    data_temp: data,
    search: ''

  }
}
ItemSeparatorComponent = () => {
  return(
    <View 
      style={{
        height:10
      }}
    />
  )
}

_search(){
 // navigate("Explore");
}
 _rating(item){
  let rating = [];
  for(i=0;i<item;i++){
    rating.push(
      <Image 
        source={require("../assets/images/star.png")}
        style={{width:15, height:15, marginRight:3}}
        resizeMode="cover"
      />
    )
  }
  return rating;
}

    
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