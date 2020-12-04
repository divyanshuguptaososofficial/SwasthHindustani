import React from "react";
import { 
  View,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,

  TextInput
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

        },
        {
            disease:'Diabetes Center 2',
            name:'Hospital 2',
            Distance:"Distance : 10 KM",

            rating: 5,
            price: "Closed 9am-11pm",
            cost:"Approximate Cost Rs 5000",

        },
        {
          disease:"Diabetes Center 3",
          Distance:"Distance : 15 KM",

            name:'Hospital 3',
            rating: 4,
            price: "Closed 9am-11pm",
            cost:"Approximate Cost Rs 15000",

        },
        {
          disease:"Diabetes Center 4",
          Distance:" Distance : 20 KM",

            name:'Hospital 4',
            rating: 2,
            price: "Closed 9am-11pm",
            cost:"Approximate Cost Rs 2000",

        },
        {
          disease:"Diabetes Center 5",
          Distance:" Distance : 25 KM",

            name:'Hospital 5',
            cost:"Approximate Cost Rs 25000",
            rating: 5,
            price: "Open 9am-11pm"
        },
];
  


export default class Results extends React.Component{
  state = {
    
    search: 'Nearest First',
    
 }
 Hospital() {
  Actions.Hospital()//signup button function for navigating to signup page
}
 constructor(props){
  super(props);
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


renderItem = ({item}) => {
  return(
    
    <LinearGradient 
    colors={['#fff', '#fff']}
    start={{x:0, y:1}} end={{x:1, y:0}}
    style={styles.item}
    
    >
                <List.Section style={{color:"#fff"}}>
  <List.Accordion
    title={item.disease}
    
    description={item.name}                                           
  
    titleStyle={{color:"#8D8989",fontWeight:"bold",fontSize:18}}
    descriptionStyle={{color:"#2F2F2A",fontWeight:"bold",fontSize:15}}
    
    >
  <View style={{marginLeft:10}}>
  <Text style={{color:"#138808",fontWeight:"bold",fontSize:15}}> {item.cost}</Text>

  <Text style={{color:"#F67018",fontWeight:"bold",fontSize:15}}> {item.price}</Text>
  <View style={styles.rating}>
            {this._rating(item.rating)}
          </View>
          <Text style={{color:"#138808",fontWeight:"bold",fontSize:15}}> {item.Distance}</Text>
          </View>
    
   <View style={{flexDirection:"row",marginLeft:30}}>
   <TouchableOpacity style={styles.button} onPress={this.Hospital} ><Text style={styles.buttonText}>Book Now</Text></TouchableOpacity>
   <TouchableOpacity style={styles.button} onPress={this.Hospital} ><Text style={styles.buttonText}>View All</Text></TouchableOpacity>

   

   </View>
  </List.Accordion>


  </List.Section>


      </LinearGradient>


  )
}

    render(){

        return(
          <ScrollView>
          <View style={styles.container}>
            <Text style={{
              paddingTop:15,
              paddingLeft:15,
              paddingBottom:15,
              fontWeight:"bold",
              fontSize:25,
              marginLeft:20,
              color:"#2F2F2A",
              
              alignItems:"center"
          }} >Services For You</Text>
              <View style={styles.section}>
              <Ionicons 
                  name="ios-search"
                  color="gray"
                  size={20}/>
                  <TextInput 
                 
                    placeholder="Search.."
                    style={{ flex:1,marginTop:5}}
                    
                  />
                  <TouchableOpacity
                 
                  
                  style={{paddingHorizontal:10}}> 
                  
    
                    <Ionicons 
                      name="ios-close"
                      color="gray"
                      size={20}
                    />
                  </TouchableOpacity>
               
    
              </View>
              <View style={styles.filter}>
              <Ionicons 
              style={{margin:20}}
                      name="ios-map"
                      color="white"
                      size={30}
                      md="md-map"
                    />
                    
              <View style={styles.inputBox}>
              
            <Picker
  selectedValue={this.state.search}
  style={{color: '#000',alignContent:"center",flexDirection:"row"}}
 
  onValueChange={(itemValue, itemIndex) =>
    this.setState({language: itemValue})
    
  }>
    
  <Picker.Item   label="Nearest First" value="sm" />
  <Picker.Item label="Less" value="hr" />
  <Picker.Item label="High" value="mo" />

 

</Picker>



</View>
<View style={{width:60,height:50,marginTop: 10,marginBottom:10,backgroundColor:"#fff"}}>
<Ionicons 
              style={{margin:15}}
                      name="ios-funnel"
                      color="black"
                      size={20}
                    />
                    </View>
              </View>

              <View style={styles.flatList}>
              <FlatList 
                data={this.state.data}
                renderItem={this.renderItem}
                keyExtractor={(item, index)=>index.toString()}
                ItemSeparatorComponent={this.ItemSeparatorComponent}
                showsVerticalScrollIndicator={false}
              />
          </View>
      
   
        
              </View>
              </ScrollView>
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