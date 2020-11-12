import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar ,TouchableOpacity,Image, ImageBackground} from 'react-native';
import { useTheme } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {dummyData} from './DummyData'
import Carousel from '../components/Carousel';
import {TextInput,ScrollView} from 'react-native-gesture-handler';
const HomeScreen = ({navigation}) => {

  const { colors } = useTheme();

  const theme = useTheme();
  
    return (
      <ScrollView 
      vertical
      showsVerticalScrollIndicator={true}
      style={{height:400}}
  >
      <View style={styles.container}>
        <View style={styles.categoryContainer}>
        <TouchableOpacity
          style={styles.categoryBtn}
          onPress={() =>
            navigation.navigate('CardListScreen', {title: 'Book an Appointment'})
          }>
          <View style={styles.categoryIcon}>
            <Ionicons name="ios-calendar" size={35} color="#FFF" />
          </View>
          <Text style={styles.categoryBtnTxt}>Book an Appointment</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.categoryBtn}
          onPress={() =>
            navigation.navigate('CardListScreen', {title: ' Order Medicines'})
          }>
          <View style={styles.categoryIcon}>
          <Ionicons name="ios-medkit" size={35} color="#FFF" />

          </View>
          <Text style={styles.categoryBtnTxt}>Order Medicines</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.categoryBtn}
          onPress={() =>
            navigation.navigate('CardListScreen', {title: ' Order Medicines'})
          }>
          <View style={styles.categoryIcon}>
          <Ionicons name="ios-videocam" size={35} color="#FFF" />

          </View>
          <Text style={styles.categoryBtnTxt}>Virtual Consultation</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.categoryBtn}
          onPress={() =>
            navigation.navigate('CardListScreen', {title: ' Order Medicines'})
          }>
          <View style={styles.categoryIcon}>
          <Ionicons name="ios-flask" size={35} color="#FFF" />

          </View>
          <Text style={styles.categoryBtnTxt}>Book Blood Test</Text>
        </TouchableOpacity>
    
       
      </View>
     
      <Carousel data = {dummyData}></Carousel>

      <View style={{
                   flexDirection:"row",
                   paddingHorizontal:20,
                   width:"100%",
                   alignItems:"center"
               }}>
                   <View style={{width:"50%"}}>
                        <Text style={{
                            fontWeight:"bold",
                            fontSize:17,
                            color:"#000"
                        }}>Government Schemes</Text>
                       

                   </View>
                   <View style={{width:"50%", alignItems:"flex-end"}}>
                        <View style={{
                            backgroundColor:"#000",
                            paddingHorizontal:20,
                            paddingVertical:5,
                            borderRadius:15
                        }}>
                            <Text style={{
                                fontWeight:"bold",
                                fontSize:13,
                                color:"#FFF"
                            }}>View All</Text>
                        </View>
                   </View>
               </View>


               <ScrollView 
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{height:400}}
                >
                    
                    <TouchableOpacity 
                        onPress={()=>navigation.navigate("Detail")}
                        style={{
                            height:250,
                            elevation:2,
                            backgroundColor:"#000",
                            marginLeft:20,
                            marginTop:20,
                            borderRadius:15,
                            marginBottom:10,
                            width:160
                        }}
                    >
                       
                        <View style={{
                            flexDirection:"row",
                            paddingTop:10,
                            paddingHorizontal:10,
                            alignItems:"center"
                        }}>
                            <Text style={{
                                fontWeight:"bold",
                                fontSize: 25,
                                color:"#fff"
                            }}>The Rashtriya Kishor Swasthya Karyakram</Text>
                           
                        </View>
                        <Text style={{
                            paddingHorizontal:10,
                            fontWeight:"bold",
                            color:"#fff",
                            paddingTop:35,
                            alignSelf :'center'
                        }}>
                            APPLY NOW
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        onPress={()=>navigation.navigate("Detail")}
                        style={{
                            height:250,
                            elevation:2,
                            backgroundColor:"#FFF",
                            marginLeft:20,
                            marginTop:20,
                            borderRadius:15,
                            marginBottom:10,
                            width:160
                        }}
                    >
                       
                        <View style={{
                            flexDirection:"row",
                            paddingTop:10,
                            paddingHorizontal:10,
                            alignItems:"center"
                        }}>
                            <Text style={{
                                fontWeight:"bold",
                                fontSize: 25
                            }}>The Rashtriya Kishor Swasthya Karyakram</Text>
                           
                        </View>
                        <Text style={{
                            paddingHorizontal:10,
                            fontWeight:"bold",
                            color:"#b1e5d3",
                            paddingTop:35,
                            alignSelf :'center'
                        }}>
                            APPLY NOW
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        onPress={()=>navigation.navigate("Detail")}
                        style={{
                            height:250,
                            elevation:2,
                            backgroundColor:"#000",
                            marginLeft:20,
                            marginTop:20,
                            borderRadius:15,
                            marginBottom:10,
                            width:160
                        }}
                    >
                       
                        <View style={{
                            flexDirection:"row",
                            paddingTop:10,
                            paddingHorizontal:10,
                            alignItems:"center"
                        }}>
                            <Text style={{
                                fontWeight:"bold",
                                fontSize: 25,
                                color:"#fff"
                            }}>The Rashtriya Kishor Swasthya Karyakram</Text>
                           
                        </View>
                        <Text style={{
                            paddingHorizontal:10,
                            fontWeight:"bold",
                            color:"#fff",
                            paddingTop:35,
                            alignSelf :'center'
                        }}>
                            APPLY NOW
                        </Text>
                    </TouchableOpacity>


                </ScrollView>

                <View style={{
                  paddingTop:5,
                   flexDirection:"row",
                   paddingHorizontal:20,
                   width:"100%",
                   alignItems:"center"
               }}>
                   <View style={{width:"50%"}}>
                        <Text style={{
                            fontWeight:"bold",
                            fontSize:17,
                            color:"#000"
                        }}>Hospital Packages</Text>
                       

                   </View>
                   <View style={{width:"50%", alignItems:"flex-end"}}>
                        <View style={{
                            backgroundColor:"#000",
                            paddingHorizontal:20,
                            paddingVertical:5,
                            borderRadius:15
                        }}>
                            <Text style={{
                                fontWeight:"bold",
                                fontSize:13,
                                color:"#fff"
                            }}>View All</Text>
                        </View>
                   </View>
               </View>

                <ScrollView 
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{height:400}}
                >
                    
                    <TouchableOpacity 
                        onPress={()=>navigation.navigate("Detail")}
                        style={{
                            height:250,
                            elevation:2,
                            backgroundColor:"#000",
                            marginLeft:20,
                            marginTop:20,
                            borderRadius:15,
                            marginBottom:10,
                            width:160
                        }}
                    >
                       
                        <View style={{
                            flexDirection:"row",
                            paddingTop:10,
                            paddingHorizontal:10,
                            alignItems:"center"
                        }}>
                            <Text style={{
                                fontWeight:"bold",
                                fontSize: 25,
                                color:"#fff"
                            }}>The Rashtriya Kishor Swasthya Karyakram</Text>
                           
                        </View>
                        <Text style={{
                            paddingHorizontal:10,
                            fontWeight:"bold",
                            color:"#fff",
                            paddingTop:35,
                            alignSelf :'center'
                        }}>
                            APPLY NOW
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        onPress={()=>navigation.navigate("Detail")}
                        style={{
                            height:250,
                            elevation:2,
                            backgroundColor:"#FFF",
                            marginLeft:20,
                            marginTop:20,
                            borderRadius:15,
                            marginBottom:10,
                            width:160
                        }}
                    >
                       
                        <View style={{
                            flexDirection:"row",
                            paddingTop:10,
                            paddingHorizontal:10,
                            alignItems:"center"
                        }}>
                            <Text style={{
                                fontWeight:"bold",
                                fontSize: 25
                            }}>The Rashtriya Kishor Swasthya Karyakram</Text>
                           
                        </View>
                        <Text style={{
                            paddingHorizontal:10,
                            fontWeight:"bold",
                            color:"#b1e5d3",
                            paddingTop:35,
                            alignSelf :'center'
                        }}>
                            APPLY NOW
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        onPress={()=>navigation.navigate("Detail")}
                        style={{
                            height:250,
                            elevation:2,
                            backgroundColor:"#000",
                            marginLeft:20,
                            marginTop:20,
                            borderRadius:15,
                            marginBottom:10,
                            width:160
                        }}
                    >
                       
                        <View style={{
                            flexDirection:"row",
                            paddingTop:10,
                            paddingHorizontal:10,
                            alignItems:"center"
                        }}>
                            <Text style={{
                                fontWeight:"bold",
                                fontSize: 25,
                                color:"#fff"
                            }}>The Rashtriya Kishor Swasthya Karyakram</Text>
                           
                        </View>
                        <Text style={{
                            paddingHorizontal:10,
                            fontWeight:"bold",
                            color:"#fff",
                            paddingTop:35,
                            alignSelf :'center'
                        }}>
                            APPLY NOW
                        </Text>
                    </TouchableOpacity>

                </ScrollView>
      <Button
        title="Go to details screen"
        color= '#000000'
        onPress={() => navigation.navigate("Notifications")}
      />

      </View>
      </ScrollView>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  

  wrapper: {},

 
  categoryContainer: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    marginTop: 25,
    marginBottom: 10,
  },
  categoryBtn: {
    flex: 1,
    width: '30%',
    marginHorizontal: 0,
    alignSelf: 'center',
  },
  categoryIcon: {
    borderWidth: 0,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: 70,
    height: 70,
    backgroundColor: '#000',
    borderRadius: 50,
  },
  categoryBtnTxt: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 10,
    color: '#000',
  },
});