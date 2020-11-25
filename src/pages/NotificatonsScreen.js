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
import LinearGradient from "react-native-linear-gradient";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import ChooseCategory from "../SearchComponents/ChooseCategory"
var data = [
  {
            name:'Hospital 1',
            image: require("../assets/images/star.png"),
            rating: 3,
            price: "Distance: 2 km"
        },
        {
            name:'Hospital 2',
            image: require("../assets/images/star.png"),
            rating: 5,
            price: "Distance: 3 km"
        },
        {
            name:'Hospital 3',
            image: require("../assets/images/star.png"),
            rating: 4,
            price: "Distance: 4 km"
        },
        {
            name:'Hospital 4',
            image: require("../assets/images/star.png"),
            rating: 2,
            price: "Distance: 5 km"
        },
        {
            name:'Hospital 5',
            image: require("../assets/images/star.png"),
            rating: 5,
            price: "Distance: 6 km"
        },
];

export default class All extends React.Component{
  constructor(props){
    super(props);
    this.state={
      data: data,
      data_temp: data,
      search: ''
    }
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
        colors={['#000', '#000']}
        start={{x:0, y:1}} end={{x:1, y:0}}
        style={styles.item}
        >
           
         
        

 
          <View style={styles.image_container}>
              <Image 
                source={item.image}
                style={styles.image}
              />
          </View>
          <View style={styles.content}>
              <Text style={styles.name}>{item.name}</Text>
              <View style={styles.rating}>
                {this._rating(item.rating)}
              </View>
              <View style={styles.price_container}>
                  <View style={styles.price}>
                      <Text style={styles.textPrice}>{item.price}</Text>
                  </View>
              </View>
          </View>
          <TouchableOpacity 
          onPress={()=>this.props.props.navigation.navigate("DetailScreen",{
            image: item.image,
            price: item.price,
            name: item.name
          })}
          style={styles.button}>
              <AntDesign 
                name="arrowright"
                color="black"
                size={15}
              />
          </TouchableOpacity>

        </LinearGradient>
        
    )
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

  _search(text){
      let data = [];
      this.state.data_temp.map(function(value){
        if(value.name.indexOf(text) > -1){
          data.push(value);
        }
      });
      this.setState({
        data:data,
        search:text
      });
  }

  render(){
    return(
      <View style={styles.container}>
          <View style={styles.section}>
              <TextInput 
                placeholder="Search.."
                style={{ flex:1, marginLeft:10}}
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
          
         <ChooseCategory/>
         <View style={{width:"50%"}}>
      <Text style={{
          fontWeight:"bold",
          fontSize:17,
          color:"#000"
      }}>Top Rated Hospitals</Text>
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
    marginTop:10
  },
  item: {
    flex:1,
    paddingVertical:10,
    paddingHorizontal:10,
    flexDirection:'row',
    borderRadius:10
  },
  image_container: {
    width: 90,
    height: 90
  },
  image: {
    width:'100%',
    height:'100%',
    borderWidth:5,
    borderColor:'white',
    borderRadius:10
  },
  content: {
    flex:1,
    justifyContent:'center',
    paddingHorizontal:10
  },
  name: {
    color:'white',
    fontWeight:'bold',
    fontSize:18
  },
  rating: {
    marginTop:5,
    flexDirection:'row'
  },
  button: {
    width:30,
    height:30,
    backgroundColor:'white',
    borderRadius:15,
    justifyContent:'center',
    alignItems:'center'
  },
  price_container: {
    flexDirection:'row',
    marginTop:10
  },
  price: {
    backgroundColor:'white',
    paddingVertical:5,
    paddingHorizontal:15,
    borderRadius:50
  },
  textPrice: {
    color:'green',
    fontWeight:'bold'
  },
  section: {
    flexDirection:'row',
    alignItems:'center',
    paddingVertical:5,
    paddingHorizontal:10,
    borderRadius:100,
    backgroundColor:'#f2f2f2',
    marginTop:10
  }
});
