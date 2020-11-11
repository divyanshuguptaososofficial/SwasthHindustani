import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar ,TouchableOpacity} from 'react-native';
import { useTheme } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const HomeScreen = ({navigation}) => {

  const { colors } = useTheme();

  const theme = useTheme();
  
    return (
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
     
      <Button
        title="Go to details screen"
        color= '#000000'
        onPress={() => navigation.navigate("Notifications")}
      />
      </View>
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