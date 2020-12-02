import React from "react";
import { 
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  TextInput
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import LinearGradient from "react-native-linear-gradient";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import ChooseCategory from "../SearchComponents/ChooseCategory"

export default class Results extends React.Component{

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
              color:"#000",
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
                    value={this.state.search}
                    onChangeText={(text)=>this._search(text)}
                  />
                  <TouchableOpacity
                 
                  onPress={()=>this._search("")}
                  style={{paddingHorizontal:10}}> 
                  
    
                    <Ionicons 
                      name="ios-close"
                      color="gray"
                      size={20}
                    />
                  </TouchableOpacity>
               
    
              </View>
              </View>
              </ScrollView>
        )
}
}