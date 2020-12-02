import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen'
import NotificationsScreen from './NotificatonsScreen'
import Icon from 'react-native-vector-icons/Ionicons'
import ExploreScreen from './ExploreScreen';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ProfileScreen from './ProfileScreen';
import { 
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  TextInput,
  Picker
} from "react-native";
const HomeStack = createStackNavigator();
const ExploreStack = createStackNavigator();
const NotificationsStack = createStackNavigator();

const MainScreen = () => (
  <Tab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
      barStyle={{ backgroundColor: '#000000' }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
     
      <Tab.Screen
        name="Notifications"
        component={NotificationsStackScreen}
        options={{
          tabBarLabel: 'Notifications',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={ExploreStackScreen}
        options={{
          tabBarLabel: 'Explore',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  
  );

const Tab = createMaterialBottomTabNavigator();
export default MainScreen;

const HomeStackScreen = ({navigation}) => (
  
    <HomeStack.Navigator screenOptions={{
      headerStyle: {
      backgroundColor: '#000000',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
      fontWeight: 'bold'
      }
    }}>
    
            <HomeStack.Screen name="Home" component={HomeScreen} options={{
              title:'Home',
              headerLeft: ()=> (
                <Icon.Button name="md-menu" size={25} backgroundColor="#000000"
                onPress={() => navigation.openDrawer()}></Icon.Button>
              )
    
            }} />
    
          </HomeStack.Navigator>
    );
    const NotificationsStackScreen = ({navigation}) => (
    <NotificationsStack.Navigator screenOptions={{
      headerStyle: {
      backgroundColor: '#000000',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
      fontWeight: 'bold'
      }
    }}>
              <NotificationsStack.Screen name="Notification" component={NotificationsScreen} options={{
              title:'Services',
              headerLeft: ()=> (
             
                <Icon.Button name="md-menu" size={25} backgroundColor='#000000'
              onPress={() => navigation.openDrawer()}></Icon.Button>
              
              )
             
              
                
            
              }}/>
      
            </NotificationsStack.Navigator>
    );
    const ExploreStackScreen = ({navigation}) => (
      <ExploreStack.Navigator screenOptions={{
        headerStyle: {
        backgroundColor: '#000000',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold'
        }
      }}>
                <ExploreStack.Screen name="Notification" component={ExploreScreen} options={{
                title:'Explore',
                headerLeft: ()=> (
               
                  <Icon.Button name="md-menu" size={25} backgroundColor='#000000'
                onPress={() => navigation.openDrawer()}></Icon.Button>
                )
                }}/>
        
              </ExploreStack.Navigator>
      );
    